import React from 'react'
import { useState } from 'react';

const DetailedCard = () => {

    const [quantity, setQuantity] = useState(1);

    const handleIncrease = () => setQuantity((prev: number) => Math.min(10, prev + 1));
    const handleDecrease = () => setQuantity((prev: number) => Math.max(1, prev - 1));
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseInt(e.target.value, 10);
        setQuantity(isNaN(value) ? 1 : Math.max(1, value));
    };
    return (
        <div>
            <div>
                <h1 className='pt-10 h1 uppercase'>Detailed Products</h1>
            </div>
            <div className='flex justify-between items-center py-10 container mx-auto'>
                <div className='flex justify-start items-center py-10 container mx-auto'>
                    <div>
                        <img className='w-full h-full self-start' src="/images/leather_jacket.png" alt="Jean" />
                    </div>
                    <div className='capitalize'>
                        <p>nsFashion.pk</p>
                        <h1 className='font-bold text-3xl mb-8'>Keilvin Jean</h1>
                        <p className='text-xl font-semibold mb-4'>STANLEY Quencher H2.0 FlowState Tumbler 40oz</p>
                        <h2 className='text-xl font-bold mb-8'>price: $200</h2>
                        <div className="flex items-center gap-2 mb-4 border rounded-lg p-1 w-36.5">
                            {/* Decrement Button */}
                            <button
                                onClick={handleDecrease}
                                className="px-3 py-1 bg-gray-200 font-bold hover:bg-red-400 text-xl rounded-lg hover:text-white"
                            >
                                -
                            </button>

                            {/* Input Field */}
                            <input
                                type="number"
                                value={quantity}
                                onChange={handleChange}
                                className="w-12 text-xl font-semibold text-center border-none outline-none bg-transparent appearance-none 
                                [&::-webkit-inner-spin-button]:appearance-none 
                                [&::-webkit-outer-spin-button]:appearance-none"
                                min="1"
                            />

                            {/* Increment Button */}
                            <button
                                onClick={handleIncrease}
                                className="px-3 py-1 bg-gray-200 hover:bg-red-400 text-xl font-bold rounded-lg hover:text-white"
                            >
                                +
                            </button>
                        </div>
                        <button className='cartBtn'>Add to Cart</button>
                    </div>
                </div>
                <div className='flex justify-start items-center py-10 container mx-auto'>
                    <div>
                        <img className='w-full h-full self-start' src="/images/shirt.png" alt="Jean" />
                    </div>
                    <div className='capitalize'>
                        <p>nsFashion.pk</p>
                        <h1 className='font-bold text-3xl mb-8'>Paulsmith</h1>
                        <p className='text-xl font-semibold mb-4'>STANLEY Quencher H2.0 FlowState Tumbler 40oz</p>
                        <h2 className='text-xl font-bold mb-8'>price: $200</h2>
                        <div className="flex items-center gap-2 mb-4 border rounded-lg p-1 w-36.5">
                            {/* Decrement Button */}
                            <button
                                onClick={handleDecrease}
                                className="px-3 py-1 bg-gray-200 font-bold hover:bg-red-400 text-xl rounded-lg hover:text-white"
                            >
                                -
                            </button>

                            {/* Input Field */}
                            <input
                                type="number"
                                value={quantity}
                                onChange={handleChange}
                                className="w-12 text-xl font-semibold text-center border-none outline-none bg-transparent appearance-none"
                                min="1"
                            />

                            {/* Increment Button */}
                            <button
                                onClick={handleIncrease}
                                className="px-3 py-1 bg-gray-200 hover:bg-red-400 text-xl font-bold rounded-lg hover:text-white"
                            >
                                +
                            </button>
                        </div>
                        <button className='cartBtn'>Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DetailedCard