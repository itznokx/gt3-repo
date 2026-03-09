import IconShoppingCart from "../../assets/mini-cart.svg"
const CartIcon = ({cart_items}) => {
    return (
        <>
        <div
                className='flex flex-col w-[10%] items-center bg-green-00 relative'
            >
                
                <div 
                    id='number-items-shopping-cart'
                    className='flex size-4 rounded-full bg-(--primary-color) items-center justify-center text-white -mr-4'
                >
                    <p className='text-xs'>{cart_items}</p>
                </div>
                <img
                    className="mb-2"
                    src={IconShoppingCart}
                />
                
            </div>
        </>
    )
}
export default CartIcon;