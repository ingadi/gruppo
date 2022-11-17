import { useState } from "react";
import { createContext } from "react";

const DepthContext = createContext();

export function DepthProvider({ children }) {
  const [depth, setDepth] = useState([]);
  return (
    <DepthContext.Provider value={{ depth, setDepth }}>
      {children}
    </DepthContext.Provider>
  );
}

export default DepthContext;
