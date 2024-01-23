import Image from "next/image";

const CriptoSelect = ({ currencies, onSelect }) => {
  const handleChange = (event) => {
    const selectedCrypto = currencies.find((crypto) => crypto.symbol === event.target.value);
    onSelect(selectedCrypto);
  };

  return (
    <select onChange={handleChange} style={{border:"solid", borderWidth:"1px", paddingLeft:"0.5rem", paddingTop:"0.2rem", paddingBottom:"0.2rem", width:"100%", borderColor:"#E5E9F2", borderRadius:"6px", padding:"0.6rem 0.4rem"}}>
      {currencies.map((crypto) => (
        <option key={crypto.symbol} value={crypto.symbol} className="">
        <div className="mr-2">
          <Image src={crypto.image} width={16} height={16} alt={crypto.name} />
        </div>
        {crypto.name}
      </option>
      ))}
    </select>
  );
};

export default CriptoSelect;