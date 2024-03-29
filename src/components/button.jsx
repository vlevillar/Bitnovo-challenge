export const Button = ({ text, isGroup, onClick, disabled, customStyles }) => {
    const buttonStyles = `w-full mt-2 text-white  ${customStyles} ${isGroup ? 'rounded-[400px] hover:none h-8 bg-[#035AC5]' : ''} ${!disabled ? 'rounded-md bg-[#035AC5] h-12 cursor-pointer' : 'h-12 rounded-md cursor-not-allowed bg-[#C6DFFE]'}`;
  
    return (
      <button className={buttonStyles} onClick={onClick} disabled={disabled}>
        {text}
      </button>
    );
};
