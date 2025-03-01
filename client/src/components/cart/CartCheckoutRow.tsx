import axios from 'axios';
import { useState, useEffect } from 'react';

type Props = {
    cart: any
}

const CartCheckoutRow = ({ cart }: Props) => {
    const [loading, setLoading] = useState(false);
    const [amount, setAmount] = useState(0); // Initialize with cart's totalAmount
    const [cardNumber, setCardNumber] = useState('');
    const [cardExpiry, setCardExpiry] = useState('');
    const [cardCVV, setCardCVV] = useState('');

    useEffect(() => {
        if (cart) {
            const totalAmount = cart.reduce((acc: number, item: any) => acc + item.price, 0);
            setAmount(totalAmount);
        }
    }, [cart]);

    const handlePayment = async () => {
        setLoading(true);
        try {
            const response = await axios.post('/api/jazzcash/payment', {
                amount: amount, // Use the amount from the input field
                description: 'Cart Checkout Payment',
                cardNumber: cardNumber,
                cardExpiry: cardExpiry,
                cardCVV: cardCVV
            });
            console.log('Payment response:', response.data);
            // Handle successful payment response
        } catch (error) {
            console.error('Error processing payment:', error);
            // Handle payment error
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className='w-2/4'>
            <div className='flex flex-col space-y-2 justify-center items-center container mx-auto w-1/2'>

                <div className='flex flex-col w-full space-y-2'>
                    <label className='text-lg font-semibold'>Enter Amount</label>
                    <input
                        type="number"
                        className='border-2 border-black rounded px-6 py-2'
                        value={amount}
                        onChange={(e) => setAmount(Number(e.target.value))}
                        disabled={loading}
                    />
                </div>
                <div className='flex flex-col w-full space-y-2'>
                    <label className='text-lg font-semibold'>Enter Card Number</label>
                    <input
                        type="text"
                        className='border-2 border-black rounded px-6 py-2'
                        placeholder="Card Number"
                        value={cardNumber}
                        onChange={(e) => setCardNumber(e.target.value)}
                        disabled={loading}
                    />
                </div>
                <div className='flex flex-col w-full space-y-2'>
                    <label className='text-lg font-semibold'>Enter Card Expiry</label>
                    <input
                        type="text"
                        className='border-2 border-black rounded px-6 py-2'

                        placeholder="Card Expiry (MMYY)"
                        value={cardExpiry}
                        onChange={(e) => setCardExpiry(e.target.value)}
                        disabled={loading}
                    />
                </div>
                <div className='flex flex-col w-full space-y-2'>
                    <label className='text-lg font-semibold'>Enter Card CVV</label>
                    <input
                        type="text"
                        className='border-2 border-black rounded px-6 py-2'

                        placeholder="Card CVV"
                        value={cardCVV}
                        onChange={(e) => setCardCVV(e.target.value)}
                        disabled={loading}
                    />
                </div>
                <button onClick={handlePayment} disabled={loading} className='cartBtn w-full cursor-pointer'>
                    {loading ? 'Processing...' : 'Checkout with JazzCash'}
                </button>
            </div>
        </div>
    )
}

export default CartCheckoutRow