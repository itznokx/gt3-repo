import HeaderNav from "./HeaderNav";
import Logo from "./Logo";
import RedirectArea from "./RedirectArea";
import SearchBar from "./SearchBar";
import CartIcon from "./icons/CartIcon";
const Header = () =>
    {
        return (
            <>

                <div 
                id="main-header"
                className="flex fixed w-full gap-10 flex-col"
                >   
                    <div 
                        id="up-div-header"
                        className="flex flex-row gap-2 items-center"
                    >
                        <Logo 
                            logoLocal={"Header"}
                        />
                        <SearchBar/>
                        
                        <RedirectArea/>

                        <CartIcon
                            cart_items={0}
                        />
                    </div>
                    <div>
                        <HeaderNav/>
                    </div>
                </div>
                <div
                    id="sm-header"
                >
                    <div>
                        
                    </div>
                </div>
                <hr/>
            </>
        );
    }
export default Header;