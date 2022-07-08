import { useProduct } from "../context/product-context";
import { filterBySize, filterByBrand, filterByGender } from "../utils/filter";
import { sortByPrice } from "../utils/sortByPrice";

export const useProductHook = () => {
  const {
    productState: { products, brandFilter, sizeFilter, genderFilter, sortBy },
  } = useProduct();

  let filteredProducts = [...products];

  if (brandFilter.length)
    filteredProducts = filterByBrand(filteredProducts, brandFilter);

  if (sizeFilter.length)
    filteredProducts = filterBySize(filteredProducts, sizeFilter);

  if (genderFilter.length)
    filteredProducts = filterByGender(filteredProducts, genderFilter);

  console.log(sortBy);
  if (sortBy) filteredProducts = sortByPrice(filteredProducts, sortBy);

  return { filteredProducts };
};
