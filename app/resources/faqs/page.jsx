"use client";

import { useState } from "react";
import { FaQuestionCircle, FaChevronDown, FaChevronUp } from "react-icons/fa";

export default function FAQsPage() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqCategories = [
    {
      category: "About NTCG Kenya",
      questions: [
        {
          question: "What is the New Testament Church of God Kenya?",
          answer:
            "The New Testament Church of God Kenya is a vibrant Christian denomination committed to spreading the Gospel of Jesus Christ. We are part of the global Church of God movement, with a rich heritage of Pentecostal worship and biblical teaching. Our mission is to make disciples, build strong communities, and serve others in love.",
        },
        {
          question: "What do you believe?",
          answer:
            "We believe in the Holy Trinity - God the Father, Son, and Holy Spirit. We believe in salvation through faith in Jesus Christ, the authority of Scripture, water baptism, the baptism of the Holy Spirit, divine healing, and the second coming of Christ. Our beliefs are rooted in biblical truth and Pentecostal tradition.",
        },
        {
          question: "Where are your churches located?",
          answer:
            "We have churches throughout Kenya, with our National Headquarters located in Karen, Nairobi. We have regional offices and local assemblies across the country. Visit our Portals page to find a branch near you.",
        },
      ],
    },
    {
      category: "Visiting & Membership",
      questions: [
        {
          question: "What should I expect when visiting?",
          answer:
            "You can expect a warm welcome, vibrant worship, and biblical teaching. Our services typically include praise and worship, prayer, offering, and a message from God's Word. Dress comfortably - we welcome people as they are. Service times vary by location, so check with your local branch.",
        },
        {
          question: "How do I become a member?",
          answer:
            "Membership begins with accepting Jesus Christ as your Lord and Savior. After attending regularly and completing our membership classes, you can be baptized and officially join the church. Contact your local pastor or our headquarters for more information about the membership process.",
        },
        {
          question: "Do I need to be a member to attend services?",
          answer:
            "No, everyone is welcome to attend our services regardless of membership status. We encourage visitors to come and experience our community. Membership is for those who want to make a deeper commitment to the church family.",
        },
      ],
    },
    {
      category: "Services & Programs",
      questions: [
        {
          question: "What are your service times?",
          answer:
            "Service times vary by location. Most branches have Sunday morning services, midweek Bible studies, and prayer meetings. Contact your local branch or check our Portals page for specific service times at your nearest location.",
        },
        {
          question: "Do you have programs for children and youth?",
          answer:
            "Yes! We have vibrant children's and youth ministries. Our children's programs include Sunday School, vacation Bible school, and age-appropriate activities. Our youth ministry offers fellowship, discipleship, leadership training, and community service opportunities.",
        },
        {
          question: "What other ministries do you offer?",
          answer:
            "We offer various ministries including Women's Ministry, Men's Fellowship, Music Ministry, Evangelism, Community Outreach, Marriage Ministry, and more. Each local branch may have additional specialized ministries based on community needs.",
        },
      ],
    },
    {
      category: "Giving & Support",
      questions: [
        {
          question: "How can I give to the church?",
          answer:
            "You can give through various methods including online giving on our website, mobile money (M-Pesa), bank transfers, or in-person during services. All giving is voluntary and goes toward supporting ministry work, community programs, and church operations.",
        },
        {
          question: "Are donations tax-deductible?",
          answer:
            "Yes, as a registered religious organization in Kenya, donations to NTCG Kenya may be tax-deductible. Please consult with a tax professional for specific guidance on your situation. We can provide receipts for your donations upon request.",
        },
        {
          question: "How are donations used?",
          answer:
            "Donations support pastoral care, facility maintenance, community outreach programs, youth and children's ministries, missions work, and administrative costs. We are committed to financial transparency and stewardship of all resources entrusted to us.",
        },
      ],
    },
    {
      category: "Baptism & Spiritual Growth",
      questions: [
        {
          question: "What is water baptism and who can be baptized?",
          answer:
            "Water baptism is an outward expression of an inward faith in Jesus Christ. We practice baptism by immersion for believers who have accepted Christ as their Savior. Baptism classes are offered regularly to prepare candidates. Contact your local pastor to learn more.",
        },
        {
          question: "Do you offer Bible study classes?",
          answer:
            "Yes, we offer various Bible study opportunities including midweek services, small group studies, discipleship classes, and leadership training. These are designed to help believers grow in their faith and understanding of God's Word.",
        },
        {
          question: "How can I grow spiritually?",
          answer:
            "Spiritual growth comes through regular worship attendance, personal Bible study and prayer, fellowship with other believers, serving in ministry, and applying biblical principles to daily life. We offer mentorship, discipleship programs, and resources to support your spiritual journey.",
        },
      ],
    },
    {
      category: "Getting Involved",
      questions: [
        {
          question: "How can I volunteer or serve?",
          answer:
            "There are many ways to serve including worship team, children's ministry, ushering, hospitality, technical support, community outreach, and more. Speak with your local pastor or ministry leader about opportunities that match your gifts and interests.",
        },
        {
          question: "Do you have small groups or fellowship groups?",
          answer:
            "Yes, we encourage participation in small groups for deeper fellowship, prayer, and Bible study. These groups meet in homes or at the church and provide opportunities for meaningful relationships and spiritual growth.",
        },
        {
          question: "Can I request prayer?",
          answer:
            "Absolutely! We believe in the power of prayer. You can submit prayer requests through our website, contact your local church, or speak with a pastor or church leader. We also have regular prayer meetings where we intercede for various needs.",
        },
      ],
    },
    {
      category: "Events & Activities",
      questions: [
        {
          question: "What special events do you host?",
          answer:
            "We host various events throughout the year including conferences, revivals, youth camps, women's and men's retreats, community outreach programs, holiday celebrations, and special worship services. Check our Events Calendar for upcoming activities.",
        },
        {
          question: "Do you have marriage and family programs?",
          answer:
            "Yes, we offer marriage enrichment programs, pre-marital counseling, family life seminars, and support for couples and families. We believe in strengthening families as the foundation of society and the church.",
        },
      ],
    },
    {
      category: "Contact & Support",
      questions: [
        {
          question: "How can I contact the church?",
          answer:
            "You can reach our National Headquarters at +254 759 120 222, visit us at Kwarara Rd/Ndege Rd, Off Bugani Rd, Karen, Nairobi, or use the contact form on our website. For local branch contacts, visit our Portals page.",
        },
        {
          question: "Do you offer counseling services?",
          answer:
            "Yes, pastoral counseling is available for members and visitors. Our pastors provide spiritual guidance, marriage counseling, and support during difficult times. Contact your local church to schedule an appointment.",
        },
        {
          question: "How can I stay updated with church news?",
          answer:
            "Stay connected by subscribing to our newsletter, following us on social media, checking our website regularly, and downloading our church app if available. Your local branch may also have specific communication channels.",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-red-50">
      {/* Hero Section */}
      <section className="relative bg-[#1E4E9A] text-white py-12 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: "url('/heroImages/hero5.png')",
          }}
        ></div>

        <div className="relative z-10 max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white bg-opacity-30 rounded-full mb-6 backdrop-blur-sm shadow-lg">
            <FaQuestionCircle className="text-4xl text-[#E02020]" />
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto">
            Find answers to common questions about NTCG Kenya
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {faqCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                {category.category}
              </h2>
              <div className="space-y-4">
                {category.questions.map((faq, faqIndex) => {
                  const globalIndex = `${categoryIndex}-${faqIndex}`;
                  const isOpen = openIndex === globalIndex;

                  return (
                    <div
                      key={faqIndex}
                      className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg"
                    >
                      <button
                        onClick={() => toggleFAQ(globalIndex)}
                        className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                      >
                        <span className="text-lg font-semibold text-gray-900 pr-4">
                          {faq.question}
                        </span>
                        {isOpen ? (
                          <FaChevronUp className="text-[#E02020] flex-shrink-0 text-xl" />
                        ) : (
                          <FaChevronDown className="text-[#1E4E9A] flex-shrink-0 text-xl" />
                        )}
                      </button>
                      {isOpen && (
                        <div className="px-6 pb-5 text-gray-700 leading-relaxed">
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Still Have Questions?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                We're here to help! Reach out to us and we'll be happy to
                answer any questions you may have.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="/contact"
                  className="w-full sm:w-auto bg-[#E02020] hover:bg-[#B81C1C] text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 text-center"
                >
                  Contact Us
                </a>
                <a
                  href="/portals"
                  className="w-full sm:w-auto border-2 border-[#1E4E9A] text-[#1E4E9A] hover:bg-[#1E4E9A] hover:text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 text-center"
                >
                  Find a Branch
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
