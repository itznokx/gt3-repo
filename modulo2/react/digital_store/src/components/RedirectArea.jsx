import IconShoppingCart from "../assets/mini-cart.svg"

const RedirectArea = ({cart_items}) => {
    return (
        <>
        <div
            id="header-redirect"
            className="flex flex-row items-center w-[25%] h-full bg-sky-300 gap-5"
        >
            <div
                className='flex flex-row w-[75%] bg-amber-700 gap-5 justify-center h-1/2 items-center'
            >
                <button 
                    id="register-button-header"
                    type='button'
                    className='w-[65%] hover:border-black border-4 text-(--dark-gray-2)'
                >
                    <p>Cadastre-se</p>
                </button>
                <button 
                    id="entrar-button-header"
                    className='bg-(--primary-color) text-(--white-color) font-bold rounded-md px-100'
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