"use client";
import React, { useState } from "react";
import Image from "next/image";
import {
  FaShoppingCart,
  FaBook,
  FaTshirt,
  FaMusic,
  FaGift,
  FaSearch,
  FaStar,
  FaPlus,
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

  const products = [
    // T-Shirts
    {
      id: 1,
      name: "NTCG Kenya T-Shirt - Blue",
      category: "apparel",
      price: 1200,
      image: "/heroImages/hero1.png",
      description: "Premium quality cotton t-shirt with church logo in blue",
      rating: 5,
    },
    {
      id: 2,
      name: "NTCG Kenya T-Shirt - Red",
      category: "apparel",
      price: 1200,
      image: "/heroImages/hero2.png",
      description: "Premium quality cotton t-shirt with church logo in red",
      rating: 5,
    },
    {
      id: 3,
      name: "NTCG Kenya T-Shirt - White",
      category: "apparel",
      price: 1200,
      image: "/heroImages/hero3.png",
      description: "Premium quality cotton t-shirt with church logo in white",
      rating: 5,
    },
    // Polo Shirts
    {
      id: 4,
      name: "NTCG Polo Shirt - Navy Blue",
      category: "apparel",
      price: 1800,
      image: "/heroImages/hero4.png",
      description:
        "Professional polo shirt perfect for church events and services",
      rating: 5,
    },
    {
      id: 5,
      name: "NTCG Polo Shirt - Red",
      category: "apparel",
      price: 1800,
      image: "/heroImages/hero5.png",
      description: "Professional polo shirt with embroidered church logo",
      rating: 5,
    },
    // Books & Bibles
    {
      id: 6,
      name: "NTCG Kenya Study Bible",
      category: "books",
      price: 2500,
      image: "/heroImages/hero6.png",
      description: "Comprehensive study Bible with notes and commentary",
      rating: 5,
    },
    {
      id: 7,
      name: "Holy Bible - NIV",
      category: "books",
      price: 1500,
      image: "/heroImages/hero7.png",
      description: "New International Version Bible, hardcover edition",
      rating: 5,
    },
    {
      id: 8,
      name: "Children's Bible",
      category: "books",
      price: 1200,
      image: "/heroImages/hero8.png",
      description: "Illustrated Bible stories perfect for children",
      rating: 5,
    },
    {
      id: 9,
      name: "Devotional Book",
      category: "books",
      price: 900,
      image: "/heroImages/hero9.png",
      description: "365 days of inspiring devotional readings",
      rating: 5,
    },
    // Cups
    {
      id: 10,
      name: "NTCG Church Mug - Blue",
      category: "accessories",
      price: 500,
      image: "/heroImages/hero10.png",
      description: "Ceramic mug with church logo and inspirational scripture",
      rating: 4,
    },
    {
      id: 11,
      name: "NTCG Church Mug - Red",
      category: "accessories",
      price: 500,
      image: "/heroImages/hero11.png",
      description: "Ceramic mug with church logo in red color",
      rating: 4,
    },
    // Calendars
    {
      id: 12,
      name: "NTCG 2025 Wall Calendar",
      category: "accessories",
      price: 800,
      image: "/heroImages/hero1.png",
      description:
        "2025 calendar with daily scripture verses and church events",
      rating: 5,
    },
    {
      id: 13,
      name: "NTCG 2025 Desk Calendar",
      category: "accessories",
      price: 600,
      image: "/heroImages/hero2.png",
      description: "Compact desk calendar with monthly inspirational quotes",
      rating: 5,
    },
  ];

  const filteredProducts = products
    .filter((product) =>
      selectedCategory === "all" ? true : product.category === selectedCategory
    )
    .filter((product) =>
      searchQuery === ""
        ? true
        : product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.description.toLowerCase().includes(searchQuery.toLowerCase())
    );

  const addToCart = () => {
    setCartCount(cartCount + 1);
  };

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
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
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
      </section>

      {/* Products Grid */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-900">
              {categories.find((c) => c.id === selectedCategory)?.name}
            </h2>
            <p className="text-gray-600">
              {filteredProducts.length} products available
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="relative aspect-square bg-gray-200">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-2 right-2 bg-white rounded-full p-2 shadow-md">
                    <div className="flex items-center space-x-1 text-yellow-500">
                      <FaStar className="text-sm" />
                      <span className="text-xs font-bold text-gray-800">
                        {product.rating}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="p-4">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {product.name}
                  </h3>
                  <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                    {product.description}
                  </p>
                  <div className="mb-3">
                    <span className="text-2xl font-bold text-[#E02020]">
                      KSh {product.price.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={addToCart}
                      className="flex-1 bg-[#E02020] hover:bg-[#B81C1C] text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200"
                    >
                      Order Now
                    </button>
                    <button
                      onClick={addToCart}
                      className="bg-[#1E4E9A] hover:bg-[#163E7A] text-white p-2 rounded-lg transition-colors duration-200"
                    >
                      <FaPlus />
                    </button>
                  </div>
                </div>
              </div>
            ))}
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
