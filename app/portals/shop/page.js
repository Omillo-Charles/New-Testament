"use client";
import React, { useState } from "react";
import {
  FaShoppingCart,
  FaBook,
  FaTshirt,
  FaGift,
  FaSearch,
  FaTruck,
  FaCreditCard,
  FaPhoneAlt,
} from "react-icons/fa";

const ShopPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [cartCount, setCartCount] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    { id: "all", name: "All Products", icon: <FaShoppingCart /> },
    { id: "apparel", name: "T-Shirts & Polos", icon: <FaTshirt /> },
    { id: "books", name: "Books & Bibles", icon: <FaBook /> },
    { id: "accessories", name: "Cups & Calendars", icon: <FaGift /> },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-gray-50">
      {/* Hero Section */}
      <section className="relative bg-[#1E4E9A] text-white py-12 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: "url('/contactImages/contact1.png')",
          }}
        ></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl md:text-5xl font-bold mb-4">
                Church Shop
              </h1>
              <p className="text-lg md:text-xl text-blue-100 max-w-2xl">
                Browse our collection of books, apparel, music, and gifts
              </p>
            </div>
            <div className="relative">
              <FaShoppingCart className="text-4xl" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-[#E02020] text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Search Bar */}
      <section className="py-6 px-4 sm:px-6 lg:px-8 bg-white shadow-sm sticky top-16 z-30">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center space-x-4">
            <div className="flex-1 relative">
              <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery || ""}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#1E4E9A] focus:outline-none"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="overflow-x-auto scrollbar-hide">
            <div className="flex gap-3 min-w-max sm:justify-center pb-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 whitespace-nowrap ${
                    selectedCategory === category.id
                      ? "bg-[#E02020] text-white shadow-lg"
                      : "bg-white text-gray-700 hover:bg-gray-100 shadow"
                  }`}
                >
                  {category.icon}
                  <span>{category.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-12 text-center">
              <FaShoppingCart className="text-6xl text-[#1E4E9A] mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Shop Currently Unavailable
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                For church merchandise and materials, please contact the National Office.
              </p>
              <a
                href="tel:+254759120222"
                className="inline-flex items-center bg-[#E02020] hover:bg-[#B81C1C] text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                <FaPhoneAlt className="mr-2" />
                Call National Office
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Info Banner */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#1E4E9A] text-white rounded-full mb-4">
                <FaTruck className="text-2xl" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Free Delivery
              </h3>
              <p className="text-gray-600">
                Free delivery on orders over KSh 2,000 within Nairobi
              </p>
            </div>
            <div>
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#E02020] text-white rounded-full mb-4">
                <FaCreditCard className="text-2xl" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Secure Payment
              </h3>
              <p className="text-gray-600">
                Safe and secure payment options including M-Pesa
              </p>
            </div>
            <div>
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#1E4E9A] text-white rounded-full mb-4">
                <FaPhoneAlt className="text-2xl" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Customer Support
              </h3>
              <p className="text-gray-600">
                Contact us for any questions or assistance
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Need Help Finding Something?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Contact our shop team for assistance with orders or product
            inquiries
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="/contact"
              className="w-full sm:w-auto bg-[#E02020] hover:bg-[#B81C1C] text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 text-center"
            >
              Contact Shop Team
            </a>
            <a
              href="/portals"
              className="w-full sm:w-auto border-2 border-[#1E4E9A] text-[#1E4E9A] hover:bg-[#1E4E9A] hover:text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 text-center"
            >
              Back to Portals
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ShopPage;
