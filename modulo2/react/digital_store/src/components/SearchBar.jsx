import { InputIcon } from 'primereact/inputicon';
import SearchIcon from './icons/ SearchIcon';
const SearchBar = () => {
    return (
        <>
        <div className='flex relative w-[60%]'>
            <input 
                                id="search_bar_header" 
                                type="text" 
                                placeholder="Pesquise o produto aqui"
                                className = "bg-(--light-gray-3) w-full h-10 rounded-md text-(--light-gray) self-center"
            />
            <SearchIcon/>
        </div>

        </>
    );
}
export default SearchBar