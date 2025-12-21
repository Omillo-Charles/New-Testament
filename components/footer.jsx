import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 relative rounded-lg shadow-md bg-white p-1">
                <Image
                  src="/mainLogo.png"
                  alt="NTCoG Kenya Logo"
                  fill
                  className="object-contain rounded-md"
                />
              </div>
              <div>
                <span className="text-2xl font-bold text-white">NTCoG</span>
                <span className="text-lg text-gray-200 block leading-tight font-medium">
                  Kenya
                </span>
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Building faith, community, and hope across Kenya. Join us as we
              worship together, grow in faith, and serve our communities with
              love.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/ntcogk"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#E02020] transition-colors duration-300"
                aria-label="Facebook - @ntcogk"
                title="Facebook - @ntcogk"
                target='_blank'
                rel="noopener noreferrer"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="https://x.com/ntcogk"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-black transition-colors duration-300"
                aria-label="X (Twitter) - @ntcogk"
                title="X (Twitter) - @ntcogk"
                target='_blank'
                rel="noopener noreferrer"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="https://www.youtube.com/@ntcogk"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#E02020] transition-colors duration-300"
                aria-label="YouTube - @ntcogk"
                title="YouTube - @ntcogk"
                target='_blank'
                rel="noopener noreferrer"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
              <a
                href="https://www.tiktok.com/@ntcogk"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#1E4E9A] transition-colors duration-300"
                aria-label="TikTok - @ntcogk"
                title="TikTok - @ntcogk"
                target='_blank'
                rel="noopener noreferrer"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-.88-.05A6.33 6.33 0 0 0 5.16 20.5a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.2-.5z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/portals"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Portals
                </Link>
              </li>
              <li>
                <Link
                  href="/programs"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Programs
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Resources</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/resources/churches"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Churches
                </Link>
              </li>
              <li>
                <Link
                  href="/resources/gallery"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  href="/resources/beliefs"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Beliefs
                </Link>
              </li>
              <li>
                <Link
                  href="/resources/legals"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Legals
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} New Testament Church of God Kenya. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white transition-colors duration-200">
                Terms of Service
              </Link>
            </div>
          </div>

          {/* Developer Credit */}
          <div className="mt-4 pt-4 border-t border-gray-800">
            <p className="text-center text-gray-400 text-sm">
              Built and maintained by{" "}
              <a
                href="https://omytech.co.ke"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#1E4E9A] hover:text-[#163E7A] transition-colors duration-200 font-medium"
              >
                OMYTECH
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;