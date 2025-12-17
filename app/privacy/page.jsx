import React from "react";
import { FaShieldAlt, FaLock, FaUserShield } from "react-icons/fa";

export const metadata = {
  title: "Privacy Policy - How We Protect Your Information",
  description: "Read New Testament Church of God Kenya's privacy policy. Learn how we collect, use, and protect your personal information when you visit our website or contact our church. Your privacy and data security are important to us.",
  keywords: [
    "NTCoG Kenya privacy policy",
    "church privacy policy",
    "data protection Kenya",
    "website privacy",
    "personal information protection",
    "church data security",
    "privacy rights Kenya",
    "information collection policy"
  ],
  robots: {
    index: true,
    follow: false,
  },
};

const PrivacyPolicy = () => {
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
            <FaShieldAlt className="text-4xl text-[#E02020]" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Privacy Policy
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
            Your privacy is important to us. Learn how we protect your
            information.
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
                  1. Introduction
                </h2>
                <p className="mb-4">
                  New Testament Church of God Kenya ("we," "us," or "our") is
                  committed to protecting your privacy. This Privacy Policy
                  explains how we collect, use, disclose, and safeguard your
                  information when you visit our website and use our services.
                </p>
                <p className="mb-4">
                  Please read this privacy policy carefully. If you do not agree
                  with the terms of this privacy policy, please do not access
                  the website.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  2. Information We Collect
                </h2>
                <p className="mb-4">
                  We may collect information about you in a variety of ways. The
                  information we may collect on the website includes:
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">
                  Personal Data
                </h3>
                <p className="mb-4">
                  Personally identifiable information, such as your name, email
                  address, phone number, and demographic information that you
                  voluntarily give to us when you:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
                  <li>Register for an account</li>
                  <li>Submit a contact form or prayer request</li>
                  <li>Subscribe to our newsletter</li>
                  <li>Make a donation</li>
                  <li>Register for events or programs</li>
                  <li>Participate in surveys or feedback forms</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">
                  Derivative Data
                </h3>
                <p className="mb-4">
                  Information our servers automatically collect when you access
                  the website, such as your IP address, browser type, operating
                  system, access times, and the pages you have viewed directly
                  before and after accessing the website.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">
                  Financial Data
                </h3>
                <p className="mb-4">
                  Financial information, such as data related to your payment
                  method (e.g., valid credit card number, card brand, expiration
                  date) that we may collect when you make donations. We store
                  only very limited, if any, financial information that we
                  collect. Otherwise, all financial information is stored by our
                  payment processor, and you are encouraged to review their
                  privacy policy and contact them directly for responses to your
                  questions.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  3. How We Use Your Information
                </h2>
                <p className="mb-4">
                  Having accurate information about you permits us to provide
                  you with a smooth, efficient, and customized experience.
                  Specifically, we may use information collected about you via
                  the website to:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Create and manage your account</li>
                  <li>Process your donations and transactions</li>
                  <li>Send you administrative information and updates</li>
                  <li>Respond to your inquiries and prayer requests</li>
                  <li>Send you newsletters and ministry updates</li>
                  <li>Register you for events and programs</li>
                  <li>Provide pastoral care and spiritual support</li>
                  <li>Improve our website and services</li>
                  <li>Monitor and analyze usage and trends</li>
                  <li>Prevent fraudulent transactions and protect against criminal activity</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  4. Disclosure of Your Information
                </h2>
                <p className="mb-4">
                  We may share information we have collected about you in
                  certain situations. Your information may be disclosed as
                  follows:
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">
                  By Law or to Protect Rights
                </h3>
                <p className="mb-4">
                  If we believe the release of information about you is
                  necessary to respond to legal process, to investigate or
                  remedy potential violations of our policies, or to protect the
                  rights, property, and safety of others, we may share your
                  information as permitted or required by any applicable law,
                  rule, or regulation.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">
                  Third-Party Service Providers
                </h3>
                <p className="mb-4">
                  We may share your information with third parties that perform
                  services for us or on our behalf, including payment
                  processing, data analysis, email delivery, hosting services,
                  customer service, and marketing assistance.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">
                  Ministry Partners
                </h3>
                <p className="mb-4">
                  We may share your information with our regional offices,
                  local churches, and ministry partners within the New Testament
                  Church of God Kenya network to better serve you and connect
                  you with your local church community.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">
                  With Your Consent
                </h3>
                <p className="mb-4">
                  We may disclose your personal information for any other
                  purpose with your consent.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  5. Security of Your Information
                </h2>
                <p className="mb-4">
                  We use administrative, technical, and physical security
                  measures to help protect your personal information. While we
                  have taken reasonable steps to secure the personal information
                  you provide to us, please be aware that despite our efforts,
                  no security measures are perfect or impenetrable, and no
                  method of data transmission can be guaranteed against any
                  interception or other type of misuse.
                </p>
                <p className="mb-4">
                  Any information disclosed online is vulnerable to interception
                  and misuse by unauthorized parties. Therefore, we cannot
                  guarantee complete security if you provide personal
                  information.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  6. Policy for Children
                </h2>
                <p className="mb-4">
                  We do not knowingly solicit information from or market to
                  children under the age of 13. If you become aware of any data
                  we have collected from children under age 13, please contact
                  us using the contact information provided below.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  7. Cookies and Tracking Technologies
                </h2>
                <p className="mb-4">
                  We may use cookies, web beacons, tracking pixels, and other
                  tracking technologies on the website to help customize the
                  website and improve your experience. When you access the
                  website, your personal information is not collected through
                  the use of tracking technology. Most browsers are set to
                  accept cookies by default. You can remove or reject cookies,
                  but be aware that such action could affect the availability
                  and functionality of the website.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  8. Third-Party Websites
                </h2>
                <p className="mb-4">
                  The website may contain links to third-party websites and
                  applications of interest, including advertisements and external
                  services, that are not affiliated with us. Once you have used
                  these links to leave the website, any information you provide
                  to these third parties is not covered by this Privacy Policy,
                  and we cannot guarantee the safety and privacy of your
                  information.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  9. Your Privacy Rights
                </h2>
                <p className="mb-4">
                  Depending on your location, you may have the following rights
                  regarding your personal information:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>
                    <span className="font-medium">Right to Access:</span> You
                    have the right to request copies of your personal data
                  </li>
                  <li>
                    <span className="font-medium">Right to Rectification:</span>{" "}
                    You have the right to request that we correct any
                    information you believe is inaccurate or incomplete
                  </li>
                  <li>
                    <span className="font-medium">Right to Erasure:</span> You
                    have the right to request that we erase your personal data,
                    under certain conditions
                  </li>
                  <li>
                    <span className="font-medium">
                      Right to Restrict Processing:
                    </span>{" "}
                    You have the right to request that we restrict the
                    processing of your personal data, under certain conditions
                  </li>
                  <li>
                    <span className="font-medium">
                      Right to Object to Processing:
                    </span>{" "}
                    You have the right to object to our processing of your
                    personal data, under certain conditions
                  </li>
                  <li>
                    <span className="font-medium">
                      Right to Data Portability:
                    </span>{" "}
                    You have the right to request that we transfer the data that
                    we have collected to another organization, or directly to
                    you, under certain conditions
                  </li>
                </ul>
                <p className="mt-4">
                  To exercise these rights, please contact us using the
                  information provided below.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  10. Email Communications
                </h2>
                <p className="mb-4">
                  If you no longer wish to receive correspondence, emails, or
                  other communications from us, you may opt-out by:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>
                    Clicking the "unsubscribe" link in the email communications
                  </li>
                  <li>Contacting us using the contact information provided below</li>
                </ul>
                <p className="mt-4">
                  Please note that you may still receive administrative emails
                  regarding your account or transactions even if you opt-out of
                  marketing communications.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  11. Data Retention
                </h2>
                <p className="mb-4">
                  We will retain your personal information only for as long as
                  is necessary for the purposes set out in this Privacy Policy.
                  We will retain and use your information to the extent
                  necessary to comply with our legal obligations, resolve
                  disputes, and enforce our policies.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  12. Changes to This Privacy Policy
                </h2>
                <p className="mb-4">
                  We may update this Privacy Policy from time to time in order
                  to reflect changes to our practices or for other operational,
                  legal, or regulatory reasons. We will notify you of any
                  changes by posting the new Privacy Policy on this page and
                  updating the "Last Updated" date.
                </p>
                <p className="mb-4">
                  You are advised to review this Privacy Policy periodically for
                  any changes. Changes to this Privacy Policy are effective when
                  they are posted on this page.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  13. Contact Us
                </h2>
                <p className="mb-4">
                  If you have questions or comments about this Privacy Policy,
                  please contact us at:
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
                  By using our website, you hereby consent to our Privacy Policy
                  and agree to its terms.
                </p>
              </section>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="text-center">
              <div className="flex justify-center gap-8 mb-8">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-3">
                    <FaLock className="text-3xl text-[#1E4E9A]" />
                  </div>
                  <p className="text-sm font-semibold text-gray-700">
                    Encrypted
                  </p>
                </div>
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-3">
                    <FaShieldAlt className="text-3xl text-[#E02020]" />
                  </div>
                  <p className="text-sm font-semibold text-gray-700">
                    Protected
                  </p>
                </div>
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-3">
                    <FaUserShield className="text-3xl text-[#1E4E9A]" />
                  </div>
                  <p className="text-sm font-semibold text-gray-700">
                    Confidential
                  </p>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Your Privacy Matters to Us
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                We are committed to protecting your personal information and
                respecting your privacy. If you have any questions or concerns,
                please don't hesitate to reach out.
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

export default PrivacyPolicy;
