"use client";
import React, { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import Link from "next/link";

export default function SubmissionDetail() {
  const router = useRouter();
  const params = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [submission, setSubmission] = useState(null);
  const [updating, setUpdating] = useState(false);
  const [newStatus, setNewStatus] = useState("");
  const [reviewNotes, setReviewNotes] = useState("");

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
        await fetchSubmission(accessToken);
      } catch (error) {
        console.error("Error:", error);
        router.push("/login");
      } finally {
        setLoading(false);
      }
    };

    checkAdminAccess();
  }, [router, params.id]);

  const fetchSubmission = async (token) => {
    try {
      const isProduction = typeof window !== 'undefined' && window.location.hostname !== 'localhost';
      const apiUrl = isProduction 
        ? 'https://ntcogk-submissions-service.vercel.app/api/submissions'
        : (process.env.NEXT_PUBLIC_SUBMISSIONS_API_URL || "http://localhost:5501/api/submissions");

      const response = await fetch(`${apiUrl}/${params.id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        if (data.success) {
          setSubmission(data.data);
          setNewStatus(data.data.status || "pending");
          setReviewNotes(data.data.reviewNotes || "");
        }
      }
    } catch (error) {
      console.error("Error fetching submission:", error);
    }
  };

  const updateStatus = async () => {
    const token = localStorage.getItem("accessToken");
    if (!token) return;

    setUpdating(true);
    try {
      const isProduction = typeof window !== 'undefined' && window.location.hostname !== 'localhost';
      const apiUrl = isProduction 
        ? 'https://ntcogk-submissions-service.vercel.app/api/submissions'
        : (process.env.NEXT_PUBLIC_SUBMISSIONS_API_URL || "http://localhost:5501/api/submissions");

      const response = await fetch(`${apiUrl}/${params.id}/status`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          status: newStatus,
          reviewNotes: reviewNotes,
          reviewedBy: user.email,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        if (data.success) {
          setSubmission(data.data);
          alert("Status updated successfully!");
        }
      } else {
        alert("Failed to update status");
      }
    } catch (error) {
      console.error("Error updating status:", error);
      alert("Failed to update status");
    } finally {
      setUpdating(false);
    }
  };

  const downloadFile = async (fileId, fileName) => {
    const token = localStorage.getItem("accessToken");
    if (!token) return;

    try {
      const isProduction = typeof window !== 'undefined' && window.location.hostname !== 'localhost';
      const apiUrl = isProduction 
        ? 'https://ntcogk-submissions-service.vercel.app/api/submissions'
        : (process.env.NEXT_PUBLIC_SUBMISSIONS_API_URL || "http://localhost:5501/api/submissions");

      const response = await fetch(`${apiUrl}/files/${fileId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = fileName;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
      }
    } catch (error) {
      console.error("Error downloading file:", error);
      alert("Failed to download file");
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "pending":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "under-review":
        return "bg-blue-100 text-blue-800 border-blue-200";
      case "approved":
        return "bg-green-100 text-green-800 border-green-200";
      case "rejected":
        return "bg-red-100 text-red-800 border-red-200";
      case "requires-action":
        return "bg-orange-100 text-orange-800 border-orange-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const getUrgencyColor = (urgency) => {
    switch (urgency) {
      case "urgent":
        return "text-red-600 bg-red-50";
      case "high":
        return "text-orange-600 bg-orange-50";
      case "normal":
        return "text-blue-600 bg-blue-50";
      case "low":
        return "text-green-600 bg-green-50";
      default:
        return "text-gray-600 bg-gray-50";
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#1E4E9A] mx-auto mb-4"></div>
          <p className="text-gray-600">Loading submission...</p>
        </div>
      </div>
    );
  }

  if (!submission) {
    return (
      <div className="min-h-screen bg-gray-50 pt-20 pb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-12 text-center">
            <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <p className="text-gray-600 text-lg mb-4">Submission not found</p>
            <Link href="/admin/submissions" className="text-[#1E4E9A] hover:text-[#163E7A]">
              Back to Submissions
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-20 pb-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <Link
            href="/admin/submissions"
            className="inline-flex items-center text-[#1E4E9A] hover:text-[#163E7A] mb-4 transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Submissions
          </Link>
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Submission Details</h1>
              <p className="text-gray-600 mt-2">ID: {submission.submissionId}</p>
            </div>
            <span className={`inline-flex items-center px-4 py-2 rounded-lg text-sm font-semibold border-2 ${getStatusColor(submission.status)}`}>
              {(submission.status || "pending").charAt(0).toUpperCase() + (submission.status || "pending").slice(1).replace("-", " ")}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Submitter Information */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Submitter Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm font-medium text-gray-600">Full Name</p>
                  <p className="text-gray-900 mt-1">{submission.fullName}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-600">Email</p>
                  <p className="text-gray-900 mt-1">{submission.email}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-600">Phone</p>
                  <p className="text-gray-900 mt-1">{submission.phone}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-600">Position</p>
                  <p className="text-gray-900 mt-1">{submission.position}</p>
                </div>
              </div>
            </div>

            {/* Church Information */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Church Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm font-medium text-gray-600">Church/Branch</p>
                  <p className="text-gray-900 mt-1">{submission.branch}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-600">Region</p>
                  <p className="text-gray-900 mt-1">{submission.regionDisplay || submission.region}</p>
                </div>
              </div>
            </div>

            {/* Submission Details */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Submission Details</h2>
              <div className="space-y-4">
                <div>
                  <p className="text-sm font-medium text-gray-600">Type</p>
                  <p className="text-gray-900 mt-1">{submission.submissionType}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-600">Subject</p>
                  <p className="text-gray-900 mt-1">{submission.subject}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-600">Urgency</p>
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium mt-1 ${getUrgencyColor(submission.urgency)}`}>
                    {submission.urgencyDisplay || submission.urgency}
                  </span>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-600">Description</p>
                  <p className="text-gray-900 mt-1 whitespace-pre-wrap">{submission.description}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-600">Submitted On</p>
                  <p className="text-gray-900 mt-1">
                    {new Date(submission.createdAt).toLocaleString('en-US', {
                      month: 'long',
                      day: 'numeric',
                      year: 'numeric',
                      hour: '2-digit',
                      minute: '2-digit'
                    })}
                  </p>
                </div>
              </div>
            </div>

            {/* Attached Files */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Attached Files</h2>
              {submission.files && submission.files.length > 0 ? (
                <div className="space-y-3">
                  {submission.files.map((file, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-200">
                      <div className="flex items-center space-x-3">
                        <svg className="w-8 h-8 text-[#1E4E9A]" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
                        </svg>
                        <div>
                          <p className="font-medium text-gray-900">{file.fileName}</p>
                          <p className="text-sm text-gray-500">
                            {(file.fileSize / 1024 / 1024).toFixed(2)} MB • {file.fileType}
                          </p>
                        </div>
                      </div>
                      <button
                        onClick={() => downloadFile(file.fileId, file.fileName)}
                        className="inline-flex items-center px-4 py-2 bg-[#1E4E9A] hover:bg-[#163E7A] text-white rounded-lg transition-colors"
                      >
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                        Download
                      </button>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500">No files attached</p>
              )}
            </div>
          </div>

          {/* Sidebar - Status Update */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 sticky top-24">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Update Status</h2>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Status
                  </label>
                  <select
                    value={newStatus}
                    onChange={(e) => setNewStatus(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1E4E9A] focus:border-transparent"
                  >
                    <option value="pending">Pending</option>
                    <option value="under-review">Under Review</option>
                    <option value="approved">Approved</option>
                    <option value="rejected">Rejected</option>
                    <option value="requires-action">Requires Action</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Review Notes
                  </label>
                  <textarea
                    value={reviewNotes}
                    onChange={(e) => setReviewNotes(e.target.value)}
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1E4E9A] focus:border-transparent resize-none"
                    placeholder="Add notes about this review..."
                  />
                </div>

                <button
                  onClick={updateStatus}
                  disabled={updating}
                  className="w-full bg-[#E02020] hover:bg-[#B81C1C] text-white font-semibold py-3 px-4 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {updating ? "Updating..." : "Update Status"}
                </button>
              </div>

              {/* Review History */}
              {submission.reviewedBy && (
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <h3 className="text-sm font-semibold text-gray-900 mb-2">Review History</h3>
                  <div className="text-sm text-gray-600 space-y-1">
                    <p>Reviewed by: {submission.reviewedBy}</p>
                    {submission.reviewedAt && (
                      <p>Date: {new Date(submission.reviewedAt).toLocaleDateString()}</p>
                    )}
                    {submission.reviewNotes && (
                      <div className="mt-2 p-3 bg-gray-50 rounded-lg">
                        <p className="text-xs font-medium text-gray-700 mb-1">Notes:</p>
                        <p className="text-gray-600">{submission.reviewNotes}</p>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
