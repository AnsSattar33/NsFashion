import { useContext } from 'react';
import { landingPageContext } from '../pages/Home/context/LandingPageContext';
import { toast } from 'react-toastify';
import LazyImage from '../shared/LazyImage';
type Props = {
    cardImage: string;
    cardTitle: string;
    cardDescription: string;
    cardTags: string[];
    cardId: number;
    productQuantity: number
    productPrice: string
}

const Card = ({ cardImage, cardTitle, cardDescription, cardTags, cardId, productPrice, productQuantity }: Props) => {
    const context = useContext(landingPageContext);

    if (!context) {
        throw new Error(
            "Card component must be used within a LandingPageContextProvider"
        );
    }

    const { state, dispatch } = context;

    const handleAddToCart = async () => {
        try {
            const itemExists = state.cart.some((item: any) => item.cardId === cardId);
            if (itemExists) {
                toast.success('item already added to cart')
                return;
            }
            const cartItems = { cardImage, cardTitle, cardDescription, cardTags, cardId, productPrice, productQuantity }
            dispatch({ type: 'ADD_ITEM_TO_CART', payload: cartItems });
            dispatch({ type: 'UPDATE_TOTAL_CART_VALUE', payload: 1 });
            toast.success('item added to cart')
        } catch (error) {
            console.error('Error adding item to cart:', error);
            toast.error(error instanceof Error ? error.message : 'An error occurred');
        }
    }

    return (
        <div className='mb-10'>
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
                <LazyImage className='w-full h-96' src={cardImage} alt={cardTitle} />
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{cardTitle}</div>
                    <p className="text-gray-700 text-base">
                        {cardDescription}
                    </p>
                    <h1 className='text-2xl font-semibold'>Rs {productPrice}</h1>
                </div>
                <div className="px-6 py-4">
                    {cardTags.map((tag, tagIndex) => (
                        <span key={tagIndex} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#{tag}</span>
                    ))}
                </div>
            </div>
            <div>
                <button onClick={handleAddToCart} className="w-full cartBtn cursor-pointer">
                    Add to Cart
                </button>
            </div>
        </div>
    )
}

export default Card