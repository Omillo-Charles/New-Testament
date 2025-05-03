import React, { useState } from 'react';
import './Store.css';

const Store = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const products = [
    {
      id: 1,
      name: "Holy Bible - KJV",
      category: "books",
      price: 24.99,
      image: "bible-placeholder.jpg",
      description: "King James Version with study notes"
    },
    {
      id: 2,
      name: "Worship CD Collection",
      category: "music",
      price: 15.99,
      image: "cd-placeholder.jpg",
      description: "Collection of contemporary worship songs"
    },
    {
      id: 3,
      name: "Cross Necklace",
      category: "jewelry",
      price: 29.99,
      image: "cross-placeholder.jpg",
      description: "Sterling silver cross pendant"
    },
    {
      id: 4,
      name: "Prayer Journal",
      category: "books",
      price: 12.99,
      image: "journal-placeholder.jpg",
      description: "Guided prayer journal with scripture references"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Items', icon: 'bi bi-grid-fill' },
    { id: 'books', name: 'Books & Bibles', icon: 'bi bi-book-fill' },
    { id: 'music', name: 'Music & Media', icon: 'bi bi-music-note-beamed' },
    { id: 'jewelry', name: 'Christian Jewelry', icon: 'bi bi-gem' }
  ];

  const filteredProducts = products.filter(product => {
    const matchesCategory = activeCategory === 'all' || product.category === activeCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="church-content-section store-section">
      <div className="content-header">
        <i className="bi bi-shop"></i>
        <h1>Church Store</h1>
        <p>Support our ministry while growing in faith</p>
      </div>

      <div className="store-search">
        <div className="search-bar">
          <i className="bi bi-search"></i>
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      <div className="store-categories">
        {categories.map(category => (
          <button
            key={category.id}
            className={`category-button ${activeCategory === category.id ? 'active' : ''}`}
            onClick={() => setActiveCategory(category.id)}
          >
            <i className={category.icon}></i>
            <span>{category.name}</span>
          </button>
        ))}
      </div>

      <div className="products-grid">
        {filteredProducts.map(product => (
          <div key={product.id} className="product-card">
            <div className="product-image">
              <img src={product.image} alt={product.name} />
              <div className="product-overlay">
                <button className="add-to-cart">
                  <i className="bi bi-cart-plus"></i>
                  Add to Cart
                </button>
              </div>
            </div>
            <div className="product-info">
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <div className="product-price">
                ${product.price.toFixed(2)}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="scripture-quote">
        <blockquote>
          <i className="bi bi-quote"></i>
          "And my God will meet all your needs according to the riches of his glory in Christ Jesus." - Philippians 4:19
        </blockquote>
      </div>
    </div>
  );
};

export default Store; 