import { Link } from "react-router-dom";

export default function Login() {
  const handelSubmit = (e) => {
    e.preventDefault();
    console.log("handelSubmit");
  };
  return (
    <>
      {/* <div className="flex justify-center items-center h-[100vh]">
        <form
          onSubmit={handelSubmit}
          className="w-[500px] border p-10 shadow-lg rounded-lg"
        >
          <div className="flex flex-col mb-3">
            <label htmlFor="" className="font-semibold mb-1">
              Email
            </label>
            <input
              type="email"
              name=""
              id=""
              className="border p-2 text-gray-600 text-[18px]"
            />
          </div>
          <div className="flex flex-col mb-3">
            <label htmlFor="" className="font-semibold mb-1">
              Password
            </label>
            <input
              type="password"
              name=""
              id=""
              className="border p-2 text-gray-600 text-[18px]"
            />
          </div>
          <button
            type="submit"
            className="border p-2 bg-blue-500 text-white rounded w-[100%]"
          >
            Submit
          </button>
        </form>
      </div> */}

      <div className="h-[100vh] backgroundImage flex justify-center items-center">
        <div className="w-[100%] h-[100%]  flex justify-center items-center  shadow-2xl  bg-gray-900/30">
          <div className=" md:w-[600px] md:h-[450px] w-auto h-auto md:mx-0 mx-5 bg-white  rounded-[10px] shadow-2xl p-5  border-green-400">
            <form
              onSubmit={handelSubmit}
              className="md:mt-[50px] mt-[20px] md:px-[50px] px-[20px]"
            >
              <div className="flex justify-center  flex-col">
                <label htmlFor=""> Email </label>
                <input
                  type="email"
                  className="border p-3 rounded border-green-500"
                />
              </div>
              <div className="flex justify-center  flex-col">
                <label htmlFor=""> Password </label>
                <input
                  type="password"
                  className="border p-3 rounded border-green-500"
                />
              </div>
              <button
                type="submit"
                className="border w-[100%] mt-8 py-[15px] md:text-[30px] text-[20px] bg-green-600 rounded-lg text-white font-bold cursor-pointer shadow-xl hover:bg-green-500 duration-150"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
