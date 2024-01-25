import { CriptoList } from "@/modals/criptoList";
import Image from "next/image";
import { useState, useEffect } from "react";
import useCryptoSearch from "@/hooks/useCryptoSearch";

const CriptoSelect = ({ currencies, isOpen, toggleOpen, setIsOpen, onCryptoSelect }) => {
  const [selectedCrypto, setSelectedCrypto] = useState(null);
  const [loading, setLoading] = useState(true);

  const { searchQuery, filteredCurrencies, handleSearch, resetSearch } = useCryptoSearch(currencies);

  useEffect(() => {
    if (currencies.length > 0) {
      setSelectedCrypto(currencies[0]);
      setLoading(false);
    }
  }, [currencies]);

  const checkOpen = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      resetSearch();
    }
  };

  const cryptoPlaceholder = selectedCrypto ? selectedCrypto.name : "";
  const cryptoPlaceholderImg = selectedCrypto ? selectedCrypto.image : "";

  return (
    <>
      <div className="m-auto flex flex-col gap-3">
        <div className="flex justify-between">
          <p className={`${isOpen ? 'text-xl mb-1 font-bold text-primary' : "font-bold text-l text-primary"}`}>Seleccionar criptomoneda</p>
          {isOpen ? <Image src="/close.svg" width={20} height={20} onClick={toggleOpen} className="cursor-pointer" /> : null}
        </div>
        <div
          onClick={toggleOpen && checkOpen}
          className={`${isOpen ? 'hidden' : "border border-solid px-3 py-3 w-full border-[#E5E9F2] rounded-md cursor-pointer flex justify-between"}`}
        >
          <div className="flex gap-2">
            {loading ? (
              <Image src="/loading.gif" alt="Loading" width={25} height={25} />
            ) : (
              <Image src={cryptoPlaceholderImg} width={25} height={25} />
            )}
            <p className="text-primary">{cryptoPlaceholder}</p>
          </div>
          <Image src="/arrow-down.svg" width={15} height={15} />
        </div>
        <div className="w-full">
          {isOpen && (
            <CriptoList
              currencies={filteredCurrencies}
              onSelect={(crypto) => {
                setSelectedCrypto(crypto);
                onCryptoSelect(crypto);
              }}
              selectedCrypto={selectedCrypto}
              onSearch={handleSearch}
              searchQuery={searchQuery}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default CriptoSelect;
