import React, { createContext, useState, } from 'react'

export const CartContext = createContext();

const CartProvider = ({children}) => {

    //state to hold cart items
    const [cart, setCart] = useState([]);

    //add to cart
    const addToCart = (item, id)=> {
        const newItem = {...item, amount : 1};

        const existingItem = cart.find((item) => item.id === id);
        if (existingItem) {
           const newCart = [...cart].map((item) => {
            if (item.id === id) {
                return { ...item, amount: existingItem.amount + 1}
            } else {
                return item;
            }
           });
           setCart(newCart);
        }  
        else {
            setCart([...cart, newItem])
        }
    };


    //remove from cart
    const removeFromCart = (id) => {
        const newCart = cart.filter((item) => {
            return item.id !==id;
        })
        setCart(newCart);
    }

    //emptying the cart
    const clearCart = () => {
        setCart([]);
    }

    const increaseAmount = (id) => {
        const cartItem = cart.find((item) => item.id === id);
        addToCart(cartItem, id);
    }

    const decreaseAmount = (id) => {
        const cartItem = cart.find((item) => item.id === id);
        if (cartItem) { 
            const newCart = cart.map(item => {
                if (item.id === id) {
                    return {...item, amount: cartItem.amount - 1 };
                } else {
                    return item;
                }
            });
            setCart(newCart);
        } else {
            if (cartItem.amount < 2) {
                removeFromCart(id);
            }
        }
        
    }

    return (
        <CartContext.Provider value={{
            cart,
            addToCart,
            removeFromCart, 
            clearCart, 
            increaseAmount,
            decreaseAmount}}>
            {children}
        </CartContext.Provider>
    )

}

export default CartProvider;
