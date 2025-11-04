import HeroSection from '../components/hero';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />

      {/* Call to Action Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container-max text-center">
          <h2 className="text-4xl font-bold mb-6 text-gray-900">
            Ready to Join Our Community?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-gray-600">
            Take the next step in your faith journey. Find a branch near you,
            connect with our ministries, or reach out to learn more about what
            it means to be part of the NTCG Kenya family.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md sm:max-w-none mx-auto">
            <Link
              href="/portals"
              className="w-full sm:w-auto bg-[#E02020] hover:bg-[#B81C1C] text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 text-center"
            >
              Find a Branch
            </Link>
            <Link
              href="/contact"
              className="w-full sm:w-auto border-2 border-[#1E4E9A] text-[#1E4E9A] hover:bg-[#1E4E9A] hover:text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 text-center"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}