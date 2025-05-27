import React, { useEffect, useState } from 'react';
import axios from 'axios';

// Modal Component
const Modal = ({ show, image, onClose }) => {
  if (!show) return null;

  return (
    <div style={styles.modal} onClick={onClose}>
      <div style={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <span style={styles.closeButton} onClick={onClose}>×</span>
        <img src={image} alt="Enlarged" style={styles.enlargedImage} />
      </div>
    </div>
  );
};

const Shoplist = () => {
  const [shops, setShops] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState('');

  useEffect(() => {
    const fetchShops = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/shops');
        setShops(response.data); // Store fetched data in state
      } catch (error) {
        console.error('Error fetching shops:', error);
      }
    };
    fetchShops();
  }, []);

  const openModal = (image) => {
    setCurrentImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentImage('');
  };

  return (
    <div>
      <h1>Shop List</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {shops.map((shop) => (
          <div key={shop._id} style={{ border: '1px solid #ccc', margin: '10px', padding: '10px', width: '200px' }}>
            {/* Image click handler */}
            <img
              src={`http://localhost:5000${shop.image}`} // Full URL to fetch the image
              alt={shop.name}
              style={{ width: '150px', height: '150px', objectFit: 'cover', cursor: 'pointer' }}
              onClick={() => openModal(`http://localhost:5000${shop.image}`)} // Open the modal with the image
            />
            <h2>{shop.name}</h2>
            <p>Owner: {shop.owner}</p>
            <p>Contact: {shop.contact}</p>
            <p>Address: {shop.address}</p>
          </div>
        ))}
      </div>

      {/* Modal for enlarging the image */}
      <Modal show={isModalOpen} image={currentImage} onClose={closeModal} />
    </div>
  );
};

const styles = {
  modal: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  },
  modalContent: {
    position: 'relative',
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '8px',
  },
  closeButton: {
    position: 'absolute',
    top: '10px',
    right: '10px',
    fontSize: '30px',
    cursor: 'pointer',
  },
  enlargedImage: {
    maxWidth: '90vw',
    maxHeight: '80vh',
    objectFit: 'contain',
  },
};

export default Shoplist;
