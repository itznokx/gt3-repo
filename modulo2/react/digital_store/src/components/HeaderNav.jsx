import { Link } from "react-router-dom";

const HeaderNav = () => {
    return (
        <>
        <div
            id="header-navigation"
            className="bg-amber-200"
        >
            <nav className="flex gap-5 list-none">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/products">Products</Link>
                </li>
                <li>
                    <Link to="/categories">Categorias</Link>
                </li>
                <li>
                    <Link to="/orders">Meus Pedidos</Link>
                </li>
            </nav>
        </div>
        </>
    )
}
export default HeaderNav;