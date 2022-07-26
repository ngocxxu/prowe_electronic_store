/* eslint-disable import/no-anonymous-default-export */
import { createContext } from "react";

export const StoreContext = createContext(null);

export const StoreProvider = ({children}) => {

  // const [burgersItem, setBurgersItem] = useState(false);

  const store = {
    // burgers: [burgersItem, setBurgersItem],
  };

  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  )
}