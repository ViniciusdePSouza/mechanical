import { createContext, useContext, useState } from "react";
import { isLoadingProviderProps, isLoadingType } from "../@types";

export const isLoadingConfigContext = createContext({} as isLoadingType);

function IsLoadingConfigProvider({ children }: isLoadingProviderProps) {
  const [isLoading, setIsLoading] = useState(false);

  function startRequest() {
    setIsLoading(true);
  }

  function finishRequest() {
    setIsLoading(false);
  }

  return (
    <isLoadingConfigContext.Provider
      value={{ isLoading, startRequest, finishRequest }}
    >
      {children}
    </isLoadingConfigContext.Provider>
  );
}

function useIsLoading() {
  const context = useContext(isLoadingConfigContext);

  return context;
}

export { IsLoadingConfigProvider, useIsLoading };
