import { use, useState } from "react";
import HeaderNav from "./HeaderNav";
import HeaderNavTab from "./HeaderNavTab";
import Logo from "./Logo";
import RedirectArea from "./RedirectArea";
import SearchBar from "./SearchBar";
import SearchIcon from "./icons/ SearchIcon";
import BarsIcons from "./icons/BarsIcon";
import CartIcon from "./icons/CartIcon";
const Header = () =>
    {
        const [sideTab, setSideTab] = useState(false);
        const [searchBar,setSearchBar] = useState(false);
        return (
            <>

                <div 
                id="main-header"
                    className="flex fixed w-full gap-10 flex-col h-[10em]"
                >    
                    <div 
                        id="up-div-header"
                        className="flex flex-row gap-2 items-center justify-between"
                    >
                        <Logo 
                            logoLocal={"Header"}
                        />
                        <SearchBar/>
                        
                        <RedirectArea/>

                        <CartIcon
                            cart_items={"99+"}
                        />
                    </div>
                    <div >
                        <HeaderNav/>
                    </div>
                </div>
                <div
                    id="sm-header"
                    className="flex fixed w-full flex-col"
                >
                    <div
                        id="sm-header-upbar"    
                        className="flex flex-row w-full h-[5vh] gap-2 justify-between items-center p-2"
                    >
                        <div
                            className="order-1 w-[10%] cursor-pointer"
                            onClick={ () => setSideTab(!sideTab)}
                        >
                            <BarsIcons
                                color={"black"}
                            />
                        </div>
                        <div
                            className="order-2"
                        >
                            <Logo
                                logoLocal={"Header"}
                            />
                        </div>
                        <div
                            className="order-3 w-[10%]"
                            onClick={()=>setSearchBar(!searchBar)}
                        >
                            <SearchIcon
                                
                                color={`${searchBar ? "#C92071" : "lightgray"}`}
                            />
                        </div>
                        <div
                            className="order-4 w-[10%]"
                        >
                            <CartIcon
                                cart_items={0}
                            />
                        </div>
                        
                    </div>
                    <div
                            id="search-bar" 
                            className='flex relative w-full p-2'>
                            <input 
                                                id="search_bar_header" 
                                                type="text"
                                                placeholder="Pesquise o produto aqui"
                                                className = {`bg-(--light-gray-3) w-full h-10 rounded-md text-(--light-gray) self-center overflow-hidden transition-transform ${searchBar ? "tmax-h-20 opacity-100" : "max-h-0 opacity-0 hidden"}
                                                    `}
                            />
                        </div>
                    <div>
                            <HeaderNavTab
                                active={sideTab}
                            />
                    </div>
                </div>
                <hr/>
            </>
        );
    }
export default Header;