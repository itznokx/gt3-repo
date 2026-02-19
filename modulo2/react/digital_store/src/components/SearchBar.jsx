import { InputIcon } from 'primereact/inputicon';
const SearchBar = () => {
    return (
        <>
            <input 
                                id="search_bar_header" 
                                type="text" 
                                placeholder="Pesquise o produto aqui"
                                className = "bg-(--light-gray-3) w-2/4 h-10 rounded-md text-(--light-gray) self-center"
            />

        </>
    );
}
export default SearchBar