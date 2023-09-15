import { createContext, useEffect, useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "light":
      return {
        ...state,
        theme: {
          color: "midnightblue",
          background: "white",
        },
      };
    case "dark":
      return {
        ...state,
        theme: {
          color: "white",
          background: "midnightblue",
        },
      };
    case "consultarAPI":
      return { ...state, data: action.payload };
    default:
      return state;
  }
}

export const initialState = {
  theme: { color: "midnightblue", background: "white" },
  data: [],
};

export const ContextGlobal = createContext(undefined);

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        dispatch({ type: "consultarAPI", payload: data });
      })
      .catch((error) => {
        console.error("Error al obtener la información.", error);
      });
  }, []);

  function handleLightTheme() {
    dispatch({ type: "light" });
  }
  function handleDarkTheme() {
    dispatch({ type: "dark" });
  }

  return (
    <ContextGlobal.Provider
      value={{
        handleDarkTheme,
        handleLightTheme,
        data: state.data,
        theme: state.theme,
      }}
    >
      {children}
    </ContextGlobal.Provider>
  );
};
