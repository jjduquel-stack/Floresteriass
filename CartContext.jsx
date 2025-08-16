import React, { createContext, useContext, useReducer, useEffect } from 'react';

// ================================
// 1. CONTEXT Y REDUCER (va en src/context/CartContext.js)
// ================================

// Creamos el contexto para el carrito
const CartContext = createContext();

// Estados iniciales del carrito
const initialState = {
    cartItems: [],
    totalQuantity: 0,
    totalAmount: 0,
};

// Reducer para manejar las acciones del carrito
function cartReducer(state, action) {
    switch (action.type) {
        case 'ADD_TO_CART':
      // Verificar si el item ya existe en el carrito
        const existingItem = state.cartItems.find(item => item.id === action.payload.id);
        
        if (existingItem) {
        // Si ya existe, aumentar la cantidad
        const updatedItems = state.cartItems.map(item =>
            item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
        return {
            ...state,
            cartItems: updatedItems,
            totalQuantity: state.totalQuantity + 1,
            totalAmount: state.totalAmount + action.payload.price,
        };
        } else {
        // Si no existe, agregarlo al carrito
        const newItem = { ...action.payload, quantity: 1 };
        return {
            ...state,
            cartItems: [...state.cartItems, newItem],
            totalQuantity: state.totalQuantity + 1,
            totalAmount: state.totalAmount + action.payload.price,
        };
        }

    case 'REMOVE_FROM_CART':
        const filteredItems = state.cartItems.filter(item => item.id !== action.payload.id);
        const removedItem = state.cartItems.find(item => item.id === action.payload.id);
        return {
        ...state,
        cartItems: filteredItems,
        totalQuantity: state.totalQuantity - removedItem.quantity,
        totalAmount: state.totalAmount - (removedItem.price * removedItem.quantity),
        };

    case 'INCREASE_QUANTITY':
        const increasedItems = state.cartItems.map(item =>
        item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
        return {
        ...state,
        cartItems: increasedItems,
        totalQuantity: state.totalQuantity + 1,
        totalAmount: state.totalAmount + action.payload.price,
        };

    case 'DECREASE_QUANTITY':
        const item = state.cartItems.find(item => item.id === action.payload.id);
        if (item.quantity === 1) {
        // Si la cantidad es 1, remover el item completamente
        return cartReducer(state, { type: 'REMOVE_FROM_CART', payload: action.payload });
        } else {
        // Si la cantidad es mayor a 1, decrementar
        const decreasedItems = state.cartItems.map(item =>
            item.id === action.payload.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );
        return {
            ...state,
            cartItems: decreasedItems,
            totalQuantity: state.totalQuantity - 1,
            totalAmount: state.totalAmount - action.payload.price,
        };
        }

    case 'CLEAR_CART':
        return initialState;

    case 'LOAD_CART':
        return action.payload;

    default:
        return state;
    }
}

// Provider del contexto
export function CartProvider({ children }) {
    const [state, dispatch] = useReducer(cartReducer, initialState);

  // Cargar el carrito desde localStorage al inicializar
    useEffect(() => {
    const savedCart = localStorage.getItem('paradiseNurseryCart');
    if (savedCart) {
        dispatch({ type: 'LOAD_CART', payload: JSON.parse(savedCart) });
    }
    }, []);

  // Guardar el carrito en localStorage cada vez que cambie
    useEffect(() => {
    localStorage.setItem('paradiseNurseryCart', JSON.stringify(state));
    }, [state]);

    return (
    <CartContext.Provider value={{ state, dispatch }}>
        {children}
    </CartContext.Provider>
    );
}

// Hook personalizado para usar el contexto
export function useCart() {
    const context = useContext(CartContext);
    if (!context) {
    throw new Error('useCart debe ser usado dentro de CartProvider');
    }
    return context;
}