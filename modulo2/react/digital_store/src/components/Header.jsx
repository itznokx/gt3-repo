import HeaderNav from "./HeaderNav";
import Logo from "./Logo";
import RedirectArea from "./RedirectArea";
import SearchBar from "./SearchBar";
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
                        className="flex flex-row gap-10 items-center"
                    >
                        <Logo/>
                        <SearchBar/>
                        <RedirectArea
                            cart_items={0}
                        />
                    </div>
                    <div>
                        <HeaderNav/>
                    </div>
                </div>
                <hr/>
            </>
        );
    }
export default Header;