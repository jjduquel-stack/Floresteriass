import React from 'react';
import { CartProvider } from './context/CartContext';
import Header from './components/Header';
import LandingPage from './components/LandingPage';
import ProductsPage from './components/ProductsPage';
import CartPage from './components/CartPage';

function App() {
  // Estado para controlar qué página mostrar
    const [currentPage, setCurrentPage] = React.useState('landing');

  // Función para navegar entre páginas
    const handleNavigate = (page) => {
    setCurrentPage(page);
    };

  // Función para renderizar la página actual
    const renderCurrentPage = () => {
    switch (currentPage) {
        case 'landing':
        return <LandingPage onNavigate={handleNavigate} />;
        case 'products':
        return <ProductsPage />;
        case 'cart':
        return <CartPage />;
        default:
        return <LandingPage onNavigate={handleNavigate} />;
    }
    };

    return (
    <CartProvider>
        <div style={appStyles.app}>
        <Header currentPage={currentPage} onNavigate={handleNavigate} />
        {renderCurrentPage()}
        </div>
    </CartProvider>
    );
}

const appStyles = {
    app: {
    fontFamily: 'Arial, sans-serif',
    margin: 0,
    padding: 0,
    }
};

export default App;