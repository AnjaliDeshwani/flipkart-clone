export const filterBySize = (products, sizeFilter) => {
  return products.filter((product) =>
    sizeFilter.some((size) => product.size.includes(size))
  );
};

export const filterByBrand = (products, brandFilter) => {
  return products.filter((product) => brandFilter?.includes(product.brandName));
};

export const filterByGender = (products, genderFilter) => {
  return products.filter((product) => genderFilter.includes(product.gender));
};
