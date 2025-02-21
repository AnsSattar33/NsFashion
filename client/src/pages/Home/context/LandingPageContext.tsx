import React, { createContext, useReducer } from "react";
import { reducer } from "./ReducerFunc";

type State = {
  radioButtonSelected: string;
  totalCartValue: number;
  productsQuantity: number[];
  isLoading: boolean;
  cart: any[];
};

type ContextProps = {
  state: State;
  dispatch: React.Dispatch<any>;
};

export const landingPageContext = createContext<ContextProps | undefined>(
  undefined
);

type Props = {
  children: React.ReactNode;
};

const initState: State = {
  radioButtonSelected: "jeans",
  productsQuantity: [],
  totalCartValue: 0,
  isLoading: false,
  cart: [],
};

function LandingPageContextProvider({ children }: Props) {
  const [state, dispatch] = useReducer(reducer, initState);
  return (
    <landingPageContext.Provider value={{ state, dispatch }}>
      {children}
    </landingPageContext.Provider>
  );
}

export default LandingPageContextProvider;
