import React from "react";
import { Filters } from "../../components/Filters/Filters";
import { ProductCard } from "./ProductCard";
import { useProductHook } from "../../hook/useProductHook";
import { useProduct } from "../../context/product-context";

export const ProductListing = () => {
  const filteredProducts = useProductHook();
  // const { productState: products } = useProduct();
  // console.log(products);

  return (
    <div className="flex-grow mt-2">
      <div className="grid grid-cols-[250px_minmax(900px,1fr)] gap-5 ">
        <Filters />
        <div className="bg-white">
          <div className="mt-8  p-4 grid grid-cols-[repeat(auto-fill,minmax(230px,1fr))] gap-8">
            {filteredProducts.map((product) => (
              <ProductCard product={product} />
            ))}
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};
