import React, {
  createContext,
  useMemo,
  useReducer,
  useEffect,
  useState,
} from "react";

export const initialState = { theme: "", data: [] };

const reducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_THEME":
      return {
        ...state,
        theme: action.payload,
      };
    case "SET_DATA":
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};

export const ContextGlobal = createContext(undefined);

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        dispatch({ type: "SET_DATA", payload: data });
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  const changeTheme = (newTheme) => {
    dispatch({ type: "CHANGE_THEME", payload: newTheme });
  };

  const contextValue = useMemo(
    () => ({ state, loading, changeTheme }),
    [state, loading]
  );

  return (
    <ContextGlobal.Provider value={contextValue}>
      {children}
    </ContextGlobal.Provider>
  );
};
