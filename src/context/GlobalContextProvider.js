import React from "react"

export const GlobalStateContext = React.createContext()
export const GlobalDispatchContext = React.createContext()

const initialState = {
  donateOpen: false,
}

function reducer(state, action) {
  switch (action.type) {
    case "TOGGLE_DONATE":
      return {
        ...state,
        donateOpen: !state.donateOpen,
      }
    default:
      throw new Error("Bad action type")
  }
}

const GlobalContextProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState)
  return (
    <GlobalStateContext.Provider value={state}>
      <GlobalDispatchContext.Provider value={dispatch}>
        {children}
      </GlobalDispatchContext.Provider>
    </GlobalStateContext.Provider>
  )
}

export default GlobalContextProvider
