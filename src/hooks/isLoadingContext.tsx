import { ReactNode, createContext, useContext, useState } from "react";

interface isLoadingType {
  isLoading: boolean;
  startRequest: () => void;
  finishRequest: () => void;
}

interface isLoadingProviderProps {
  children: ReactNode;
}

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
