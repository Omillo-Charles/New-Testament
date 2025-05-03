import React from 'react';
import { useCart } from '../contexts/CartContext';
import './Cart.css';

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, getCartTotal, clearCart } = useCart();

  if (cart.length === 0) {
    return (
      <div className="empty-cart">
        <i className="bi bi-cart-x"></i>
        <h2>Your cart is empty</h2>
        <p>Add some items to get started!</p>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <div className="cart-header">
        <h2>
          <i className="bi bi-cart-fill"></i>
          Your Cart
        </h2>
        <button className="clear-cart" onClick={clearCart}>
          <i className="bi bi-trash"></i>
          Clear Cart
        </button>
      </div>

      <div className="cart-items">
        {cart.map(item => (
          <div key={item.id} className="cart-item">
            <div className="item-image">
              <img src={item.image} alt={item.name} />
            </div>
            <div className="item-details">
              <h3>{item.name}</h3>
              <p className="item-description">{item.description}</p>
              <div className="item-price">${item.price.toFixed(2)}</div>
            </div>
            <div className="item-actions">
              <div className="quantity-controls">
                <button
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  className="quantity-btn"
                >
                  <i className="bi bi-dash"></i>
                </button>
                <span className="quantity">{item.quantity}</span>
                <button
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  className="quantity-btn"
                >
                  <i className="bi bi-plus"></i>
                </button>
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                className="remove-btn"
              >
                <i className="bi bi-x"></i>
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="cart-footer">
        <div className="cart-total">
          <span>Total:</span>
          <span className="total-amount">${getCartTotal().toFixed(2)}</span>
        </div>
        <button className="checkout-btn">
          <i className="bi bi-credit-card"></i>
          Proceed to Checkout
        </button>
      </div>

      <div className="scripture-quote">
        <blockquote>
          <i className="bi bi-quote"></i>
          "For where your treasure is, there your heart will be also." - Matthew 6:21
        </blockquote>
      </div>
    </div>
  );
};

export default Cart; 