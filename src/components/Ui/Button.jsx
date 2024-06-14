//
export default function Button({ children, onClick, myStyle, icon }) {
  return (
    <>
      <button
        onClick={onClick}
        className={`flex justify-center items-center p-1 border rounded-[5px] text-white text-[20px] w-[100px] duration-150 ${myStyle}`}
      >
        <span className="mx-2"> {icon} </span>
        <span>{children}</span>
      </button>
    </>
  );
}
