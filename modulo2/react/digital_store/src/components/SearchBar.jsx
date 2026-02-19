import { InputIcon } from 'primereact/inputicon';
const SearchBar = () => {
    return (
        <>
        <div className='flex relative w-[50%]'>
            <input 
                                id="search_bar_header" 
                                type="text" 
                                placeholder="Pesquise o produto aqui"
                                className = "bg-(--light-gray-3) w-full h-10 rounded-md text-(--light-gray) self-center"
            />
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="lightgray" className="size-7 absolute top-1.5 right-0 mr-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
            </svg>
        </div>

        </>
    );
}
export default SearchBar