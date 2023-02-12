import {createStore} from "redux"

const initialState = {
  firstName: "",
  email: "",
  username: "",
  userId: "",
  token: "",
  isAuthenticated: false
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case "LOGIN":
        console.log("DATA: ", action.payload)
        const {token, username, userId, email, firstName} = action.payload
        return {token, username, userId, email, firstName, isAuthenticated: true}
    default:
      return state
  }
}

const store = createStore(reducer)

export default store