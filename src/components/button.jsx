export const Button = ({ text, isGroup }) => {
    return (
        <button className={`w-full mt-2 text-white ${isGroup ? 'rounded-[100px] hover:none h-8 bg-[#035AC5]' : 'rounded-md hover:bg-blue-500 h-12 bg-[#C6DFFE]'}`} >
            {text}
        </button>
    );
}
