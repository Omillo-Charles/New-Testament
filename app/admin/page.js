"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function AdminDashboard() {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({
    totalSubmissions: 0,
    pendingSubmissions: 0,
    totalUsers: 0,
    recentActivity: 0,
    verifiedUsers: 0,
    activeUsers: 0,
    formAuthUsers: 0,
    socialAuthUsers: 0,
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
        
        // Check if user is admin
        if (parsedUser.role !== "admin" && parsedUser.role !== "super-admin") {
          router.push("/");
          return;
        }

        setUser(parsedUser);

        // Fetch admin statistics
        await fetchStats(accessToken);
      } catch (error) {
        console.error("Error parsing user data:", error);
        router.push("/login");
      } finally {
        setLoading(false);
      }
    };

    checkAdminAccess();
  }, [router]);

  const fetchStats = async (token) => {
    try {
      const authProvider = localStorage.getItem("authProvider");
      const apiUrl = authProvider === "social" 
        ? process.env.NEXT_PUBLIC_SOCIAL_AUTH_API_URL || "http://localhost:5503/api/auth"
        : process.env.NEXT_PUBLIC_AUTH_API_URL || "http://localhost:5502/api/auth";

      const response = await fetch(`${apiUrl}/admin/stats`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        const result = await response.json();
        if (result.success) {
          setStats(prevStats => ({
            ...prevStats,
            totalUsers: result.data.totalUsers || 0,
            recentActivity: result.data.recentRegistrations || 0,
            verifiedUsers: result.data.verifiedUsers || 0,
            activeUsers: result.data.activeUsers || 0,
            formAuthUsers: result.data.formAuthUsers || 0,
            socialAuthUsers: result.data.socialAuthUsers || 0,
          }));
        }
      }
    } catch (error) {
      console.error("Error fetching stats:", error);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#1E4E9A] mx-auto mb-4"></div>
          <p className="text-gray-600">Loading admin dashboard...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Welcome back, {user.firstName || "Admin"}!
          </h1>
          <p className="text-gray-600 mt-2">
            Here's what's happening with your organization today.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Users</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">{stats.totalUsers}</p>
                <p className="text-xs text-gray-500 mt-1">
                  Form: {stats.formAuthUsers} | Social: {stats.socialAuthUsers}
                </p>
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Verified Users</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">{stats.verifiedUsers}</p>
                <p className="text-xs text-gray-500 mt-1">
                  {stats.totalUsers > 0 ? Math.round((stats.verifiedUsers / stats.totalUsers) * 100) : 0}% of total
                </p>
              </div>
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-[#1E4E9A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Active Users</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">{stats.activeUsers}</p>
                <p className="text-xs text-gray-500 mt-1">
                  {stats.totalUsers > 0 ? Math.round((stats.activeUsers / stats.totalUsers) * 100) : 0}% of total
                </p>
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
                <p className="text-sm font-medium text-gray-600">New Users (7 days)</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">{stats.recentActivity}</p>
                <p className="text-xs text-gray-500 mt-1">
                  Recent registrations
                </p>
              </div>
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-[#E02020]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Quick Actions</h2>
            <div className="space-y-3">
              <Link
                href="/admin/submissions"
                className="flex items-center p-4 rounded-lg hover:bg-gray-50 transition-colors border border-gray-200"
              >
                <div className="w-10 h-10 bg-[#1E4E9A] rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">View Submissions</p>
                  <p className="text-sm text-gray-600">Review and manage document submissions</p>
                </div>
              </Link>

              <Link
                href="/admin/users"
                className="flex items-center p-4 rounded-lg hover:bg-gray-50 transition-colors border border-gray-200"
              >
                <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Manage Users</p>
                  <p className="text-sm text-gray-600">View and manage user accounts</p>
                </div>
              </Link>

              <Link
                href="/admin/reports"
                className="flex items-center p-4 rounded-lg hover:bg-gray-50 transition-colors border border-gray-200"
              >
                <div className="w-10 h-10 bg-[#E02020] rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Generate Reports</p>
                  <p className="text-sm text-gray-600">View analytics and generate reports</p>
                </div>
              </Link>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">System Information</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between py-3 border-b border-gray-200">
                <span className="text-sm font-medium text-gray-600">Your Role</span>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-[#1E4E9A] text-white">
                  {user.role.charAt(0).toUpperCase() + user.role.slice(1)}
                </span>
              </div>
              <div className="flex items-center justify-between py-3 border-b border-gray-200">
                <span className="text-sm font-medium text-gray-600">Email</span>
                <span className="text-sm text-gray-900">{user.email}</span>
              </div>
              <div className="flex items-center justify-between py-3 border-b border-gray-200">
                <span className="text-sm font-medium text-gray-600">Last Login</span>
                <span className="text-sm text-gray-900">
                  {user.lastLogin 
                    ? new Date(user.lastLogin).toLocaleString('en-US', { 
                        month: 'short', 
                        day: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit'
                      })
                    : "N/A"}
                </span>
              </div>
              <div className="flex items-center justify-between py-3">
                <span className="text-sm font-medium text-gray-600">Account Status</span>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  Active
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
