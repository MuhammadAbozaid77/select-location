import { createContext, useReducer } from "react";
const FAKE_USER = {
  name: "Muhammad Abozaid",
  email: "zidanam6@gmail.com",
  password: "123456789",
  avatar: "https://i.pravatar.cc/100?u=zz",
};

const initialState = {
  isLoading: false,
  error: false,
  user: null,
  isAuthenticated: false,
};
function reducer(state, action) {
  switch (action.type) {
    case "login":
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload,
      };
    case "logout":
      return {
        ...state,
        isAuthenticated: false,
        user: null,
      };
    default:
      throw new Error("Unknown Action");
  }
}
//
export const AuthContext = createContext(0);
export default function AuthContextProvider({ children }) {
  const [{ isLoading, error, user, isAuthenticated }, disPatch] = useReducer(
    reducer,
    initialState
  );

  function handelLogin(email, password) {
    if (email === FAKE_USER.email && password === FAKE_USER.password) {
      disPatch({ type: "login", payload: FAKE_USER });
    }
  }

  function handelLogOut() {
    disPatch({ type: "logout" });
  }

  //
  return (
    <AuthContext.Provider
      value={{
        handelLogin,
        handelLogOut,
        isLoading,
        error,
        user,
        isAuthenticated,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

/*
CHALLENGE

1) Add `AuthProvider` to `App.jsx`
2) In the `Login.jsx` page, call `login()` from context
3) Inside an effect, check whether `isAuthenticated === true`. If so, programatically navigate to `/app`
4) In `User.js`, read and display logged in user from context (`user` object). Then include this component in `AppLayout.js`
5) Handle logout button by calling `logout()` and navigating back to `/`
*/
