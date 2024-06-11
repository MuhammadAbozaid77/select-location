//
export default function Button({ children, onClick, myStyle }) {
  return (
    <>
      <button
        onClick={onClick}
        className={`p-3 border rounded-[5px] text-white text-[20px]  duration-150 ${myStyle}`}
      >
        {children}
      </button>
    </>
  );
}
