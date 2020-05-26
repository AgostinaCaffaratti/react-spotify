import React, { useState, useMemo } from "react";

const FetchContext = React.createContext();

export function FetchProvider(props) {
  const [datos, setDatos] = useState("");

  const handleChange = (e) => {
    setDatos(e.target.value);
    console.log(datos);
  };

  const value = useMemo(() => {
    return {
      datos,
      handleChange,
    };
  }, [datos]);

  return <FetchContext.Provider value={value} {...props} />;
}

export function useFetch() {
  const context = React.useContext(FetchContext);
  if (!context) {
    throw Error("useFetch debe estar dentro del proveedor FetchContext");
  }
  return context;
}
