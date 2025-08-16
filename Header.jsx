import React from 'react';
import { useCart } from '../context/CartContext';

function Header({ currentPage, onNavigate }) {
    const { state } = useCart();

    return (
    <header style={headerStyles.header}>
        <div style={headerStyles.container}>
        {/* Logo y nombre de la empresa */}
        <div 
            style={headerStyles.logo}
            onClick={() => onNavigate('landing')}
        >
            <span style={headerStyles.logoIcon}>🌿</span>
            <div>
            <h1 style={headerStyles.companyName}>Paradise Nursery</h1>
            <p style={headerStyles.slogan}>Where Green Meets Serenity</p>
            </div>
        </div>

        {/* Carrito de compras */}
        {currentPage !== 'landing' && (
            <div 
            style={headerStyles.cart}
            onClick={() => onNavigate('cart')}
            >
            <span style={headerStyles.cartIcon}>🛒</span>
            <span style={headerStyles.cartCount}>{state.totalQuantity}</span>
            </div>
        )}
        </div>
    </header>
    );
}

const headerStyles = {
    header: {
    backgroundColor: '#4CAF50',
    color: 'white',
    padding: '1rem 0',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    },
    container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 2rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    },
    logo: {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    },
    logoIcon: {
    fontSize: '2rem',
    marginRight: '1rem',
    },
    companyName: {
    margin: 0,
    fontSize: '1.8rem',
    fontWeight: 'bold',
    },
    slogan: {
    margin: 0,
    fontSize: '0.9rem',
    opacity: 0.9,
    },
    cart: {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    padding: '0.5rem',
    borderRadius: '5px',
    transition: 'background-color 0.3s',
    },
    cartIcon: {
    fontSize: '1.5rem',
    marginRight: '0.5rem',
    },
    cartCount: {
    backgroundColor: '#ff4444',
    color: 'white',
    borderRadius: '50%',
    padding: '0.2rem 0.5rem',
    fontSize: '0.8rem',
    fontWeight: 'bold',
    minWidth: '20px',
    textAlign: 'center',
    }
};

export default Header;