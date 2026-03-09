import IconShoppingCart from "../../assets/mini-cart.svg"
const CartIcon = ({cart_items}) => {
    return (
        <>
        <div
                className='w-[5%] flex bg-green-100 items-center justify-center'
            >   
                <img
                    className="mt-1.5"
                    src={IconShoppingCart}
                />
                <div 
                    id='number-items-shopping-cart'
                    className='flex size-4 rounded-full bg-(--error-color) justify-center text-white mb-3'
                >
                    <p className='text-xs'>{cart_items}</p>
                </div>
            </div>
        </>
    )
}
export default CartIcon;