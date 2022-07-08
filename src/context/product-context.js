import { createContext, useContext, useEffect, useReducer } from "react";
import { productReducer } from "../reducer/productReducer";
import { products } from "../db/products";
import { ACTION_TYPE } from "../utils/constant";

const ProductContext = createContext();

const iniialState = {
  products: [],
  brandFilter: [],
  sizeFilter: [],
  genderFilter: [],
  sortBy: null,
};

const ProductProvider = ({ children }) => {
  const [productState, productDispatch] = useReducer(
    productReducer,
    iniialState
  );

  useEffect(() => {
    productDispatch({
      type: ACTION_TYPE.INITIAL_DATA,
      payload: { products },
    });
  }, []);

  return (
    <ProductContext.Provider value={{ productState, productDispatch }}>
      {children}
    </ProductContext.Provider>
  );
};

const useProduct = () => useContext(ProductContext);

export { ProductProvider, useProduct };
