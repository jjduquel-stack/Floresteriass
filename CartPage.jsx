import React from 'react';
import { useCart } from '../context/CartContext';

function CartPage() {
    const { state, dispatch } = useCart();

    const handleIncrease = (item) => {
    dispatch({
        type: 'INCREASE_QUANTITY',
        payload: item
    });
    };

    const handleDecrease = (item) => {
    dispatch({
        type: 'DECREASE_QUANTITY',
        payload: item
    });
    };

    const handleRemove = (item) => {
    dispatch({
        type: 'REMOVE_FROM_CART',
        payload: item
    });
    };

    const handleCheckout = () => {
    alert('¡Compra exitosa! Gracias por tu pedido en Paradise Nursery. 🌿');
    dispatch({ type: 'CLEAR_CART' });
    };

    if (state.cartItems.length === 0) {
    return (
        <div style={cartStyles.container}>
        <div style={cartStyles.content}>
            <div style={cartStyles.emptyCart}>
            <span style={cartStyles.emptyIcon}>🛒</span>
            <h2>Your cart is empty</h2>
            <p>Add some beautiful plants to get started!</p>
            </div>
        </div>
        </div>
    );
    }

    return (
    <div style={cartStyles.container}>
        <div style={cartStyles.content}>
        <h2 style={cartStyles.title}>Shopping Cart</h2>
        
        {/* Total del carrito */}
        <div style={cartStyles.summary}>
            <p style={cartStyles.totalItems}>Total Items: {state.totalQuantity}</p>
            <p style={cartStyles.totalAmount}>Total Amount: ${state.totalAmount.toFixed(2)}</p>
        </div>

        {/* Items del carrito */}
        <div style={cartStyles.cartItems}>
            {state.cartItems.map(item => (
            <div key={item.id} style={cartStyles.cartItem}>
              {/* Imagen de la planta */}
                <div style={cartStyles.itemImage}>
                <span style={cartStyles.plantEmoji}>{item.image}</span>
                </div>
                
              {/* Información del item */}
                <div style={cartStyles.itemInfo}>
                <h3 style={cartStyles.itemName}>{item.name}</h3>
                <p style={cartStyles.itemPrice}>${item.price}</p>
                
                {/* Controles de cantidad */}
                <div style={cartStyles.quantityControls}>
                    <button 
                    style={cartStyles.quantityButton}
                    onClick={() => handleDecrease(item)}
                    >
                    -
                    </button>
                    <span style={cartStyles.quantity}>{item.quantity}</span>
                    <button 
                    style={cartStyles.quantityButton}
                    onClick={() => handleIncrease(item)}
                    >
                    +
                    </button>
                </div>
                
                {/* Subtotal del item */}
                <p style={cartStyles.subtotal}>
                  Subtotal: ${(item.price * item.quantity).toFixed(2)}
                </p>
                </div>
                
              {/* Botón de eliminar */}
                <button 
                style={cartStyles.removeButton}
                onClick={() => handleRemove(item)}
                >
                Delete
                </button>
            </div>
            ))}
        </div>

        {/* Botones de acción */}
        <div style={cartStyles.actions}>
            <button 
            style={cartStyles.checkoutButton}
            onClick={handleCheckout}
            >
            Checkout
            </button>
            </div>
        </div>
    </div>
    );
}

const cartStyles = {
    container: {
    minHeight: '100vh',
    backgroundColor: '#f8f9fa',
    paddingBottom: '2rem',
    },
    content: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '2rem',
    },
    title: {
    fontSize: '2.5rem',
    color: '#2c3e50',
    marginBottom: '2rem',
    textAlign: 'center',
    },
    summary: {
    backgroundColor: 'white',
    padding: '1.5rem',
    borderRadius: '10px',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
    marginBottom: '2rem',
    textAlign: 'center',
    },
    totalItems: {
    fontSize: '1.2rem',
    color: '#2c3e50',
    margin: '0 0 0.5rem 0',
    },
    totalAmount: {
    fontSize: '1.5rem',
    color: '#4CAF50',
    fontWeight: 'bold',
    margin: 0,
    },
    cartItems: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    marginBottom: '2rem',
    },
    cartItem: {
    backgroundColor: 'white',
    padding: '1.5rem',
    borderRadius: '10px',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    },
    itemImage: {
    width: '80px',
    height: '80px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f8f9fa',
    borderRadius: '10px',
    },
    plantEmoji: {
    fontSize: '2.5rem',
    },
    itemInfo: {
    flex: 1,
    },
    itemName: {
    margin: '0 0 0.5rem 0',
    color: '#2c3e50',
    },
    itemPrice: {
    margin: '0 0 1rem 0',
    color: '#4CAF50',
    fontWeight: 'bold',
    },
    quantityControls: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    marginBottom: '0.5rem',
    },
    quantityButton: {
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '50%',
    width: '30px',
    height: '30px',
    cursor: 'pointer',
    fontSize: '1rem',
    fontWeight: 'bold',
    },
    quantity: {
    fontSize: '1.2rem',
    fontWeight: 'bold',
    minWidth: '30px',
    textAlign: 'center',
    },
    subtotal: {
    margin: 0,
    color: '#666',
    fontSize: '0.9rem',
    },
    removeButton: {
    backgroundColor: '#e74c3c',
    color: 'white',
    border: 'none',
    padding: '0.5rem 1rem',
    borderRadius: '5px',
    cursor: 'pointer',
    fontWeight: 'bold',
    },
    actions: {
    textAlign: 'center',
    },
    checkoutButton: {
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    padding: '1rem 3rem',
    fontSize: '1.2rem',
    borderRadius: '5px',
    cursor: 'pointer',
    fontWeight: 'bold',
    transition: 'background-color 0.3s',
    },
    emptyCart: {
    textAlign: 'center',
    padding: '3rem',
    backgroundColor: 'white',
    borderRadius: '10px',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
    },
    emptyIcon: {
    fontSize: '4rem',
    display: 'block',
    marginBottom: '1rem',
    }
};

export default CartPage;