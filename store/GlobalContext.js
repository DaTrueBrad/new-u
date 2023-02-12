import { createContext, useReducer } from "react";

const initialState = {
  firstName: "",
  email: "",
  username: "",
  userId: "",
  token: "",
  isAuthenticated: false
}
const GlobalContext = createContext(initialState)


const GlobalContextProvider = (props) => {

  const reducer = (state, action) => {
    switch(action.type) {
      default:
        return state
    }
  }
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <GlobalContext.Provider value={{state, dispatch}}>
      {props.children}
    </GlobalContext.Provider>
  )
}

export {GlobalContextProvider}
export default GlobalContext