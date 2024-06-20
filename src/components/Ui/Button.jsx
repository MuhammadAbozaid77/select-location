//
export default function Button({ children, onClick, myStyle, icon, type }) {
  return (
    <>
      <button
        type={`${type}`}
        onClick={onClick}
        className={`flex justify-center items-center p-1 border rounded-[5px] text-white  min-w-[100px] duration-150 ${myStyle}`}
      >
        {icon && <span className="mx-2"> {icon} </span>}

        <span className="w-[100%] text-[18px]">{children}</span>
      </button>
    </>
  );
}
