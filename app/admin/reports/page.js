"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function GenerateReports() {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({
    users: {
      total: 0,
      verified: 0,
      active: 0,
      newThisMonth: 0,
    },
    submissions: {
      total: 0,
      pending: 0,
      approved: 0,
      rejected: 0,
    },
  });

  useEffect(() => {
    const checkAdminAccess = async () => {
      const accessToken = localStorage.getItem("accessToken");
      const userData = localStorage.getItem("user");

      if (!accessToken || !userData) {
        router.push("/login");
        return;
      }

      try {
        const parsedUser = JSON.parse(userData);

        if (parsedUser.role !== "admin" && parsedUser.role !== "super-admin") {
          router.push("/");
          return;
        }

        setUser(parsedUser);
        await fetchReportData(accessToken);
      } catch (error) {
        console.error("Error:", error);
        router.push("/login");
      } finally {
        setLoading(false);
      }
    };

    checkAdminAccess();
  }, [router]);

  const fetchReportData = async (token) => {
    try {
      // Fetch user stats
      const authProvider = localStorage.getItem("authProvider");
      const authApiUrl = authProvider === "social"
        ? process.env.NEXT_PUBLIC_SOCIAL_AUTH_API_URL || "http://localhost:5503/api/auth"
        : process.env.NEXT_PUBLIC_AUTH_API_URL || "http://localhost:5502/api/auth";

      const userResponse = await fetch(`${authApiUrl}/admin/stats`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (userResponse.ok) {
        const result = await userResponse.json();
        if (result.success) {
          setStats(prev => ({
            ...prev,
            users: {
              total: result.data.totalUsers || 0,
              verified: result.data.verifiedUsers || 0,
              active: result.data.activeUsers || 0,
              newThisMonth: result.data.recentRegistrations || 0,
            },
          }));
        }
      }

      // Fetch submissions stats
      const isProduction = typeof window !== 'undefined' && window.location.hostname !== 'localhost';
      const submissionsApiUrl = isProduction
        ? 'https://ntcogk-submissions-service.vercel.app/api' // Update this when you deploy
        : (process.env.NEXT_PUBLIC_SUBMISSIONS_API_URL?.replace('/submissions', '') || "http://localhost:5501/api");

      const submissionsResponse = await fetch(`${submissionsApiUrl}/submissions/stats`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (submissionsResponse.ok) {
        const submissionsResult = await submissionsResponse.json();
        if (submissionsResult.success) {
          setStats(prev => ({
            ...prev,
            submissions: {
              total: submissionsResult.data.total || 0,
              pending: submissionsResult.data.pending || 0,
              approved: submissionsResult.data.approved || 0,
              rejected: 0, // Backend doesn't have rejected count, calculate if needed
            },
          }));
        }
      }
    } catch (error) {
      console.error("Error fetching report data:", error);
    }
  };

  const downloadReport = async (reportType) => {
    const token = localStorage.getItem("accessToken");
    if (!token) {
      alert("Please login to download reports");
      return;
    }

    try {
      let data = [];
      let filename = "";
      let headers = [];

      const authProvider = localStorage.getItem("authProvider");
      const isProduction = typeof window !== 'undefined' && window.location.hostname !== 'localhost';

      console.log("Downloading report:", reportType);
      console.log("Auth provider:", authProvider);
      console.log("Is production:", isProduction);

      if (reportType.includes("Users") || reportType.includes("Registrations")) {
        // Fetch users data
        let authApiUrl;
        if (authProvider === "social") {
          authApiUrl = isProduction
            ? 'https://ntcogk-social-authentication-service.vercel.app/api/auth'
            : (process.env.NEXT_PUBLIC_SOCIAL_AUTH_API_URL || "http://localhost:5503/api/auth");
        } else {
          authApiUrl = isProduction
            ? 'https://ntcogk-form-authentication-service.vercel.app/api/auth'
            : (process.env.NEXT_PUBLIC_AUTH_API_URL || "http://localhost:5502/api/auth");
        }



        const response = await fetch(`${authApiUrl}/admin/users`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        console.log("Response status:", response.status);

        if (response.ok) {
          const result = await response.json();
          console.log("Users result:", result);

          const users = result.data?.users || result.data || [];
          console.log("Users array length:", users.length);

          // Filter based on report type
          if (reportType === "Active Users") {
            data = users.filter(u => u.isActive);
          } else if (reportType === "New Registrations") {
            const oneMonthAgo = new Date();
            oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1);
            data = users.filter(u => new Date(u.createdAt) >= oneMonthAgo);
          } else {
            data = users;
          }

          console.log("Filtered data length:", data.length);

          headers = ["Name", "Email", "Role", "Verified", "Active", "Joined", "Last Login"];
          data = data.map(u => [
            `${u.firstName || ""} ${u.lastName || ""}`.trim() || "N/A",
            u.email || "N/A",
            u.role || "user",
            u.isVerified ? "Yes" : "No",
            u.isActive ? "Yes" : "No",
            u.createdAt ? new Date(u.createdAt).toLocaleDateString() : "N/A",
            u.lastLogin ? new Date(u.lastLogin).toLocaleDateString() : "Never"
          ]);
          filename = `${reportType.replace(/\s+/g, '_')}_${new Date().toISOString().split('T')[0]}.csv`;
        } else {
          console.error("Failed to fetch users:", response.status, response.statusText);
          const errorText = await response.text();
          console.error("Error response:", errorText);
          alert(`Failed to fetch users data. Status: ${response.status}`);
          return;
        }
      } else if (reportType.includes("Submissions")) {
        // Fetch submissions data
        const submissionsApiUrl = isProduction
          ? 'https://ntcogk-submissions-service.vercel.app/api'
          : (process.env.NEXT_PUBLIC_SUBMISSIONS_API_URL?.replace('/submissions', '') || "http://localhost:5501/api");

        const response = await fetch(`${submissionsApiUrl}/submissions`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        if (response.ok) {
          const result = await response.json();
          const submissions = result.data?.submissions || result.data || [];

          // Filter based on report type
          if (reportType === "Pending Submissions") {
            data = submissions.filter(s => s.status === "pending");
          } else if (reportType === "By Region") {
            data = submissions;
          } else {
            data = submissions;
          }

          headers = ["Submission ID", "Name", "Email", "Church", "Region", "Type", "Subject", "Urgency", "Status", "Date"];
          data = data.map(s => [
            s.submissionId || s._id || "N/A",
            s.fullName || "N/A",
            s.email || "N/A",
            s.branch || "N/A",
            s.region || "N/A",
            s.submissionType || "N/A",
            s.subject || "N/A",
            s.urgency || "normal",
            s.status || "pending",
            s.createdAt ? new Date(s.createdAt).toLocaleDateString() : "N/A"
          ]);
          filename = `${reportType.replace(/\s+/g, '_')}_${new Date().toISOString().split('T')[0]}.csv`;
        }
      }

      console.log("Final data length:", data.length);

      if (data.length === 0) {
        alert(`No data available for this report. Please check:\n1. You are logged in as admin\n2. The API is accessible\n3. There is data in the database\n\nCheck browser console for details.`);
        return;
      }

      // Generate CSV
      const csvContent = [
        headers.join(","),
        ...data.map(row => row.map(cell => `"${cell}"`).join(","))
      ].join("\n");

      // Download CSV
      const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
      const link = document.createElement("a");
      const url = URL.createObjectURL(blob);
      link.setAttribute("href", url);
      link.setAttribute("download", filename);
      link.style.visibility = "hidden";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

    } catch (error) {
      console.error("Error downloading report:", error);
      alert("Failed to download report. Please try again.");
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#1E4E9A] mx-auto mb-4"></div>
          <p className="text-gray-600">Loading reports...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Generate Reports</h1>
              <p className="text-gray-600 mt-2">
                View analytics and download reports
              </p>
            </div>
            <Link
              href="/admin"
              className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Dashboard
            </Link>
          </div>
        </div>

        {/* Overview Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Users</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">{stats.users.total}</p>
              </div>
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-[#1E4E9A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Verified Users</p>
                <p className="text-3xl font-bold text-green-600 mt-2">{stats.users.verified}</p>
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Active Users</p>
                <p className="text-3xl font-bold text-purple-600 mt-2">{stats.users.active}</p>
              </div>
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">New This Month</p>
                <p className="text-3xl font-bold text-[#E02020] mt-2">{stats.users.newThisMonth}</p>
              </div>
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-[#E02020]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Submission Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Submissions</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">{stats.submissions.total}</p>
              </div>
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Pending</p>
                <p className="text-3xl font-bold text-yellow-600 mt-2">{stats.submissions.pending}</p>
              </div>
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Approved</p>
                <p className="text-3xl font-bold text-green-600 mt-2">{stats.submissions.approved}</p>
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Rejected</p>
                <p className="text-3xl font-bold text-red-600 mt-2">{stats.submissions.rejected}</p>
              </div>
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Report Types */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* User Reports */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
              <svg className="w-6 h-6 mr-2 text-[#1E4E9A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
              User Reports
            </h2>
            <div className="space-y-3">
              <button
                onClick={() => downloadReport("All Users")}
                className="w-full flex items-center justify-between p-4 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors"
              >
                <div className="text-left">
                  <p className="font-semibold text-gray-900">All Users Report</p>
                  <p className="text-sm text-gray-600">Complete list of all registered users</p>
                </div>
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </button>

              <button
                onClick={() => downloadReport("Active Users")}
                className="w-full flex items-center justify-between p-4 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors"
              >
                <div className="text-left">
                  <p className="font-semibold text-gray-900">Active Users Report</p>
                  <p className="text-sm text-gray-600">Users who logged in recently</p>
                </div>
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </button>

              <button
                onClick={() => downloadReport("New Registrations")}
                className="w-full flex items-center justify-between p-4 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors"
              >
                <div className="text-left">
                  <p className="font-semibold text-gray-900">New Registrations</p>
                  <p className="text-sm text-gray-600">Users registered this month</p>
                </div>
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </button>
            </div>
          </div>

          {/* Submission Reports */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
              <svg className="w-6 h-6 mr-2 text-[#E02020]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Submission Reports
            </h2>
            <div className="space-y-3">
              <button
                onClick={() => downloadReport("All Submissions")}
                className="w-full flex items-center justify-between p-4 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors"
              >
                <div className="text-left">
                  <p className="font-semibold text-gray-900">All Submissions</p>
                  <p className="text-sm text-gray-600">Complete submission history</p>
                </div>
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </button>

              <button
                onClick={() => downloadReport("Pending Submissions")}
                className="w-full flex items-center justify-between p-4 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors"
              >
                <div className="text-left">
                  <p className="font-semibold text-gray-900">Pending Submissions</p>
                  <p className="text-sm text-gray-600">Submissions awaiting review</p>
                </div>
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </button>

              <button
                onClick={() => downloadReport("By Region")}
                className="w-full flex items-center justify-between p-4 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors"
              >
                <div className="text-left">
                  <p className="font-semibold text-gray-900">Submissions by Region</p>
                  <p className="text-sm text-gray-600">Regional breakdown of submissions</p>
                </div>
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Info Banner */}
        <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
          <div className="flex items-start">
            <svg className="w-6 h-6 text-[#1E4E9A] mt-0.5 mr-3" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Report Information</h3>
              <p className="text-gray-700 text-sm">
                Reports are generated in real-time and include the most up-to-date information.
                Downloaded reports are in CSV format and can be opened in Excel or Google Sheets.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
