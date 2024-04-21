import { ReactNode } from "react";

export interface isLoadingType {
  isLoading: boolean;
  startRequest: () => void;
  finishRequest: () => void;
}

export interface isLoadingProviderProps {
  children: ReactNode;
}
