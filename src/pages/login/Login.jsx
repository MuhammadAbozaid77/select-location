import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Ui/Button";
import useAuth from "../../hooks/useAuth";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formError, setFormError] = useState("");

  const { handelLogin, isAuthenticated } = useAuth();

  const handelSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      handelLogin(email, password);
    } else {
      setFormError("Error In Email Or Password");
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/app", { replace: true });
    }
  }, [isAuthenticated, navigate]);

  return (
    <>
      <div className="h-[100vh] backgroundImage flex justify-center items-center">
        <div className="w-[100%] h-[100%]  flex justify-center items-center  shadow-2xl  bg-gray-900/70">
          <div className=" md:w-[600px] md:h-[450px] w-auto h-auto md:mx-0 mx-5 bg-white  rounded-[10px] shadow-2xl p-5  border-green-400">
            <h1 className="text-center md:my-[20px] my-[10px] font-bold text-[30px] text-gray-700">
              Login
            </h1>
            {formError && (
              <div className="text-red-500 flex justify-center items-center">
                {formError}
              </div>
            )}
            <form onSubmit={handelSubmit} className="md:px-[50px] px-[20px]">
              <div className="flex justify-center  flex-col">
                <label htmlFor=""> Email </label>
                <input
                  className="border p-3 rounded border-green-500"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="flex justify-center  flex-col">
                <label htmlFor=""> Password </label>
                <input
                  className="border p-3 rounded border-green-500"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <Button
                myStyle="border w-[100%] mt-5 py-[15px] md:text-[30px] text-[20px] bg-green-600 rounded-lg text-white font-bold cursor-pointer shadow-xl hover:bg-green-500 duration-150"
                type="submit"
              >
                Login
              </Button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
