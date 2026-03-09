import IconShoppingCart from "../../assets/mini-cart.svg"
const CartIcon = ({cart_items}) => {
    return (
        <>
        <div
                className='flex bg-green-00 items-center justify-center'
            >   
                <div>
                    <img
                        className="size-6"
                        src={IconShoppingCart}
                    />
                </div>
                <div 
                    id='number-items-shopping-cart'
                    className='flex size-4 rounded-full bg-(--error-color) justify-center items-center text-white mb-3'
                >
                    <p className='text-xs font-bold'>{cart_items}</p>
                </div>
            </div>
        </>
    )
}
export default CartIcon;