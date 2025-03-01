export const reducer = (state: any, action: any) => {
    switch (action.type) {
        case 'ADD_ITEM':
            return {
                ...state,
                cart: state.cart.map((item: any) =>
                    item.cardId === action.payload
                        ? {
                            ...item,
                            productQuantity: item.productQuantity + 1,
                            productPrice: Number(item.productPrice) + item.productPrice
                        }
                        : item
                ),
            };
        case 'MINUS_ITEM':
            return {
                ...state,
                cart: state.cart.map((item: any) =>
                    item.cardId === action.payload && item.productQuantity > 1
                        ? {
                            ...item,
                            productQuantity: item.productQuantity - 1,
                            productPrice: Number(item.productPrice) - item.productPrice / item.productQuantity
                        }
                        : item
                ),

            };
        case 'ADD_ITEM_TO_CART':
            const itemExists = state.cart.some((item: any) => item.cardId === action.payload.cardId);
            if (itemExists) {
                return state;
            }
            return {
                ...state,
                cart: [...state.cart, { ...action.payload, productQuantity: 1 }],
            };
        case 'UPDATE_TOTAL_CART_VALUE':
            return {
                ...state,
                totalCartItem: state.totalCartItem + action.payload,
                totalItems: state.cart.reduce((acc: number, item: any) => acc + item.productQuantity, 0)
            };
        case 'SET_RADIO_BUTTON':
            return {
                ...state,
                radioButtonSelected: action.payload,
            };
        case 'REMOVE_ITEM':
            return {
                ...state,
                cart: state.cart.filter((item: any) => item.cardId !== action.payload),
            };
        case 'REMOVE_ITEM_FROM_CART':

            return {
                ...state,
                totalCartItem: state.totalCartItem - 1
            };
        default:
            return state;
    }
};
