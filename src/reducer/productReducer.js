import { ACTION_TYPE } from "../utils/constant";
export const productReducer = (productState, action) => {
  const { type, payload } = action;
  const { brandFilter, sizeFilter, genderFilter } = productState;
  switch (type) {
    case ACTION_TYPE.INITIAL_DATA:
      return { ...productState, products: payload.products };

    case ACTION_TYPE.BRAND_FILTER:
      return {
        ...productState,
        brandFilter: brandFilter.includes(payload.brand)
          ? brandFilter.filter((brand) => brand !== payload.brand)
          : [...brandFilter, payload.brand],
      };

    case ACTION_TYPE.GENDER_FILTER:
      return {
        ...productState,
        genderFilter: genderFilter.includes(payload.gender)
          ? genderFilter.filter((gender) => gender !== payload.gender)
          : [...genderFilter, payload.gender],
      };

    case ACTION_TYPE.SIZE_FILTER:
      return {
        ...productState,
        sizeFilter: sizeFilter.includes(payload.size)
          ? sizeFilter.filter((size) => size !== payload.size)
          : [...sizeFilter, payload.size],
      };

    case ACTION_TYPE.SORT_BY:
      return { ...productState, sortBy: payload.sortType };

    case ACTION_TYPE.CLEAR_ALL:
      return {
        ...productState,
        brandFilter: [],
        sizeFilter: [],
        genderFilter: [],
        sortBy: null,
      };
    default:
      return productState;
  }
};
