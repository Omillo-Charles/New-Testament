"use client";
import Head from "next/head";
import { FaBook } from "react-icons/fa";

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
    <>
      <Head>
        <title>Our Beliefs | New Testament Church of God Kenya</title>
        <meta
          name="description"
          content="The 14 Articles of Faith — what we believe as the New Testament Church of God Kenya. Rooted in the Word of God, inspired by the Holy Spirit, and centered on Jesus Christ."
        />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
        {/* Modern Hero Section */}
        <div className="relative overflow-hidden bg-gradient-to-r from-[#1E4E9A] via-[#2563EB] to-[#1E40AF] text-white">
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('/heroImages/hero10.png')",
            }}
          ></div>
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#1E4E9A]/80 via-[#2563EB]/70 to-[#1E40AF]/80"></div>
          <div className="absolute inset-0">
            <div className="absolute top-10 left-10 w-72 h-72 bg-white opacity-5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-300 opacity-10 rounded-full blur-3xl"></div>
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-white bg-opacity-20 rounded-2xl mb-8 backdrop-blur-sm">
                <FaBook className="text-4xl text-[#E02020]" />
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                Our Beliefs
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed mb-8">
                The 14 Articles of Faith that guide our church community and
                shape our understanding of God's Word
              </p>
              <div className="flex justify-center">
                <div className="w-32 h-1 bg-gradient-to-r from-transparent via-white to-transparent rounded-full"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Modern Articles Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {articles.map((article) => (
              <div
                key={article.number}
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 p-8"
              >
                <div className="flex items-start mb-6">
                  <div className="w-12 h-12 bg-[#1E4E9A] rounded-lg flex items-center justify-center text-white font-bold text-lg mr-4">
                    {article.number}
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-gray-800 leading-tight">
                      {article.title}
                    </h2>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed mb-6 text-lg">
                  {article.content}
                </p>
                <div className="bg-gray-50 rounded-lg p-4 border-l-4 border-[#1E4E9A]">
                  <p className="text-sm text-gray-700">
                    <span className="font-semibold text-gray-800">
                      Key Scriptures:
                    </span>{" "}
                    {article.scriptures}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action Section */}
          <div className="mt-20 bg-white rounded-lg shadow-lg p-12 text-center">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Ready to Join Our Community?
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                These beliefs form the foundation of our faith community. Take
                the next step in your faith journey and discover what it means
                to be part of the NTCG Kenya family.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md sm:max-w-none mx-auto">
                <a
                  href="/portals"
                  className="w-full sm:w-auto bg-[#E02020] hover:bg-[#B81C1C] text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 text-center"
                >
                  Find a Branch
                </a>
                <a
                  href="/contact"
                  className="w-full sm:w-auto border-2 border-[#1E4E9A] text-[#1E4E9A] hover:bg-[#1E4E9A] hover:text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 text-center"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BeliefsPage;
