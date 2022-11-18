import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

const DepthContext = createContext();

export function DepthProvider({ children }) {
  const [selected, setSelected] = useState(
    JSON.parse(localStorage.getItem("selected")) || {
      id: null,
      selectedTagTitles: [],
    }
  );

  useEffect(() => {
    localStorage.setItem("selected", JSON.stringify(selected));
  }, [selected]);

  return (
    <DepthContext.Provider value={{ selected, setSelected }}>
      {children}
    </DepthContext.Provider>
  );
}

export default DepthContext;
