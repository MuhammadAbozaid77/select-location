export default function CountryCard({ item }) {
  console.log(item);
  return (
    <>
      <div className="border border-[#24998f] h-[70px] rounded-[5px] flex shadow-lg items-center justify-center  p-3  bg-black/50 text-white">
        <div className=" text-white">{item.country}</div>
        <div className=" text-yellow-500  text-[18px] mx-2">[{item.emoji}]</div>
      </div>
    </>
  );
}
