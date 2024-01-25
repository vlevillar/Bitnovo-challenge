import Image from "next/image";

export const OrderItem = ({ left, right, nobold, noborder, decoration }) => {
    return (
      <div className={`flex ${noborder ? '' : 'border-b'} border-lightGrey pb-6 items-center`}>
        <div className="flex-1 pl-4">
          <p className="text-primary font-bold">{left}</p>
        </div>
        <div className="flex-1 flex pr-4 items-center justify-end content-around">
            {decoration ? 
            <Image src={decoration} width={20} height={20} className="mr-2"/>
            : null}
          <p className={`text-primary ${nobold ? 'font-semibold' : 'font-bold'}`}>{right}</p>
        </div>
      </div>
    );
  };
  