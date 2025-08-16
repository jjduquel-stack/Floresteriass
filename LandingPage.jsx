import React from 'react';

function LandingPage({ onNavigate }) {
    return (
    <div style={landingStyles.container}>
        <div style={landingStyles.hero}>
        <div style={landingStyles.content}>
            <h1 style={landingStyles.title}>Welcome To Paradise Nursery</h1>
            <p style={landingStyles.subtitle}>Where Green Meets Serenity</p>

            <div style={landingStyles.description}>
            <p>
                Welcome to Paradise Nursery, where green meets serenity!
            </p>
            <p>
                At Paradise Nursery, we are passionate about bringing nature closer to you. Our mission 
                is to provide a wide range of high-quality plants that not only enhance the beauty of your 
                surroundings but also contribute to a healthier and more sustainable lifestyle. From air-
                purifying plants to aromatic fragrant ones, we have something for every plant enthusiast.
            </p>
            <p>
                Our team of experts is dedicated to ensuring that each plant meets the highest standards of 
                quality and care. Whether you're a seasoned gardener or just starting your green journey, 
                we're here to support you every step of the way. Feel free to explore our collection, ask 
                questions, and let us help you find the perfect plants for your home or office.
            </p>
            <p>
                Join us in our mission to create a greener, healthier world. Visit Paradise Nursery today 
                and experience the beauty of nature right at your doorstep.
            </p>
            </div>

            <button 
            style={landingStyles.button}
            onClick={() => onNavigate('products')}
            onMouseEnter={(e) => e.target.style.backgroundColor = '#45a049'}
            onMouseLeave={(e) => e.target.style.backgroundColor = '#4CAF50'}
            >
            Get Started
            </button>
        </div>
        </div>
    </div>
    );
}

const landingStyles = {
    container: {
    minHeight: '100vh',
    backgroundImage: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 1200 800\'%3E%3Crect fill=\'%2334495e\' width=\'1200\' height=\'800\'/%3E%3Cg fill=\'%234CAF50\'%3E%3Cpath d=\'M0 400c50-25 100-25 150 0s100 25 150 0 100-25 150 0 100 25 150 0 100-25 150 0 100 25 150 0 100-25 150 0 100 25 150 0v400H0z\' opacity=\'0.1\'/%3E%3C/g%3E%3C/svg%3E")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    },
    hero: {
    maxWidth: '1200px',
    padding: '2rem',
    },
    content: {
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    padding: '3rem',
    borderRadius: '10px',
    boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
    textAlign: 'center',
    maxWidth: '800px',
    margin: '0 auto',
    },
    title: {
    fontSize: '3rem',
    color: '#2c3e50',
    marginBottom: '1rem',
    fontWeight: 'bold',
    },
    subtitle: {
    fontSize: '1.2rem',
    color: '#4CAF50',
    marginBottom: '2rem',
    fontStyle: 'italic',
    },
    description: {
    fontSize: '1rem',
    color: '#555',
    lineHeight: '1.6',
    marginBottom: '2rem',
    textAlign: 'left',
    },
    button: {
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    padding: '1rem 2rem',
    fontSize: '1.2rem',
    borderRadius: '5px',
    cursor: 'pointer',
    fontWeight: 'bold',
    transition: 'background-color 0.3s',
    }
};

export default LandingPage;