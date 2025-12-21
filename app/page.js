import HeroSection from '../components/hero';
import Link from 'next/link';

export const metadata = {
  title: "Home - Building Faith, Community, and Hope Across Kenya",
  description: "Welcome to New Testament Church of God Kenya (NTCoG). Join our vibrant Pentecostal community of 15,000+ members across 224+ churches. Find a branch near you and experience Spirit-filled worship, biblical teaching, and genuine fellowship.",
  keywords: [
    "NTCoG Kenya home",
    "Pentecostal church Kenya",
    "Church services Kenya",
    "Christian community Kenya",
    "Find church Kenya",
    "Spirit-filled worship",
    "Biblical teaching Kenya",
    "Church branches Kenya",
    "Christian fellowship Kenya",
    "Nairobi church services"
  ],
  openGraph: {
    title: "New Testament Church of God Kenya - Building Faith, Community, and Hope",
    description: "Join our vibrant Pentecostal community of 15,000+ members across 224+ churches in Kenya. Experience Spirit-filled worship and biblical teaching.",
    images: [
      {
        url: '/og-home.jpg',
        width: 1200,
        height: 630,
        alt: 'New Testament Church of God Kenya - Welcome Home',
      },
    ],
  },
  twitter: {
    title: "New Testament Church of God Kenya - Building Faith, Community, and Hope",
    description: "Join our vibrant Pentecostal community of 15,000+ members across 224+ churches in Kenya.",
    images: ['/og-home.jpg'],
  },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
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
                  <h3 className="text-lg font-semibold mb-2">Adults Ministry</h3>
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
                  <h3 className="text-lg font-semibold mb-2">Children</h3>
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