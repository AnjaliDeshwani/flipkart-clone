import { ACTION_TYPE } from "./constant";
export const sortByPrice = (products, sortBy) =>
  sortBy === ACTION_TYPE.HIGH_TO_LOW
    ? products.sort((a, b) => b.discountedPrice - a.discountedPrice)
    : products.sort((a, b) => a.discountedPrice - b.discountedPrice);
