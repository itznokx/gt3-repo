import HeaderNav from "./HeaderNav";
import RedirectArea from "./RedirectArea";
import { NavLink } from "react-router-dom";
 const HeaderNavTab = ({active}) => {
    let navLinkActive = "nav-active-link"
    return (
        <>
            <div
                id = "nav-side-tab"
                className={`fixed flex flex-col p-5 gap-5 h-[90vh] pb-10 justify-between transition-transform duration-300 text-xl
                    ${active ? "translate-x-0" : "-translate-x-full"}`}
            >
                <div
                    id="side-tab-nav"
                    className="bg-amber-00"
                >
                    <nav className="flex flex-col gap-5 list-none text-1xl text-(--dark-gray-3)">
                        <NavLink
                            to="/"
                            className={({isActive})=>
                                isActive ? navLinkActive: undefined
                            }
                        >
                            Home
                        </NavLink>
                        <NavLink
                            to="/products"
                            className={({isActive})=>
                                isActive ? navLinkActive: undefined
                            }
                        >
                            Produtos
                        </NavLink>
                        <NavLink
                            to="/categories"
                            className={({isActive})=>
                                isActive ? navLinkActive: undefined
                            }
                        >
                            Categorias
                        </NavLink>
                        <NavLink
                            to="/orders"
                            className={({isActive})=>
                                isActive ? navLinkActive: undefined
                            }
                        >
                            Meus Pedidos
                        </NavLink>
                    </nav>
                </div>
                
                <div
                    id="side-tab-redirect"
                    className="flex flex-col w-full bg-sky-00 gap-5"
                >
                    <hr
                        className="text-(--light-gray-2) border"
                    />
                    <button 
                        id="login-button-header"
                        className='w-full bg-(--primary-color) text-(--white-color) font-bold rounded-xl pl-7 pr-7 pt-2 pb-2'
                    >
                        <p>Entrar</p>
                    </button>
                    <button 
                        id="register-button-header"
                        type='button'
                        className='w-full hover:underline cursor-pointer text-(--dark-gray-3)'
                    >
                        <p>Cadastre-se</p>
                    </button>
                    
                </div>
            </div>
        </>
    )
 }
 export default HeaderNavTab;