import React, { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react";

interface StoreText{
  burgers: [boolean, Dispatch<SetStateAction<boolean>>]
}

export const StoreContext = createContext<null | StoreText>(null);

export const StoreProvider = ({children}: any) => {

  const [burgersItem, setBurgersItem] = useState(false);

  const store:StoreText = {
    burgers: [burgersItem, setBurgersItem],
  };

  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  )
}