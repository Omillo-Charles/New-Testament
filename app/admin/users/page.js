"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function ManageUsers() {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterRole, setFilterRole] = useState("all");
  const [filterStatus, setFilterStatus] = useState("all");

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
        await fetchUsers(accessToken);
      } catch (error) {
        console.error("Error:", error);
        router.push("/login");
      } finally {
        setLoading(false);
      }
    };

    checkAdminAccess();
  }, [router]);

  const fetchUsers = async (token) => {
    try {
      const authProvider = localStorage.getItem("authProvider") || "form";
      
      console.log("Auth provider:", authProvider);
      console.log("Hostname:", window.location.hostname);
      
      // Use the same logic as the main admin page
      let apiUrl;
      if (authProvider === "social") {
        apiUrl = process.env.NEXT_PUBLIC_SOCIAL_AUTH_API_URL || "http://localhost:5503/api/auth";
      } else {
        apiUrl = process.env.NEXT_PUBLIC_AUTH_API_URL || "http://localhost:5502/api/auth";
      }

      console.log("API URL:", apiUrl);
      console.log("Fetching users from:", `${apiUrl}/admin/users`);

      let response = await fetch(`${apiUrl}/admin/users`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      console.log("Users response status:", response.status);

      // If 404, try alternative endpoint
      if (response.status === 404) {
        console.log("Trying alternative endpoint: /users");
        response = await fetch(`${apiUrl}/users`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log("Alternative endpoint status:", response.status);
      }

      if (response.ok) {
        const result = await response.json();
        console.log("Users data:", result);
        
        if (result.success) {
          const usersArray = result.data?.users || result.data || [];
          console.log("Users array length:", usersArray.length);
          console.log("First user sample:", usersArray[0]);
          setUsers(usersArray);
          setFilteredUsers(usersArray);
          
          if (usersArray.length === 0) {
            console.warn("No users found in the response");
          }
        } else {
          console.error("API returned success: false");
        }
      } else {
        console.error("Failed to fetch users. Status:", response.status, response.statusText);
        const errorData = await response.json().catch(() => ({}));
        console.error("Error details:", errorData);
        
        // Show helpful message
        if (response.status === 404) {
          console.error(`Endpoint not found: ${apiUrl}/admin/users`);
          console.log("Note: The /admin/stats endpoint works, but /admin/users is not implemented.");
          console.log("You need to add the /admin/users endpoint to your authentication backend.");
          alert(`The user list endpoint is not available.\n\nThe authentication backend needs to implement:\nGET ${apiUrl}/admin/users\n\nThis endpoint should return all users for admin management.`);
        } else {
          alert(`Failed to fetch users. Status: ${response.status}. Check console for details.`);
        }
      }
    } catch (error) {
      console.error("Error fetching users:", error);
      alert(`Error fetching users: ${error.message}. Check console for details.`);
    }
  };

  useEffect(() => {
    let filtered = users;

    if (searchTerm) {
      filtered = filtered.filter(u => 
        u.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        u.firstName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        u.lastName?.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (filterRole !== "all") {
      filtered = filtered.filter(u => u.role === filterRole);
    }

    if (filterStatus !== "all") {
      if (filterStatus === "verified") {
        filtered = filtered.filter(u => u.isVerified);
      } else if (filterStatus === "unverified") {
        filtered = filtered.filter(u => !u.isVerified);
      } else if (filterStatus === "active") {
        filtered = filtered.filter(u => u.isActive);
      } else if (filterStatus === "inactive") {
        filtered = filtered.filter(u => !u.isActive);
      }
    }

    setFilteredUsers(filtered);
  }, [searchTerm, filterRole, filterStatus, users]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#1E4E9A] mx-auto mb-4"></div>
          <p className="text-gray-600">Loading users...</p>
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
              <h1 className="text-3xl font-bold text-gray-900">Manage Users</h1>
              <p className="text-gray-600 mt-2">
                View and manage all user accounts
              </p>
            </div>
            <div className="flex items-center space-x-3">
              <button
                onClick={() => {
                  const token = localStorage.getItem("accessToken");
                  if (token) fetchUsers(token);
                }}
                className="inline-flex items-center px-4 py-2 bg-[#1E4E9A] hover:bg-[#163E7A] text-white rounded-lg transition-colors"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                Refresh
              </button>
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
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <p className="text-sm font-medium text-gray-600">Total Users</p>
            <p className="text-3xl font-bold text-gray-900 mt-2">{users.length}</p>
          </div>
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <p className="text-sm font-medium text-gray-600">Verified</p>
            <p className="text-3xl font-bold text-green-600 mt-2">
              {users.filter(u => u.isVerified).length}
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <p className="text-sm font-medium text-gray-600">Active</p>
            <p className="text-3xl font-bold text-blue-600 mt-2">
              {users.filter(u => u.isActive).length}
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <p className="text-sm font-medium text-gray-600">Admins</p>
            <p className="text-3xl font-bold text-purple-600 mt-2">
              {users.filter(u => u.role === "admin" || u.role === "super-admin").length}
            </p>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Search
              </label>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search by name or email..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1E4E9A] focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Role
              </label>
              <select
                value={filterRole}
                onChange={(e) => setFilterRole(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1E4E9A] focus:border-transparent"
              >
                <option value="all">All Roles</option>
                <option value="user">User</option>
                <option value="admin">Admin</option>
                <option value="super-admin">Super Admin</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Status
              </label>
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1E4E9A] focus:border-transparent"
              >
                <option value="all">All Status</option>
                <option value="verified">Verified</option>
                <option value="unverified">Unverified</option>
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
              </select>
            </div>
          </div>
        </div>

        {/* Users Table */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    User
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Role
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Joined
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Last Login
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredUsers.length === 0 ? (
                  <tr>
                    <td colSpan="5" className="px-6 py-12 text-center text-gray-500">
                      No users found
                    </td>
                  </tr>
                ) : (
                  filteredUsers.map((u) => (
                    <tr key={u._id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10 bg-[#1E4E9A] rounded-full flex items-center justify-center">
                            <span className="text-white font-semibold">
                              {u.firstName?.[0] || u.email?.[0] || "U"}
                            </span>
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">
                              {u.firstName && u.lastName ? `${u.firstName} ${u.lastName}` : "N/A"}
                            </div>
                            <div className="text-sm text-gray-500">{u.email}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                          u.role === "super-admin" ? "bg-purple-100 text-purple-800" :
                          u.role === "admin" ? "bg-blue-100 text-blue-800" :
                          "bg-gray-100 text-gray-800"
                        }`}>
                          {u.role}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center space-x-2">
                          {u.isVerified && (
                            <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
                              Verified
                            </span>
                          )}
                          {u.isActive && (
                            <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800">
                              Active
                            </span>
                          )}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {new Date(u.createdAt).toLocaleDateString()}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {u.lastLogin ? new Date(u.lastLogin).toLocaleDateString() : "Never"}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
