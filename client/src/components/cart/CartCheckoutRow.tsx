
type Props = {
    cart: any
}

const CartCheckoutRow = ({ cart }: Props) => {
    console.log("cart", cart)
    return (
        <div className='bg-green-200 w-2/4'>CartCheckoutRow</div>
    )
}

export default CartCheckoutRow