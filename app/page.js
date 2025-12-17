import HeroSection from '../components/hero';
import StatCounter from '../components/stats-counter';
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

      {/* Stats Counter Section */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gray-50 overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-50"></div>
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-red-100 rounded-full blur-3xl opacity-50"></div>
        </div>

        <div className="relative container-max max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-12">
            {[
              { end: 224, label: "Churches", color: "text-[#E02020]", suffix: "+" },
              { end: 15000, label: "Members", color: "text-[#1E4E9A]", suffix: "+" },
              { end: 6, label: "Regional Offices", color: "text-[#E02020]", suffix: "" },
              { end: 28, label: "Districts", color: "text-[#1E4E9A]", suffix: "" },
            ].map((stat, index) => (
              <div
                key={index}
                className="relative p-6 bg-white rounded-2xl shadow-sm border border-gray-100"
              >
                <div className="text-center">
                  <StatCounter
                    end={stat.end}
                    suffix={stat.suffix}
                    className={`text-5xl md:text-6xl font-extrabold ${stat.color} mb-2 tracking-tight`}
                  />
                  <div className="text-gray-600 text-sm md:text-base font-semibold uppercase tracking-wider">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Solid Blue Background */}
        <div className="absolute inset-0 bg-[#1E4E9A] z-0"></div>

        <div className="relative z-10 container-max text-center max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white tracking-tight leading-tight">
            Ready to Join Our Community?
          </h2>
          <p className="text-xl mb-10 text-blue-100 leading-relaxed font-light">
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