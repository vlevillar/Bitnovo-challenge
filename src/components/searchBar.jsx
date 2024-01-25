import Image from 'next/image';

export const SearchBar = ( {onSearch}) => {
    return (
        <div className="border border-solid px-3 py-4 w-full border-[#E5E9F2] rounded-md flex items-center">
            <Image src="/search.svg" width={15} height={15} />
            <input type="text" placeholder="Buscar" className="w-full outline-none border-none ml-2" onChange={(e) => onSearch(e.target.value)}/>
        </div>
    );
};
