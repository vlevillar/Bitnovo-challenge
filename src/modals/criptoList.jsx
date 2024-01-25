import { SearchBar } from "@/components/searchBar";
import Image from "next/image";

export const CriptoList = ({ currencies, onSelect, selectedCrypto, onSearch, searchQuery }) => {
  const handleSelect = (crypto) => {
    onSelect(crypto);
  };

  return (
    <div className="flex flex-col justify-between items-center self-stretch">
      <SearchBar onSearch={onSearch} searchQuery={searchQuery} />
      {currencies.map((crypto) => (
        <div
          key={crypto.symbol}
          className="flex py-3 px-3 items-center gap-3 self-stretch cursor-pointer hover:bg-[#EFF2F7] rounded-md"
          onClick={() => handleSelect(crypto)}
        >
          <div>
            <Image src={crypto.image} width={35} height={35} />
          </div>
          <div className="flex flex-col">
            <p className="font-bold text-sm text-primary">{crypto.name}</p>
            <p className="text-sm text-secondary">{crypto.symbol}</p>
          </div>
          <div className="ml-auto">
            <Image src={
                selectedCrypto && selectedCrypto.symbol === crypto.symbol
                  ? "./tick-circle-blue.svg"
                  : "./arrow-right.svg"
              } width={20} height={20} />
          </div>
        </div>
      ))}
    </div>
  );
};
