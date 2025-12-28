"use client";
import HeroSection from '../components/hero';
import Link from 'next/link';
import { useAuth } from '../lib/auth';
import { useEffect, useState } from 'react';

function AuthenticatedWelcome() {
  const { isAuthenticated, user } = useAuth();
  const [mounted, setMounted] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('user');
    window.location.reload();
  };

  if (!mounted || !isAuthenticated || !user) return null;

  return (
    <>
      <div className="bg-gradient-to-r from-[#1E4E9A] to-[#E02020] text-white py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              {user.picture && (
                <img
                  src={user.picture}
                  alt={user.fullName}
                  className="w-8 h-8 rounded-full border-2 border-white"
                />
              )}
              <div>
                <p className="text-sm font-medium">
                  Welcome back, {user.fullName}!
                </p>
                <p className="text-xs opacity-90">
                  Blessed to have you in our church family
                </p>
              </div>
            </div>
            <button
              onClick={() => setShowLogoutModal(true)}
              className="text-xs bg-white/20 hover:bg-white/30 px-3 py-1 rounded-full transition-colors"
            >
              Sign Out
            </button>
          </div>
        </div>
      </div>

      {/* Logout Confirmation Modal */}
      {showLogoutModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[200] px-4">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full mx-4">
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100">
                  <svg className="h-6 w-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                  </svg>
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  Sign Out Confirmation
                </h3>
                <p className="text-sm text-gray-500 mb-6">
                  Are you sure you want to sign out? You'll need to sign in again to access your account and receive event notifications.
                </p>
              </div>
              <div className="flex space-x-3">
                <button
                  onClick={() => setShowLogoutModal(false)}
                  className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-2 px-4 rounded-md transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={handleLogout}
                  className="flex-1 bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded-md transition-colors"
                >
                  Sign Out
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default function Home() {
  const [paddingTop, setPaddingTop] = useState('108px');

  useEffect(() => {
    const updatePadding = () => {
      setPaddingTop(window.innerWidth >= 1024 ? '128px' : '108px');
    };

    updatePadding();
    window.addEventListener('resize', updatePadding);
    return () => window.removeEventListener('resize', updatePadding);
  }, []);

  return (
    <div
      className="min-h-screen bg-white"
      style={{
        paddingTop: paddingTop
      }}
    >
      <AuthenticatedWelcome />
      <HeroSection />

      {/* Ministries Section */}
      <section className="relative py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-600 mb-6">
              Welcome to Our Church Family
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Find your place in our vibrant community. Whether you're young or old,
              new to faith or seasoned in your journey, there's a ministry where you belong.
            </p>
          </div>

          {/* Ministries Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Adult Ministry */}
            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="aspect-[4/5] relative">
                <img
                  src="/aboutImages/about1.png"
                  alt="Adult Ministry"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/75 to-black/40"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-lg font-semibold mb-2">Adults Fellowship</h3>
                  <p className="text-sm text-gray-200 mb-4 leading-relaxed">
                    Deepening faith through Bible study, fellowship, and service opportunities
                    designed for adults seeking spiritual growth and community connection.
                  </p>
                  <Link
                    href="/portals/adults"
                    className="inline-flex items-center text-sm font-medium text-white hover:text-[#E02020] transition-colors"
                  >
                    Learn More
                    <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>

            {/* Leadership Ministry */}
            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="aspect-[4/5] relative">
                <img
                  src="/clergyImages/clergy1.png"
                  alt="Leadership Ministry"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/75 to-black/40"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-lg font-semibold mb-2">Leadership</h3>
                  <p className="text-sm text-gray-200 mb-4 leading-relaxed">
                    Equipping and supporting clergy, pastors, and church leaders with training,
                    resources, and fellowship for effective ministry and spiritual leadership.
                  </p>
                  <Link
                    href="/portals/clergy"
                    className="inline-flex items-center text-sm font-medium text-white hover:text-[#E02020] transition-colors"
                  >
                    Learn More
                    <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>

            {/* Youth Ministry */}
            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="aspect-[4/5] relative">
                <img
                  src="/youthImages/youth1.png"
                  alt="Youth Ministry"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/75 to-black/40"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-lg font-semibold mb-2">Youth Ministry</h3>
                  <p className="text-sm text-gray-200 mb-4 leading-relaxed">
                    Empowering young people to discover their purpose, build lasting friendships,
                    and grow in their faith through dynamic worship and relevant teaching.
                  </p>
                  <Link
                    href="/portals/youth"
                    className="inline-flex items-center text-sm font-medium text-white hover:text-[#E02020] transition-colors"
                  >
                    Learn More
                    <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>

            {/* Children Ministry */}
            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="aspect-[4/5] relative">
                <img
                  src="/childrenImages/child1.png"
                  alt="Children Ministry"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/75 to-black/40"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-lg font-semibold mb-2">Children Ministry</h3>
                  <p className="text-sm text-gray-200 mb-4 leading-relaxed">
                    Creating a safe, fun environment where children learn about God's love
                    through age-appropriate activities, stories, and interactive worship.
                  </p>
                  <Link
                    href="/portals/children"
                    className="inline-flex items-center text-sm font-medium text-white hover:text-[#E02020] transition-colors"
                  >
                    Learn More
                    <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ways to Participate Section */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-700 mb-6">
              How Will You Answer His Call?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              God has called each of us to be more than just spectators in His kingdom.
              He desires your heart, your worship, your service, and your life. The question isn't whether
              you're capable, it's whether you're willing. How will you respond to His invitation today?
            </p>
          </div>

          {/* Participation Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
            {/* Praise and Worship */}
            <div className="text-center group">
              <h3 className="text-lg font-semibold text-gray-700 mb-3">Praise & Worship</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Join our worship team or congregation in lifting up songs of praise and adoration to God
              </p>
            </div>

            {/* Giving */}
            <div className="text-center group">
              <h3 className="text-lg font-semibold text-gray-700 mb-3">Giving</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Support God's work through tithes, offerings, and generous contributions to ministry needs
              </p>
            </div>

            {/* Bible Reading */}
            <div className="text-center group">
              <h3 className="text-lg font-semibold text-gray-700 mb-3">Bible Reading</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Engage with God's Word through personal study, group discussions, and scripture meditation
              </p>
            </div>

            {/* Prayer */}
            <div className="text-center group">
              <h3 className="text-lg font-semibold text-gray-700 mb-3">Prayer</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Connect with God through personal prayer, group intercession, and spiritual communion
              </p>
            </div>

            {/* Fellowship */}
            <div className="text-center group">
              <h3 className="text-lg font-semibold text-gray-700 mb-3">Fellowship</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Build meaningful relationships with fellow believers through community gatherings and events
              </p>
            </div>

            {/* Service */}
            <div className="text-center group">
              <h3 className="text-lg font-semibold text-gray-700 mb-3">Service</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Serve others through volunteer opportunities, community outreach, and ministry involvement
              </p>
            </div>

            {/* Learning */}
            <div className="text-center group">
              <h3 className="text-lg font-semibold text-gray-700 mb-3">Learning</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Grow in knowledge through Bible studies, discipleship programs, and theological education
              </p>
            </div>

            {/* Evangelism */}
            <div className="text-center group">
              <h3 className="text-lg font-semibold text-gray-700 mb-3">Evangelism</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Share the Gospel message with others through personal testimony and community outreach
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="relative py-12 px-4 sm:px-6 lg:px-8">
        <div className="relative z-10 container-max text-center max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-700 tracking-tight leading-tight">
            Ready to Join Our Community?
          </h2>
          <p className="text-xl mb-10 text-gray-600 leading-relaxed font-light">
            Take the next step in your faith journey. Find a branch near you,
            connect with our ministries, or reach out to learn more about what
            it means to be part of the NTCG Kenya family.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
            <Link
              href="/portals"
              className="w-full sm:w-auto bg-[#E02020] hover:bg-[#B81C1C] text-white font-bold py-4 px-10 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-red-900/50 text-center"
            >
              Find a Branch
            </Link>
            <Link
              href="/contact"
              className="w-full sm:w-auto bg-white text-[#1E4E9A] hover:bg-gray-50 font-bold py-4 px-10 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg text-center"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}