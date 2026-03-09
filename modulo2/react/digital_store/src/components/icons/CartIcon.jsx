import IconShoppingCart from "../../assets/mini-cart.svg"
const CartIcon = ({cart_items}) => {
    return (
        <>
        <div
                className='bg-green-00 relative'
            >   
                <div 
                    id='number-items-shopping-cart'
                    className='flex size-4 rounded-full bg-(--error-color) items-center justify-center text-white ml-3 -mb-6 absolute'
                >
                    <p className='text-xs'>{cart_items}</p>
                </div>
                <img
                    className="mt-1.5"
                    src={IconShoppingCart}
                />
                
            </div>
        </>
    )
}
export default CartIcon;