export const reducer = (state: any, action: any) => {
    switch (action.type) {
        case 'ADD_ITEM':
            return {
                ...state,
                cart: state.cart.map((item: any) =>
                    item.cardId === action.payload
                        ? { ...item, productQuantity: item.productQuantity + 1 }
                        : item
                ),
            };
        case 'MINUS_ITEM':
            return {
                ...state,
                cart: state.cart.map((item: any) =>
                    item.cardId === action.payload && item.productQuantity > 1
                        ? { ...item, productQuantity: item.productQuantity - 1 }
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
                cart: [...state.cart, action.payload],
            };
        case 'UPDATE_TOTAL_CART_VALUE':
            return {
                ...state,
                totalCartValue: state.totalCartValue + action.payload,
            };
        case 'SET_RADIO_BUTTON':
            return {
                ...state,
                radioButtonSelected: action.payload,
            };
        default:
            return state;
    }
};
