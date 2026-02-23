import { Link } from "react-router-dom";
import { NavLink } from 'react-router-dom';
const HeaderNav = () => {

    let navLinkActive = "nav-active-link"

    return (
        <>
        <div
            id="header-navigation"
            className="bg-amber-00"
        >
            <nav className="flex gap-10 list-none text-1xl text-(--dark-gray-3) mb-0.5">
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
        </>
    )
}
export default HeaderNav;