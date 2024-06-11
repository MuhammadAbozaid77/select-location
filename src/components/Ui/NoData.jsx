export default function NoData({ message }) {
  return (
    <>
      <div className=" mt-[50px]  flex justify-center items-center">
        <div className="w-[80%] text-[25px] text-white text-center">
          😉 {message}
        </div>
      </div>
    </>
  );
}
