import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

const SelectedTagsContext = createContext();

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
    <SelectedTagsProvider.Provider value={{ selected, setSelected }}>
      {children}
    </SelectedTagsProvider.Provider>
  );
}

export default SelectedTagsContext;
