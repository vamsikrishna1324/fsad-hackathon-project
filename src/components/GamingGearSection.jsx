import React from 'react';
import '../styles/GamingGearSection.css'; // Ensure this CSS file exists

const GamingGearSection = () => {
  const products = [
    { img: "/product1.jpg", name: "Logitech G502 HERO High Performance Wired Gaming Mouse", category: "Gaming Peripherals", price: "$149.99" },
    { img: "/product2.jpg", name: "HyperX Cloud Stinger – Gaming Headset", category: "Gaming Headset", price: "$199.99" },
    { img: "/product3.jpg", name: "HyperX Cloud II Gaming Headset", category: "Gaming Headset", price: "$129.99" },
    { img: "/product4.jpg", name: "TKOOFN RGB Large Mouse Pad", category: "Furniture", price: "$399.99" },
    { img: "/product5.jpg", name: "Call of Duty: Modern Warfare", category: "Game", price: "$399.99" },
    { img: "/product6.jpg", name: "Huntsman Mini 60% Gaming Keyboard", category: "Gaming Keyboard", price: "$399.99" }
  ];  
  return (
    <section className="gaming-gear-section">
      <div className="gear-container">
        <div className="section-header">
          <h2 className="section-title">Premium Gaming Gear</h2>
        </div>

        <div className="gear-grid">
          {products.map((product, index) => (
            <div key={index} className="gear-card">
              <img src={product.img} alt={product.name} className="gear-image" />
              <div className="gear-details">
                <h3 className="gear-name">{product.name}</h3>
                <p className="gear-category">{product.category}</p>
                <p className="gear-price">{product.price}</p>
              </div>
            </div>
          ))}
        </div>

        <a href="#" className="shop-now-btn">Shop Now</a>
      </div>
    </section>
  );
};

export default GamingGearSection;
