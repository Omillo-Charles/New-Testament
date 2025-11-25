import HeroSection from '../components/hero';
import StatCounter from '../components/stats-counter';
import Link from 'next/link';

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
              { end: 223, label: "Churches", color: "text-[#E02020]", suffix: "+" },
              { end: 15000, label: "Members", color: "text-[#1E4E9A]", suffix: "+" },
              { end: 6, label: "Regional Offices", color: "text-[#E02020]", suffix: "" },
              { end: 28, label: "Districts", color: "text-[#1E4E9A]", suffix: "" },
            ].map((stat, index) => (
              <div
                key={index}
                className="group relative p-6 bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
              >
                <div className="text-center">
                  <StatCounter
                    end={stat.end}
                    suffix={stat.suffix}
                    className={`text-5xl md:text-6xl font-extrabold ${stat.color} mb-2 tracking-tight group-hover:scale-110 transition-transform duration-300 inline-block`}
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
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1E4E9A] to-[#0a1e3f] z-0"></div>

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
              className="w-full sm:w-auto bg-[#E02020] hover:bg-[#B81C1C] text-white font-bold py-4 px-10 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-red-900/50 text-center"
            >
              Find a Branch
            </Link>
            <Link
              href="/contact"
              className="w-full sm:w-auto bg-white/10 backdrop-blur-md border border-white/30 text-white hover:bg-white hover:text-[#1E4E9A] font-bold py-4 px-10 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg text-center"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}