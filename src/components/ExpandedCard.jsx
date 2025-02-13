import { useEffect, useState } from 'react';

export default function ExpandedCard({ card, onClose }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100); // Delay for animation effect
  }, []);

  return (
    <div className="expanded-card">
      {/* Background Video */}
      <video className="background-video" autoPlay loop muted>
        <source src={card.video} type="video/mp4" />
      </video>

      {/* Dynamic & Fully Centered Text Box */}
      <div className={`expanded-card-content ${isVisible ? 'visible' : ''}`}>
        <h2>{card.title}</h2>
        <p>{card.description}</p>
        <div className="button-container">
          <button onClick={onClose}>Back</button>
          <button>Register</button>
        </div>
      </div>
    </div>
  );
}

/* Fully Fixed CSS */
const styles = `
.expanded-card {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
  background: rgba(0, 0, 0, 0.7); /* Slight fade for focus */
}

.background-video {
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.expanded-card-content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); /* Ensures perfect centering */
  background: rgba(0, 0, 0, 0.3); /* Even more transparent */
  padding: 20px;
  color: white;
  text-align: center;
  border-radius: 10px;
  width: auto; /* Adjust width based on content */
  max-width: 80%; /* Prevent it from getting too wide */
  min-width: 300px; /* Ensure it doesn’t get too small */
  max-height: 90vh; /* Prevents overflow */
  overflow: auto; /* Enables scrolling if text overflows */
  opacity: 0;
  transform: translate(-50%, 50px); /* Start slightly below */
  transition: opacity 0.5s ease-out, transform 0.5s ease-out;
}

.expanded-card-content.visible {
  opacity: 1;
  transform: translate(-50%, -50%); /* Move to center */
}

.button-container {
  margin-top: 20px;
}

button {
  padding: 10px 20px;
  margin: 10px;
  background: #ff4a4a;
  color: white;
  border: none;
  cursor: pointer;
  transition: 0.3s;
}

button:hover {
  background: #ff2222;
}
`;

document.head.insertAdjacentHTML('beforeend', `<style>${styles}</style>`);
