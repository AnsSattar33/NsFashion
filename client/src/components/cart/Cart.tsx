import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CartProductList from './CartProductList';
import CartCheckoutRow from './CartCheckoutRow';
import CartRecommendationList from './CartRecommendationList';

type Props = {}

const Cart = (props: Props) => {
    const [cart, setCart] = useState<any>(null);

    useEffect(() => {
        const fetchCart = async () => {
            try {
                const response = await axios.get('/api/cart');
                setCart(response.data);
            } catch (error) {
                console.error('Error fetching cart:', error);
            }
        };

        fetchCart();
    }, []);

    const handleAddItem = async (productId: string, quantity: number) => {
        try {
            const response = await axios.post('/api/cart/add', { userId: 'userId', productId, quantity });
            setCart(response.data);
        } catch (error) {
            console.error('Error adding item to cart:', error);
        }
    };

    const handleRemoveItem = async (productId: string) => {
        try {
            const response = await axios.post('/api/cart/remove', { userId: 'userId', productId });
            setCart(response.data);
        } catch (error) {
            console.error('Error removing item from cart:', error);
        }
    };

    return (
        <div className='cart'>
            <h2 className='text-4xl font-semibold p-4'>Your Cart</h2>
            <div className='flex justify-around p-4'>
                <CartProductList onRemoveItem={handleRemoveItem} />
                <CartCheckoutRow cart={cart} />
            </div>
            {/* <CartRecommendationList /> */}
        </div>
    );
}

export default Cart;