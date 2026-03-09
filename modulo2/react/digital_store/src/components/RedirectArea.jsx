
const RedirectArea = () => {
    return (
        <>
        <div
            id="header-redirect"
            className="flex flex-row w-[15%] gap-0 h-full bg-sky-00 pr-2 pl-2"
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
        </>
    )
}
export default RedirectArea;