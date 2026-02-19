import IconShoppingCart from "../assets/mini-cart.svg"

const RedirectArea = ({cart_items}) => {
    return (
        <>
        <div
            id="header-redirect"
            className="flex flex-row items-center w-[25%] h-full bg-sky-0 gap-5"
        >
            <div
                className='flex flex-row w-[75%] bg-amber-0 gap-5 justify-center h-1/2 items-center'
            >
                <button 
                    id="register-button-header"
                    type='button'
                    className='w-[65%] hover:underline cursor-pointer text-(--dark-gray-3)'
                >
                    <p>Cadastre-se</p>
                </button>
                <button 
                    id="login-button-header"
                    className='bg-(--primary-color) text-(--white-color) font-bold rounded-xl pl-10 pr-10 pt-2 pb-2'
                >
                    <p>Entrar</p>
                </button>
            </div>
            <div
                className='flex flex-col w-[25%] items-center bg-green-500'
            >
                <div 
                    id='number-items-shopping-cart'
                    className='flex size-6 rounded-full bg-(--primary-color) items-center justify-center text-white'
                >
                    <p className='text-xs'>{cart_items}</p>
                </div>
                <img
                    src={IconShoppingCart}
                />
            </div>
        </div>
        </>
    )
}
export default RedirectArea;