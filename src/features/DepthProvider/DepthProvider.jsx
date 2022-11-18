import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

const DepthContext = createContext();

export function DepthProvider({ children }) {
  const [depth, setDepth] = useState(
    JSON.parse(localStorage.getItem("depth")) || []
  );

  useEffect(() => {
    localStorage.setItem("depth", JSON.stringify(depth));
  }, [depth]);

  return (
    <DepthContext.Provider value={{ depth, setDepth }}>
      {children}
    </DepthContext.Provider>
  );
}

export default DepthContext;
