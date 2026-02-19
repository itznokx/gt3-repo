import { InputIcon } from 'primereact/inputicon';
const RedirectArea = ({cart_items}) => {
    return (
        <>
        <div
            id="header-redirect"
            className="flex flex-row items-center h-20 bg-sky-300"
        >
            <div
                className='flex flex-row w-70 bg-amber-700 gap-5 justify-center h-1/2 items-center p-0'
            >
                <button 
                    id="register-button-header"
                    type='button'
                    className='w-1.5/4 border-black border-4'
                >
                    Cadastre-se
                </button>
                <button 
                    id="entrar-button-header"
                    className='w-1/3 h-9/10 bg-(--primary-color) text-(--white-color) font-bold rounded-md'
                >Entrar
                </button>
            </div>
            <div
                className='flex flex-col w-20 items-center bg-green-500'
            >
                <div 
                    id='number-items-shopping-cart'
                    className='flex size-6 rounded-full bg-(--primary-color) items-center justify-center text-white'
                >
                    <p className='text-xs'>{cart_items}</p>
                </div>
                <InputIcon
                    className='pi pi-shopping-cart'
                    
                />
            </div>
        </div>
        </>
    )
}
export default RedirectArea;