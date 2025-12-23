"use client";
import React from "react";
import { FaBook, FaBible, FaCross } from "react-icons/fa";

const BeliefsPage = () => {
  const articles = [
    {
      number: 1,
      title: "The Bible",
      content:
        "The Holy Scriptures are the inspired, infallible Word of God — our final authority for faith, doctrine, and conduct.",
      scriptures: "2 Timothy 3:16–17, 2 Peter 1:20–21, Psalm 119:105",
    },
    {
      number: 2,
      title: "One God (Trinity)",
      content:
        "There is one God eternally existing in three persons: the Father, the Son, and the Holy Spirit — coequal and coeternal.",
      scriptures: "Deuteronomy 6:4, Matthew 28:19, 2 Corinthians 13:14",
    },
    {
      number: 3,
      title: "Jesus Christ",
      content:
        "Jesus Christ is both fully God and fully man. He was born of a virgin, lived a sinless life, died for our sins, rose again, and will return visibly and gloriously.",
      scriptures: "John 1:1–14, Luke 1:26–35, 1 Corinthians 15:3–4, Acts 1:11",
    },
    {
      number: 4,
      title: "The Holy Spirit",
      content:
        "The Holy Spirit is the active presence of God who convicts the world of sin, regenerates the believer, empowers for service, and sanctifies for holy living.",
      scriptures: "John 14:16–17, Acts 1:8, Galatians 5:22–23, Romans 8:11",
    },
    {
      number: 5,
      title: "Human Condition & Sin",
      content:
        "Humanity was created good but fell into sin through disobedience. All people are born with a sinful nature and are in need of salvation.",
      scriptures: "Romans 3:23, Genesis 3:1–7, Romans 5:12",
    },
    {
      number: 6,
      title: "Salvation",
      content:
        "Salvation is by grace through faith in Jesus Christ. It includes repentance, justification, and regeneration through the new birth.",
      scriptures: "Ephesians 2:8–9, Romans 10:9–10, John 3:3",
    },
    {
      number: 7,
      title: "Baptism & Ordinances",
      content:
        "Water baptism by immersion and the Lord's Supper are ordinances commanded by Christ for all believers.",
      scriptures: "Matthew 28:19, Romans 6:3–4, 1 Corinthians 11:23–26",
    },
    {
      number: 8,
      title: "New Birth & Regeneration",
      content:
        "The new birth is a spiritual transformation that brings the believer into God's family and kingdom through the power of the Holy Spirit.",
      scriptures: "John 3:5–7, Titus 3:5, 2 Corinthians 5:17",
    },
    {
      number: 9,
      title: "Sanctification / Holy Living",
      content:
        "Believers are called to live holy lives, separated from sin, and to grow continually in grace and godliness through the work of the Holy Spirit.",
      scriptures: "1 Thessalonians 4:3–4, Hebrews 12:14, Romans 12:1–2",
    },
    {
      number: 10,
      title: "Spiritual Gifts & Healing",
      content:
        "The Holy Spirit gives spiritual gifts for the building up of the church. Divine healing and miracles are part of God's provision through faith and prayer.",
      scriptures: "1 Corinthians 12:4–11, James 5:14–15, Mark 16:17–18",
    },
    {
      number: 11,
      title: "The Church",
      content:
        "The church is the body of Christ, made up of believers called to worship, fellowship, evangelism, and discipleship.",
      scriptures: "Ephesians 1:22–23, Acts 2:42–47, Matthew 16:18",
    },
    {
      number: 12,
      title: "Mission & Evangelism",
      content:
        "The Church of God is called to spread the Gospel and make disciples of all nations through witness and service.",
      scriptures: "Matthew 28:19–20, Mark 16:15, Acts 1:8",
    },
    {
      number: 13,
      title: "Resurrection & Judgment",
      content:
        "There will be a bodily resurrection of all the dead: eternal life for the righteous and everlasting punishment for the unrepentant.",
      scriptures: "John 5:28–29, Revelation 20:11–15, Matthew 25:31–46",
    },
    {
      number: 14,
      title: "Christ's Return",
      content:
        "We believe in the visible, personal, and imminent return of our Lord Jesus Christ and the establishment of His eternal Kingdom.",
      scriptures: "1 Thessalonians 4:16–17, Revelation 22:12–13, Matthew 24:30",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-gray-50 pt-[108px] lg:pt-32">
      {/* Hero Section */}
      <section className="relative bg-[#1E4E9A] text-white py-20 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: "url('/heroImages/hero10.png')",
          }}
        ></div>

        <div className="relative z-10 max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-white bg-opacity-30 rounded-full mb-6 backdrop-blur-sm shadow-lg">
            <FaBible className="text-5xl text-[#E02020]" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Doctrinal Commitments
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed mb-4">
            The 14 Articles of Faith That Guide Our Church Community
          </p>
          <p className="text-lg text-blue-200 max-w-3xl mx-auto">
            Rooted in the Word of God, inspired by the Holy Spirit, and centered
            on Jesus Christ
          </p>
        </div>
      </section>

      {/* Articles Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1600px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              14 Articles of Faith
            </h2>
            <p className="text-xl text-gray-600">
              Our foundational beliefs based on Scripture
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {articles.map((article) => (
              <div
                key={article.number}
                className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden"
              >
                <div className="p-8">
                  <div className="flex items-start mb-6">
                    <div className="w-14 h-14 bg-[#E02020] rounded-lg flex items-center justify-center text-white font-bold text-xl mr-4 flex-shrink-0 shadow-md">
                      {article.number}
                    </div>
                    <div className="flex-1">
                      <h2 className="text-2xl font-bold text-gray-900 leading-tight">
                        {article.title}
                      </h2>
                    </div>
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                    {article.content}
                  </p>
                  <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-[#1E4E9A]">
                    <p className="text-sm text-gray-700">
                      <FaBible className="inline mr-2 text-[#1E4E9A]" />
                      <span className="font-semibold text-gray-900">
                        Key Scriptures:
                      </span>{" "}
                      {article.scriptures}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#1E4E9A] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-[#E02020] rounded-full mb-6 shadow-lg">
            <FaCross className="text-3xl text-white" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Join Our Community?
          </h2>
          <p className="text-xl mb-8 text-blue-100 leading-relaxed">
            These beliefs form the foundation of our faith community. Take the
            next step in your faith journey and discover what it means to be
            part of the NTCG Kenya family.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/resources/churches"
              className="bg-[#E02020] hover:bg-[#B81C1C] text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Find a Church
            </a>
            <a
              href="/contact"
              className="bg-white text-[#1E4E9A] hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* Scripture Foundation Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Founded on Scripture
          </h2>
          <div className="bg-white rounded-xl shadow-lg p-8">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Our doctrinal commitments are firmly rooted in the Holy
              Scriptures, which we believe to be the inspired, infallible Word
              of God. These 14 Articles of Faith represent the core beliefs that
              unite us as the New Testament Church of God Kenya.
            </p>
            <div className="bg-blue-50 rounded-lg p-6 border-l-4 border-[#1E4E9A]">
              <p className="text-lg text-gray-900 italic">
                "All Scripture is God-breathed and is useful for teaching,
                rebuking, correcting and training in righteousness, so that the
                servant of God may be thoroughly equipped for every good work."
                <br />
                <span className="text-sm font-semibold mt-2 block">
                  - 2 Timothy 3:16-17
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BeliefsPage;
