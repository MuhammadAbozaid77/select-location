export default function Login() {
  const handelSubmit = (e) => {
    e.preventDefault();
    console.log("handelSubmit");
  };
  return (
    <>
      <div className="flex justify-center items-center h-[100vh]">
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
      </div>
    </>
  );
}
