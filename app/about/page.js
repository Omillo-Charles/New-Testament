import React from "react";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "About Us - New Testament Church of God Kenya",
  description:
    "Learn about NTCG Kenya's history, mission, vision, and leadership. Established in 1977, we are a vibrant Pentecostal church serving communities across Kenya.",
};

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/aboutImages/about1.png"
            alt="NTCG Kenya Church Community"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-[#1E4E9A]/85"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            About NTCG Kenya
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
            A vibrant Pentecostal church serving Kenya since 1977, building
            faith, community, and hope across the nation.
          </p>
        </div>
      </section>

      {/* Our Identity */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-[1600px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-4">
              Our Identity
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#E02020] to-[#1E4E9A] rounded-full mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="bg-gray-50 rounded-xl p-8 shadow-lg">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#E02020] rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Established 1977
                    </h3>
                    <p className="text-gray-600">
                      Founded in Karatina, Nyeri District
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-8 shadow-lg">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#1E4E9A] rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Global Connection
                    </h3>
                    <p className="text-gray-600">
                      Part of Church of God World Missions, USA
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-xl p-8 border border-gray-100">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                The New Testament Church of God Kenya (NTCOG-K) is a vibrant
                Pentecostal church that stands as an integral part of the Church
                of God World Missions, headquartered in Cleveland, Tennessee,
                USA.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Established in Kenya in 1977, we have grown to become a beacon
                of <span className="font-semibold text-[#E02020]">faith</span>,{" "}
                <span className="font-semibold text-[#1E4E9A]">
                  community care
                </span>
                ,{" "}
                <span className="font-semibold text-[#E02020]">evangelism</span>
                , and{" "}
                <span className="font-semibold text-[#1E4E9A]">integrity</span>{" "}
                across the nation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-[1600px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="w-16 h-16 bg-[#E02020] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-center text-gray-900 mb-4">
                Our Vision
              </h3>
              <p className="text-lg text-center text-[#E02020] font-semibold mb-4">
                "Build a financially sound and spiritually mature church."
              </p>
              <p className="text-gray-700 text-center">
                The New Testament Church of God Kenya envisions becoming the
                leading soul-winning Pentecostal church, extending its presence
                and influence throughout Kenya and East Africa as a lighthouse
                for the community and a training ground for true disciples of
                Jesus Christ.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="w-16 h-16 bg-[#1E4E9A] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-center text-gray-900 mb-4">
                Our Mission
              </h3>
              <p className="text-lg text-center text-[#1E4E9A] font-semibold mb-4">
                "Mobilize and motivate leadership into working towards achieving
                financial self-reliance by involving the youth in viable
                projects, inculcating discipleship formation through Christian
                Education and training programs."
              </p>
              <div className="space-y-2 text-gray-700">
                <div className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-[#1E4E9A] rounded-full mt-2 flex-shrink-0"></div>
                  <p>Reaching the unreached, both the poor and the rich</p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-[#1E4E9A] rounded-full mt-2 flex-shrink-0"></div>
                  <p>
                    Planting churches and evangelizing throughout East Africa
                  </p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-[#1E4E9A] rounded-full mt-2 flex-shrink-0"></div>
                  <p>Equipping and training the next generation of ministers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our History */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1600px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our History
            </h2>
          </div>

          <div className="space-y-12">
            {/* Global Origins */}
            <div className="bg-gray-50 rounded-xl p-8">
              <h3 className="text-2xl font-semibold text-[#E02020] mb-4">
                Global Origins
              </h3>
              <p className="text-gray-700 text-lg">
                The Church of God movement began in 1886 with only 8 men in the
                United States, and has since grown into a worldwide denomination
                spreading the gospel across every continent.
              </p>
            </div>

            {/* Establishment in Kenya */}
            <div className="bg-gray-50 rounded-xl p-8">
              <h3 className="text-2xl font-semibold text-[#1E4E9A] mb-4">
                Establishment in Kenya
              </h3>
              <p className="text-gray-700 text-lg mb-4">
                The first Church of God in the Eastern Africa region was
                established in Kenya on <strong>May 13, 1977</strong>, in
                Karatina, Nyeri District, under the pioneering leadership of
                Francis Gachara. The first missionary National Overseer was
                called Claudea, who laid the foundation for what would become a
                transformative ministry across Kenya and East Africa.
              </p>
            </div>

            {/* Growth and Development */}
            <div className="bg-gray-50 rounded-xl p-8">
              <h3 className="text-2xl font-semibold text-[#E02020] mb-4">
                Growth and Development
              </h3>
              <p className="text-gray-700 text-lg mb-6">
                From humble beginnings in 1977, the church has experienced
                remarkable growth over more than four decades. What started as a
                single congregation has expanded into a nationwide movement with
                a strong presence across Kenya.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#E02020] mb-2">
                    15,000+
                  </div>
                  <div className="text-gray-600">Members</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#1E4E9A] mb-2">
                    224
                  </div>
                  <div className="text-gray-600">Local Churches</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#E02020] mb-2">
                    6
                  </div>
                  <div className="text-gray-600">Regional Offices</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#1E4E9A] mb-2">
                    28+
                  </div>
                  <div className="text-gray-600">Districts</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-[1600px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Leadership
            </h2>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                Dr. David Gilbert Bwire
              </h3>
              <p className="text-lg text-[#E02020] font-medium">
                National Administrative Bishop
              </p>
              <p className="text-gray-600">
                Fifth National Overseer since 1977 | Leadership since 2014
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4">
                  Academic Qualifications
                </h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-[#E02020] rounded-full mt-2 flex-shrink-0"></div>
                    <span>
                      Honorary Doctor in Divinity - University of Cambridge
                      Theological Seminary, USA
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-[#E02020] rounded-full mt-2 flex-shrink-0"></div>
                    <span>
                      MBA (Strategic Management) - Kenya Methodist University
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-[#E02020] rounded-full mt-2 flex-shrink-0"></div>
                    <span>
                      BSc (Christian Ministries) - Lea University, USA
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-[#E02020] rounded-full mt-2 flex-shrink-0"></div>
                    <span>
                      Currently pursuing PhD in Leadership and Governance -
                      JKUAT
                    </span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4">
                  Professional Experience
                </h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-[#1E4E9A] rounded-full mt-2 flex-shrink-0"></div>
                    <span>Over 30 years of pastoral service</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-[#1E4E9A] rounded-full mt-2 flex-shrink-0"></div>
                    <span>Certified Public Accountant (CPA)</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-[#1E4E9A] rounded-full mt-2 flex-shrink-0"></div>
                    <span>CEO of Damajo Consultancy Firm</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-[#1E4E9A] rounded-full mt-2 flex-shrink-0"></div>
                    <span>
                      Ordained Bishop with Church of God World Missions, USA
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Regional Structure */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow p-6">
              <h4 className="font-semibold text-gray-900 mb-2">
                North Central Region
              </h4>
              <p className="text-sm text-gray-600">
                Regional Bishop & National Secretary
              </p>
              <p className="text-[#E02020] font-medium">Samuel Wainaina</p>
            </div>
            <div className="bg-white rounded-lg shadow p-6">
              <h4 className="font-semibold text-gray-900 mb-2">
                Nairobi Region
              </h4>
              <p className="text-sm text-gray-600">
                Regional Bishop & National Treasurer
              </p>
              <p className="text-[#E02020] font-medium">Dickson Tito Mwalili</p>
            </div>
            <div className="bg-white rounded-lg shadow p-6">
              <h4 className="font-semibold text-gray-900 mb-2">Coast Region</h4>
              <p className="text-sm text-gray-600">
                Regional Bishop & National Education Coordinator
              </p>
              <p className="text-[#E02020] font-medium">
                Benea Alukwe Amakhungu
              </p>
            </div>
            <div className="bg-white rounded-lg shadow p-6">
              <h4 className="font-semibold text-gray-900 mb-2">
                Western Region
              </h4>
              <p className="text-sm text-gray-600">
                Regional Bishop & National Prayer Coordinator
              </p>
              <p className="text-[#E02020] font-medium">Simon Ngure Ben</p>
            </div>
            <div className="bg-white rounded-lg shadow p-6">
              <h4 className="font-semibold text-gray-900 mb-2">
                North Western Region
              </h4>
              <p className="text-sm text-gray-600">Regional Bishop</p>
              <p className="text-[#E02020] font-medium">Protus Pamba Orima</p>
            </div>
            <div className="bg-white rounded-lg shadow p-6">
              <h4 className="font-semibold text-gray-900 mb-2">
                Nyanza Region
              </h4>
              <p className="text-sm text-gray-600">
                Regional Bishop & National Convention Coordinator
              </p>
              <p className="text-[#E02020] font-medium">Paul Obadha Ohuare</p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Focus Areas */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1600px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Core Focus Areas
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-[#E02020] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-10 h-10 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Community Care
              </h3>
              <ul className="text-gray-700 space-y-2">
                <li>Supporting orphans and vulnerable children</li>
                <li>Caring for those affected by HIV/AIDS</li>
                <li>Providing assistance to widows</li>
                <li>Practical help and outreach programs</li>
              </ul>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-[#1E4E9A] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-10 h-10 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Evangelism
              </h3>
              <ul className="text-gray-700 space-y-2">
                <li>Vigorous evangelism programs</li>
                <li>Church planting in remote areas</li>
                <li>Street meetings and community invasions</li>
                <li>Following the Great Commission</li>
              </ul>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-[#E02020] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-10 h-10 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Integrity
              </h3>
              <ul className="text-gray-700 space-y-2">
                <li>Moral purity and personal integrity</li>
                <li>Financial accountability and transparency</li>
                <li>Ethical leadership and governance</li>
                <li>Biblical stewardship</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Join Our Growing Family
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            "Looking back where we have come from, we cannot be silent to thank
            God for this far as we celebrate over 40 years since we were
            established in Kenya. The church is built on a very sound
            declaration of faith, the best doctrinal and practical commitment."
          </p>
          <p className="text-2xl font-bold text-[#E02020] mb-8">
            To God be the Glory!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md sm:max-w-none mx-auto">
            <Link
              href="/portals"
              className="w-full sm:w-auto bg-[#E02020] hover:bg-[#B81C1C] text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 text-center"
            >
              Find a Branch Near You
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
