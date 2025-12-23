"use client";
import React, { useState } from "react";
import Image from "next/image";
import {
  FaImages,
  FaTimes,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

const GalleryPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Gallery categories with images
  const galleryCategories = [
    {
      id: "church",
      name: "Church Life",
      images: Array.from({ length: 11 }, (_, i) => ({
        src: `/heroImages/hero${i + 1}.png`,
        alt: `Church Life ${i + 1}`,
        category: "church",
      })),
    },
    {
      id: "youth",
      name: "Youth Ministry",
      images: [1, 2, 3, 5, 6, 7, 8, 9].map((num) => ({
        src: `/youthImages/youth${num}.png`,
        alt: `Youth Ministry ${num}`,
        category: "youth",
      })),
    },
    {
      id: "children",
      name: "Children's Ministry",
      images: [
        1, 2, 3, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
      ].map((num) => ({
        src: `/childrenImages/child${num}.png`,
        alt: `Children's Ministry ${num}`,
        category: "children",
      })),
    },
    {
      id: "about",
      name: "Our Story",
      images: [1, 2].map((num) => ({
        src: `/aboutImages/about${num}.png`,
        alt: `Our Story ${num}`,
        category: "about",
      })),
    },
  ];

  // Flatten all images
  const allImages = galleryCategories.flatMap((cat) => cat.images);

  // Filter images based on selected category
  const filteredImages =
    selectedCategory === "all"
      ? allImages
      : allImages.filter((img) => img.category === selectedCategory);

  // Lightbox navigation
  const openLightbox = (image) => {
    setSelectedImage(image);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const goToPrevious = () => {
    const currentIndex = filteredImages.findIndex(
      (img) => img.src === selectedImage.src
    );
    const previousIndex =
      (currentIndex - 1 + filteredImages.length) % filteredImages.length;
    setSelectedImage(filteredImages[previousIndex]);
  };

  const goToNext = () => {
    const currentIndex = filteredImages.findIndex(
      (img) => img.src === selectedImage.src
    );
    const nextIndex = (currentIndex + 1) % filteredImages.length;
    setSelectedImage(filteredImages[nextIndex]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-red-50 pt-[108px] lg:pt-32">
      {/* Hero Section */}
      <section className="relative bg-[#1E4E9A] text-white py-12 overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: "url('/heroImages/hero8.png')",
          }}
        ></div>

        <div className="relative z-10 max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Our Gallery</h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto">
            Capturing moments of faith, fellowship, and community across NTCG
            Kenya
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-4 px-4 sm:px-6 lg:px-8 bg-white shadow-sm sticky top-16 z-30">
        <div className="max-w-[1600px] mx-auto">
          <div className="overflow-x-auto scrollbar-hide">
            <div className="flex gap-3 min-w-max sm:justify-center pb-2">
              <button
                onClick={() => setSelectedCategory("all")}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 whitespace-nowrap ${selectedCategory === "all"
                    ? "bg-[#E02020] text-white shadow-lg"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
              >
                All Photos ({allImages.length})
              </button>
              {galleryCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 whitespace-nowrap ${selectedCategory === category.id
                      ? "bg-[#1E4E9A] text-white shadow-lg"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                >
                  {category.name} ({category.images.length})
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1600px] mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredImages.map((image, index) => (
              <div
                key={index}
                className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2"
                onClick={() => openLightbox(image)}
              >
                <div className="aspect-square bg-gray-200">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={400}
                    height={400}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 text-white w-full">
                    <p className="font-semibold text-sm">{image.alt}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredImages.length === 0 && (
            <div className="text-center py-20">
              <p className="text-xl text-gray-500">
                No images found in this category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4">
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-50"
          >
            <FaTimes className="text-3xl" />
          </button>

          {/* Previous Button */}
          <button
            onClick={goToPrevious}
            className="absolute left-4 text-white hover:text-gray-300 transition-colors z-50"
          >
            <FaChevronLeft className="text-4xl" />
          </button>

          {/* Image */}
          <div className="relative max-w-6xl max-h-[90vh] w-full h-full flex items-center justify-center">
            <Image
              src={selectedImage.src}
              alt={selectedImage.alt}
              width={1200}
              height={1200}
              className="max-w-full max-h-full object-contain"
            />
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/70 text-white px-6 py-3 rounded-full">
              <p className="text-sm font-semibold">{selectedImage.alt}</p>
            </div>
          </div>

          {/* Next Button */}
          <button
            onClick={goToNext}
            className="absolute right-4 text-white hover:text-gray-300 transition-colors z-50"
          >
            <FaChevronRight className="text-4xl" />
          </button>
        </div>
      )}

      {/* Call to Action */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Be Part of Our Story
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join us in worship, fellowship, and service. Experience the love and
            community of NTCG Kenya.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
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
      </section>
    </div>
  );
};

export default GalleryPage;
