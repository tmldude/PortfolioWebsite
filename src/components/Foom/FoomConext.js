import React, { useState } from "react";

const FoomContext = React.createContext();

export default FoomContext;

// export function useFoom() {
//     return useContext(FoomContext)
// }

export function FoomProvider({ children }) {
  const [showSearch, setShowSearches] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  function showSearchesTrue() {
    setShowSearches(true);
  }

  function showSearchesFalse() {
    setShowSearches(false);
  }

  function setLoadingTrue() {
    setIsLoading(true);
  }

  function setLoadingFalse() {
    setIsLoading(false);
  }

  const foomContext = {
    isLoading: isLoading,
    showSearches: showSearch,
    updateSearchTrue: showSearchesTrue,
    updateSearchFalse: showSearchesFalse,
    setLoadingTrue: setLoadingTrue,
    setLoadingFalse: setLoadingFalse,
  };

  return (
    <FoomContext.Provider value={foomContext}>{children}</FoomContext.Provider>
  );
}
