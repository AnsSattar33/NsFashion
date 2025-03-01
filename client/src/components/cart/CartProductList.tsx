import { useContext } from 'react';
import { landingPageContext } from '../../pages/Home/context/LandingPageContext';
import LazyImage from '../../shared/LazyImage';

const CartProductList = () => {
    const context = useContext(landingPageContext);

    if (!context) {
        throw new Error("CartProductList must be used within a LandingPageContextProvider");
    }

    const { state, dispatch } = context;
    const { cart } = state;
    const uniqueCart = cart.reduce((acc: any, item: any) => {
        const existingItem = acc.find((i: any) => i.cardId === item.cardId);
        if (existingItem) {
            existingItem.productQuantity += item.productQuantity;
            existingItem.productPrice += item.productPrice;
        } else {
            acc.push({ ...item, unitPrice: item.productPrice / item.productQuantity });
        }
        return acc;
    }, []);

    const handleAddItem = (productId: string) => {
        dispatch({ type: 'ADD_ITEM', payload: productId });
    };

    const handleMinusItem = (productId: string) => {
        const item = uniqueCart.find((i: any) => i.cardId === productId);
        if (item) {
            item.productPrice -= item.unitPrice;
        }
        dispatch({ type: 'MINUS_ITEM', payload: productId });
    };

    const onRemoveItem = (productId: string) => {
        dispatch({ type: 'REMOVE_ITEM', payload: productId });
        dispatch({ type: 'REMOVE_ITEM_FROM_CART', payload: 1 })
    };

    const totalItems = uniqueCart.reduce((acc: number, item: any) => acc + item.productQuantity, 0);
    const totalPrice = uniqueCart.reduce((acc: number, item: any) => {
        return acc + (Number(item.productPrice) || 0);
    }, 0);
    return (
        <div className="flex flex-wrap gap-8">
            {uniqueCart.map((item: any) => (
                <div className='card flex flex-col md:flex-row bg-white shadow-md rounded-lg overflow-hidden mb-4' key={item.cardId}>
                    <div className='card-image '>
                        <LazyImage src={item?.cardImage} alt='product' className='w-40 object-cover' />
                    </div>
                    <div className='card-content p-4 md:w-2/3'>
                        <span className='card-title text-xl font-bold mb-2'>{item.cardTitle}</span>
                        <p className='text-gray-700 mb-4'>{item.cardDescription}</p>
                        <div className='card-tags mb-4'>
                            {item.cardTags.map((tag: string, index: number) => (
                                <span key={index} className='tag bg-gray-200 text-gray-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded'>{tag}</span>
                            ))}
                        </div>
                        <div className='card-actions flex items-center'>
                            <button onClick={() => onRemoveItem(item?.cardId)} className='bg-red-500 text-white px-4 py-2 rounded mr-2'>Remove</button>
                            <button onClick={() => handleAddItem(item?.cardId)} className='add-button bg-green-500 text-white px-4 py-2 rounded mr-2'>+</button>
                            <span className='text-lg font-semibold'>{item.productQuantity}</span>
                            <button onClick={() => handleMinusItem(item?.cardId)} className='minus-button bg-yellow-500 text-white px-4 py-2 rounded'>-</button>
                        </div>
                        <div className='card-price mt-4'>
                            <span className='text-lg font-semibold'>Price: ${item?.productPrice}</span>
                        </div>
                    </div>
                </div>
            ))}
            <div className="w-full mt-4">
                <span className="text-xl font-bold">Total Items: {totalItems}</span>
                <span className="text-xl font-bold ml-4">Total Price: ${totalPrice}</span>
            </div>
        </div>
    );
}

export default CartProductList;