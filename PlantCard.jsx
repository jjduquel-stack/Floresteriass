import React from 'react';
import { useCart } from '../context/CartContext';

function PlantCard({ plant }) {
    const { state, dispatch } = useCart();
    
  // Verificar si la planta está en el carrito
    const isInCart = state.cartItems.some(item => item.id === plant.id);

    const handleAddToCart = () => {
    dispatch({
        type: 'ADD_TO_CART',
        payload: plant
    });
    };

    return (
    <div style={cardStyles.card}>
      {/* Etiqueta de oferta */}
        <div style={cardStyles.saleLabel}>SALE</div>
        
      {/* Imagen de la planta (usando emoji como placeholder) */}
        <div style={cardStyles.imageContainer}>
        <span style={cardStyles.plantEmoji}>{plant.image}</span>
        </div>
      
      {/* Información de la planta */}
        <div style={cardStyles.info}>
        <h3 style={cardStyles.name}>{plant.name}</h3>
        <p style={cardStyles.price}>${plant.price}</p>
        <p style={cardStyles.description}>{plant.description}</p>
        
        {/* Botón de agregar al carrito */}
        <button
            style={{
            ...cardStyles.button,
            backgroundColor: isInCart ? '#95a5a6' : '#4CAF50',
            cursor: isInCart ? 'not-allowed' : 'pointer'
            }}
            onClick={handleAddToCart}
            disabled={isInCart}
            onMouseEnter={(e) => {
            if (!isInCart) {
                e.target.style.backgroundColor = '#45a049';
            }
            }}
            onMouseLeave={(e) => {
            if (!isInCart) {
                e.target.style.backgroundColor = '#4CAF50';
            }
            }}
        >
            {isInCart ? 'Added to Cart' : 'Add to Cart'}
        </button>
        </div>
    </div>
    );
}

const cardStyles = {
    card: {
    backgroundColor: 'white',
    borderRadius: '10px',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
    overflow: 'hidden',
    transition: 'transform 0.3s, box-shadow 0.3s',
    position: 'relative',
    },
    saleLabel: {
    position: 'absolute',
    top: '10px',
    right: '10px',
    backgroundColor: '#e74c3c',
    color: 'white',
    padding: '0.3rem 0.6rem',
    borderRadius: '3px',
    fontSize: '0.8rem',
    fontWeight: 'bold',
    zIndex: 1,
    },
    imageContainer: {
    height: '200px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f8f9fa',
    },
    plantEmoji: {
    fontSize: '4rem',
    },
    info: {
    padding: '1.5rem',
    textAlign: 'center',
    },
    name: {
    margin: '0 0 0.5rem 0',
    fontSize: '1.3rem',
    fontWeight: 'bold',
    color: '#2c3e50',
    },
    price: {
    margin: '0 0 1rem 0',
    fontSize: '1.2rem',
    color: '#4CAF50',
    fontWeight: 'bold',
    },
    description: {
    margin: '0 0 1.5rem 0',
    color: '#666',
    fontSize: '0.9rem',
    lineHeight: '1.4',
    },
    button: {
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    padding: '0.8rem 1.5rem',
    borderRadius: '5px',
    cursor: 'pointer',
    fontWeight: 'bold',
    transition: 'background-color 0.3s',
    width: '100%',
    }
};

export default PlantCard;