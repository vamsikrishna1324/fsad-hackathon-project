import React, { useState, useEffect } from 'react';
import { FiHeart } from 'react-icons/fi';
import styles from '../styles/GamingGear.module.css';
import GamingGearFooter from '../components/GamingGearFooter';

const GamingGear = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const mockProducts = [
      {
        id: 1,
        name: 'Razer Viper Ultimate',
        price: 129.99,
        imageUrl: '/1.jpg',
        link: 'https://www.razer.com/gaming-mice/razer-viper-ultimate',
        isFavorite: false,
      },
      {
        id: 2,
        name: 'Logitech G Pro X Keyboard',
        price: 149.99,
        imageUrl: '/2.jpg',
        link: 'https://www.logitechg.com/en-us/products/keyboards/pro-x-keyboard',
        isFavorite: false,
      },
      {
        id: 3,
        name: 'SteelSeries Arctis Pro',
        price: 179.99,
        imageUrl: '/3.jpg',
        link: 'https://steelseries.com/gaming-headsets/arctis-pro',
        isFavorite: false,
      },
      {
        id: 4,
        name: 'Corsair MM800 Polaris',
        price: 49.99,
        imageUrl: '/4.jpg',
        link: 'https://www.corsair.com/us/en/Categories/Products/Gaming-Mousepads/MM800-POLARIS-RGB-Gaming-Mouse-Pad/p/CH-9415021-NA',
        isFavorite: false,
      },
      {
        id: 5,
        name: 'HyperX Cloud Alpha',
        price: 99.99,
        imageUrl: '/5.jpg',
        link: 'https://www.hyperxgaming.com/en/headsets/cloud-alpha-gaming-headset',
        isFavorite: false,
      },
      {
        id: 6,
        name: 'Razer Huntsman Elite',
        price: 199.99,
        imageUrl: '/6.jpg',
        link: 'https://www.razer.com/gaming-keyboards/razer-huntsman-elite',
        isFavorite: false,
      },
      {
        id: 7,
        name: 'Logitech G502 Hero',
        price: 79.99,
        imageUrl: '/7.jpg',
        link: 'https://www.logitechg.com/en-us/products/gaming-mice/g502-hero-gaming-mouse',
        isFavorite: false,
      },
      {
        id: 8,
        name: 'SteelSeries QcK Prism',
        price: 59.99,
        imageUrl: '/8.jpg',
        link: 'https://steelseries.com/gaming-mousepads/qck-prism',
        isFavorite: false,
      },
      {
        id: 9,
        name: 'Corsair Virtuoso RGB',
        price: 149.99,
        imageUrl: '/9.jpg',
        link: 'https://www.corsair.com/us/en/Categories/Products/Gaming-Headsets/VIRTUOSO-RGB-WIRELESS-SE/p/CA-9011200-NA',
        isFavorite: false,
      },
      {
        id: 10,
        name: 'ASUS ROG Strix Scope',
        price: 159.99,
        imageUrl: '/10.jpg',
        link: 'https://rog.asus.com/keyboards/keyboards/rog-strix-scope/',
        isFavorite: false,
      },
      {
        id: 11,
        name: 'Glorious Model O',
        price: 79.99,
        imageUrl: '/11.jpg',
        link: 'https://www.pcgamingrace.com/products/glorious-model-o',
        isFavorite: false,
      },
      {
        id: 12,
        name: 'Razer Goliathus Extended',
        price: 39.99,
        imageUrl: '/12.jpg',
        link: 'https://www.razer.com/gaming-mouse-mats/razer-goliathus-extended',
        isFavorite: false,
      },
      {
        id: 13,
        name: 'Beyerdynamic MMX 300',
        price: 299.99,
        imageUrl: '/13.jpg',
        link: 'https://europe.beyerdynamic.com/mmx-300-2nd-gen.html',
        isFavorite: false,
      },
      {
        id: 14,
        name: 'Ducky One 3',
        price: 109.99,
        imageUrl: '/14.jpg',
        link: 'https://www.duckychannel.com.tw/en/One-3',
        isFavorite: false,
      },
      {
        id: 15,
        name: 'Finalmouse Starlight',
        price: 189.99,
        imageUrl: '/15.jpg',
        link: 'https://finalmouse.com/',
        isFavorite: false,
      },
      {
        id: 16,
        name: 'HyperX Fury S Pro',
        price: 29.99,
        imageUrl: '/16.jpg',
        link: 'https://www.hyperxgaming.com/en/mousepads/fury-s-pro-gaming-mousepad',
        isFavorite: false,
      },
      {
        id: 17,
        name: 'Sennheiser GSP 600',
        price: 199.99,
        imageUrl: '/17.jpg',
        link: 'https://en-us.sennheiser.com/gsp-600',
        isFavorite: false,
      },
      {
        id: 18,
        name: 'Keychron K8 Pro',
        price: 119.99,
        imageUrl: '/18.jpg',
        link: 'https://www.keychron.com/products/keychron-k8-pro-qmk-via-wireless-mechanical-keyboard',
        isFavorite: false,
      },
      {
        id: 19,
        name: 'Razer Basilisk V3',
        price: 69.99,
        imageUrl: '/19.jpg',
        link: 'https://www.razer.com/gaming-mice/razer-basilisk-v3',
        isFavorite: false,
      },
      {
        id: 20,
        name: 'XTEN Control Pad',
        price: 89.99,
        imageUrl: '/20.jpg',
        link: 'https://xten-pc.com/products/control-pad',
        isFavorite: false,
      },
      {
        id: 21,
        name: 'Audeze LCD-GX',
        price: 899.99,
        imageUrl: '/21.jpg',
        link: 'https://www.audeze.com/products/lcd-gx',
        isFavorite: false,
      },
      {
        id: 22,
        name: 'Wooting 60HE',
        price: 175.00,
        imageUrl: '/22.jpg',
        link: 'https://wooting.io/60he',
        isFavorite: false,
      },
      {
        id: 23,
        name: 'G-Wolves Hati-S',
        price: 89.99,
        imageUrl: '/23.jpg',
        link: 'https://www.g-wolves.com/collections/hati-s',
        isFavorite: false,
      },
      {
        id: 24,
        name: 'Artisan Hayate Otsu',
        price: 69.99,
        imageUrl: '/24.jpg',
        link: 'https://www.artisan-jp.com/hayate_otsu.html',
        isFavorite: false,
      },
      {
        id: 25,
        name: 'EPOS H6Pro',
        price: 179.99,
        imageUrl: '/25.jpg',
        link: 'https://www.eposaudio.com/en/us/gaming/headsets/h6pro-closed-acoustic',
        isFavorite: false,
      },
      {
        id: 26,
        name: 'Akko 5075B Plus',
        price: 99.99,
        imageUrl: '/26.jpg',
        link: 'https://en.akkogear.com/product/5075b-plus/',
        isFavorite: false,
      },
      {
        id: 27,
        name: 'Pulsar X2 Medium',
        price: 94.99,
        imageUrl: '/27.jpg',
        link: 'https://pulsar.gg/products/x2',
        isFavorite: false,
      },
      {
        id: 28,
        name: 'Lethal Gaming Gear Saturn',
        price: 49.99,
        imageUrl: '/28.jpg',
        link: 'https://www.lethalgaminggear.com/products/saturn-deskmat',
        isFavorite: false,
      },
      {
        id: 29,
        name: 'Bose QuietComfort Ultra',
        price: 429.99,
        imageUrl: '/29.jpg',
        link: 'https://www.bose.com/p/headphones/quietcomfort-ultra-headphones/QCULTRAHEADPHONES_.html',
        isFavorite: false,
      },
      {
        id: 30,
        name: 'NuPhy Air75 V2',
        price: 149.99,
        imageUrl: '/30.jpg',
        link: 'https://nuphy.com/products/air75-v2',
        isFavorite: false,
      }
    ];

    setTimeout(() => {
      setProducts(mockProducts);
      setLoading(false);
    }, 1000);
  }, []);

  const toggleFavorite = (productId) => {
    setProducts(products.map(product => 
      product.id === productId 
        ? { ...product, isFavorite: !product.isFavorite } 
        : product
    ));
  };

  if (loading) return <div className={styles.loading}>Loading Gaming Gear...</div>;

  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Premium Gaming Gear</h1>
      
      <div className={styles.grid}>
        {products.map((product) => (
          <div key={product.id} className={styles.card}>
            <a
              href={product.link}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.productLink}
            >
              <div 
                className={styles.imageContainer}
                style={{ backgroundImage: `url(${product.imageUrl})` }}
              >
                <button 
                  onClick={(e) => {
                    e.preventDefault();
                    toggleFavorite(product.id);
                  }}
                  className={styles.favoriteButton}
                  aria-label="Toggle favorite"
                >
                  <FiHeart 
                    className={`${styles.heartIcon} ${
                      product.isFavorite ? styles.favorited : ''
                    }`}
                  />
                </button>
              </div>
            </a>
            
            <div className={styles.productInfo}>
              <h3 className={styles.productTitle}>{product.name}</h3>
              <p className={styles.productPrice}>${product.price.toFixed(2)}</p>
            </div>
          </div>
        ))}
      </div>

      <GamingGearFooter />
    </div>
  );
};

export default GamingGear;