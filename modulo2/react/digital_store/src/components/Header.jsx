import HeaderNav from "./HeaderNav";
import Logo from "./Logo";
import RedirectArea from "./RedirectArea";
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
                        className="flex flex-row gap-5 items-center"
                    >
                        <Logo/>
                        <input 
                            id="search_bar_header" 
                            type="text" 
                            placeholder="Pesquise o produto aqui"
                            className = "col-span-5 bg-(--light-gray-3) w-4.5/5 h-15 rounded-md text-(--light-gray) self-center"
                        />
                        <RedirectArea/>
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