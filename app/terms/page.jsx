import React from "react";
import { FaFileContract, FaShieldAlt, FaBalanceScale } from "react-icons/fa";

export const metadata = {
  title: "Terms of Service - Website Usage Guidelines",
  description: "Read the terms of service for New Testament Church of God Kenya's website. Understand your rights and responsibilities when using our website, accessing our content, and engaging with our online services.",
  keywords: [
    "NTCoG Kenya terms of service",
    "church website terms",
    "website usage policy",
    "terms and conditions Kenya",
    "church website guidelines",
    "user agreement",
    "website legal terms"
  ],
  robots: {
    index: true,
    follow: false,
  },
};

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-gray-50">
      {/* Hero Section */}
      <section className="relative bg-[#1E4E9A] text-white py-16 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: "url('/heroImages/hero5.png')",
          }}
        ></div>

        <div className="relative z-10 max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white bg-opacity-30 rounded-full mb-6 backdrop-blur-sm shadow-lg">
            <FaFileContract className="text-4xl text-[#E02020]" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Terms of Service
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
            Please read these terms carefully before using our website
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white shadow-xl rounded-2xl p-8 md:p-12">
            <p className="text-sm text-gray-600 mb-8 pb-6 border-b border-gray-200">
              Last Updated: November 12, 2025
            </p>

            <div className="space-y-8 text-gray-700">
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  1. Acceptance of Terms
                </h2>
                <p className="mb-4">
                  Welcome to the New Testament Church of God Kenya website. By
                  accessing and using this website, you accept and agree to be
                  bound by the terms and provisions of this agreement. If you do
                  not agree to these terms, please do not use this website.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  2. Use of Website
                </h2>
                <p className="mb-4">
                  This website is provided for informational and ministry
                  purposes. You agree to use this website only for lawful
                  purposes and in a way that does not infringe the rights of,
                  restrict, or inhibit anyone else's use and enjoyment of the
                  website.
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>You must be at least 13 years old to use this website</li>
                  <li>
                    You agree not to use the website for any unlawful purpose
                  </li>
                  <li>
                    You agree not to attempt to gain unauthorized access to any
                    part of the website
                  </li>
                  <li>
                    You agree not to transmit any harmful code or malicious
                    software
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  3. User Accounts
                </h2>
                <p className="mb-4">
                  Some features of our website may require you to create an
                  account. You are responsible for:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>
                    Maintaining the confidentiality of your account credentials
                  </li>
                  <li>All activities that occur under your account</li>
                  <li>
                    Notifying us immediately of any unauthorized use of your
                    account
                  </li>
                  <li>
                    Providing accurate and complete information during
                    registration
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  4. Intellectual Property
                </h2>
                <p className="mb-4">
                  All content on this website, including but not limited to
                  text, graphics, logos, images, audio clips, and software, is
                  the property of New Testament Church of God Kenya or its
                  content suppliers and is protected by international copyright
                  laws.
                </p>
                <p className="mb-4">
                  You may not reproduce, distribute, modify, or create
                  derivative works from any content on this website without our
                  express written permission.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  5. Donations and Payments
                </h2>
                <p className="mb-4">
                  All donations made through this website are voluntary and
                  non-refundable unless required by law. We reserve the right to
                  refuse or return any donation at our discretion.
                </p>
                <p className="mb-4">
                  Payment information is processed securely through third-party
                  payment processors. We do not store your complete payment card
                  information on our servers.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  6. User-Generated Content
                </h2>
                <p className="mb-4">
                  If you submit, post, or share any content on our website
                  (including comments, testimonials, or prayer requests), you
                  grant us a non-exclusive, royalty-free, perpetual license to
                  use, reproduce, modify, and display such content for ministry
                  purposes.
                </p>
                <p className="mb-4">
                  You represent that any content you submit does not violate any
                  third-party rights and complies with all applicable laws.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  7. Third-Party Links
                </h2>
                <p className="mb-4">
                  Our website may contain links to third-party websites. These
                  links are provided for your convenience only. We do not
                  endorse or assume responsibility for the content, privacy
                  policies, or practices of any third-party websites.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  8. Disclaimer of Warranties
                </h2>
                <p className="mb-4">
                  This website is provided "as is" and "as available" without
                  any warranties of any kind, either express or implied. We do
                  not warrant that:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>The website will be uninterrupted or error-free</li>
                  <li>Defects will be corrected</li>
                  <li>
                    The website is free of viruses or other harmful components
                  </li>
                  <li>
                    The information provided is accurate, complete, or current
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  9. Limitation of Liability
                </h2>
                <p className="mb-4">
                  To the fullest extent permitted by law, New Testament Church
                  of God Kenya shall not be liable for any indirect, incidental,
                  special, consequential, or punitive damages arising out of or
                  related to your use of this website.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  10. Privacy
                </h2>
                <p className="mb-4">
                  Your use of this website is also governed by our Privacy
                  Policy. Please review our Privacy Policy to understand our
                  practices regarding the collection and use of your personal
                  information.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  11. Modifications to Terms
                </h2>
                <p className="mb-4">
                  We reserve the right to modify these Terms of Service at any
                  time. Changes will be effective immediately upon posting to
                  this website. Your continued use of the website after any
                  changes constitutes acceptance of the new terms.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  12. Termination
                </h2>
                <p className="mb-4">
                  We reserve the right to terminate or suspend your access to
                  the website at any time, without notice, for conduct that we
                  believe violates these Terms of Service or is harmful to other
                  users, us, or third parties, or for any other reason.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  13. Governing Law
                </h2>
                <p className="mb-4">
                  These Terms of Service shall be governed by and construed in
                  accordance with the laws of Kenya, without regard to its
                  conflict of law provisions.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  14. Contact Information
                </h2>
                <p className="mb-4">
                  If you have any questions about these Terms of Service, please
                  contact us:
                </p>
                <div className="bg-gray-50 p-6 rounded-lg space-y-3">
                  <p className="font-semibold text-lg text-gray-900">
                    New Testament Church of God Kenya
                  </p>
                  <p className="text-gray-700">
                    <span className="font-medium">National Headquarters:</span>
                  </p>
                  <p className="text-gray-600">
                    Kwarara Rd/Ndege Rd, Off Bugani Rd
                    <br />
                    Karen, Langata, Nairobi
                  </p>
                  <p className="text-gray-600">
                    P.O. Box 75, 00502 Karen, Nairobi, Kenya
                  </p>
                  <p className="text-gray-700">
                    <span className="font-medium">Phone:</span> +254 759 120 222
                  </p>
                  <p className="text-gray-700">
                    <span className="font-medium">
                      National Administrative Bishop:
                    </span>{" "}
                    Dr. David Gilbert Bwire
                  </p>
                </div>
              </section>

              <section className="border-t pt-6 mt-8">
                <p className="text-sm text-gray-600">
                  By using this website, you acknowledge that you have read,
                  understood, and agree to be bound by these Terms of Service.
                </p>
              </section>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="text-center">
              <div className="flex justify-center gap-8 mb-8">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-3">
                    <FaShieldAlt className="text-3xl text-[#1E4E9A]" />
                  </div>
                  <p className="text-sm font-semibold text-gray-700">Secure</p>
                </div>
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-3">
                    <FaBalanceScale className="text-3xl text-[#E02020]" />
                  </div>
                  <p className="text-sm font-semibold text-gray-700">Fair</p>
                </div>
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-3">
                    <FaFileContract className="text-3xl text-[#1E4E9A]" />
                  </div>
                  <p className="text-sm font-semibold text-gray-700">
                    Transparent
                  </p>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Questions About Our Terms?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                If you have any questions or concerns about these Terms of
                Service, we're here to help.
              </p>
              <a
                href="/contact"
                className="inline-block bg-[#E02020] hover:bg-[#B81C1C] text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsOfService;
