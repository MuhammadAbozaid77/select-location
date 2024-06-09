export default function Home() {
  return (
    <>
      <div className="">
        <div className="h-[100vh] backgroundImage flex justify-center items-center">
          <div className="w-[100%] h-[100%]  flex justify-center items-center  shadow-2xl  bg-gray-900/30">
            <div className="md:w-[600px] md:h-[450px] w-auto h-auto md:mx-0 mx-5 bg-white  rounded-[20px] shadow-2xl p-5 border-[10px] border-green-400">
              <h1 className="md:text-[60px] text-[40px] capitalize font-semibold text-gray-600">
                Summer Travel
              </h1>
              <h1 className="md:text-[30px]  text-[20px] capitalize font-bold text-green-500 leading-[10px]">
                select your Loaction
              </h1>
              <p className="mt-8 leading-6 text-[18px] text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consectetur, illo accusamus. Ad saepe fugit necessitatibus
                reprehenderit facere eligendi error consequatur dolore?
                Incidunt, impedit sint! Voluptatem dolorum fugiat hic rerum ut
                nesciunt iure vitae doloribus commodi laboriosam tempora
                officiis modi beatae eveniet, mollitia sit eius asperiores fuga
                suscipit laborum ex ipsam?
              </p>
              <button className="border w-[100%] mt-8 py-[15px] md:text-[30px] text-[20px] bg-green-600 rounded-lg text-white font-bold cursor-pointer shadow-xl hover:bg-green-500 duration-150">
                Explore A City
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
