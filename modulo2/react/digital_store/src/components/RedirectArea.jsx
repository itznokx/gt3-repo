import { InputIcon } from 'primereact/inputicon';
const RedirectArea = () => {
    return (
        <>
        <div
            id="header-redirect"
            className="col-span-3 bg-white flex flex-row gap-5"
        >
            <button 
                id="register-button-header"
                className='text-sm w-50'
            >
                Cadastre-se
            </button>
            <button 
                id="entrar-button-header"
                className='w-50 bg-(--primary-color) text-(--white-color) font-bold rounded-xl'
            >Entrar
            </button>
            <div>
                <div 
                    id='number-items-shopping-cart'
                    className='w-4 h-4 rounded-full bg-(--primary-color) items-center justify-center'
                >
                    1
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