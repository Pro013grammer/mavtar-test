"use client";

import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext(undefined);

export function CartProvider({ children }) {
    const [items, setItems] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);

    // Load cart from localStorage on mount
    useEffect(() => {
        const savedCart = localStorage.getItem("mavtar-cart");
        if (savedCart) {
            try {
                setItems(JSON.parse(savedCart));
            } catch (e) {
                console.error("Failed to parse cart from localStorage:", e);
            }
        }
        setIsLoaded(true);
    }, []);

    // Save cart to localStorage whenever it changes
    useEffect(() => {
        if (isLoaded) {
            localStorage.setItem("mavtar-cart", JSON.stringify(items));
        }
    }, [items, isLoaded]);

    const addItem = (product, quantity = 1, options = {}) => {
        setItems((prev) => {
            // Create a unique key based on product id and options
            const optionKey = JSON.stringify(options);
            const existingIndex = prev.findIndex(
                (item) => item.productId === product.id && JSON.stringify(item.options) === optionKey
            );

            if (existingIndex > -1) {
                // Update quantity if item already exists
                const updated = [...prev];
                updated[existingIndex] = {
                    ...updated[existingIndex],
                    quantity: updated[existingIndex].quantity + quantity,
                };
                return updated;
            }

            // Add new item
            return [
                ...prev,
                {
                    id: `${product.id}-${Date.now()}`,
                    productId: product.id,
                    name: product.name,
                    price: product.price,
                    originalPrice: product.originalPrice,
                    image: product.image,
                    category: product.category,
                    unit: product.unit,
                    quantity,
                    options,
                },
            ];
        });
    };

    const removeItem = (itemId) => {
        setItems((prev) => prev.filter((item) => item.id !== itemId));
    };

    const updateQuantity = (itemId, quantity) => {
        if (quantity < 1) {
            removeItem(itemId);
            return;
        }
        setItems((prev) =>
            prev.map((item) =>
                item.id === itemId ? { ...item, quantity } : item
            )
        );
    };

    const clearCart = () => {
        setItems([]);
    };

    const getTotal = () => {
        return items.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    const getItemCount = () => {
        return items.reduce((count, item) => count + item.quantity, 0);
    };

    return (
        <CartContext.Provider
            value={{
                items,
                isLoaded,
                addItem,
                removeItem,
                updateQuantity,
                clearCart,
                getTotal,
                getItemCount,
            }}
        >
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    const context = useContext(CartContext);
    if (context === undefined) {
        throw new Error("useCart must be used within a CartProvider");
    }
    return context;
}
