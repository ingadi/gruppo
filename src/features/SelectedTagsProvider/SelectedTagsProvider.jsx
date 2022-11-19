import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

export const SelectedTagsContext = createContext();

export function SelectedTagsProvider({ children }) {
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
    <SelectedTagsContext.Provider value={{ selected, setSelected }}>
      {children}
    </SelectedTagsContext.Provider>
  );
}
