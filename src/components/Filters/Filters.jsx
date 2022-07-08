import { useProduct } from "../../context/product-context";
import { ACTION_TYPE } from "../../utils/constant";

const sizeArr = ["S", "M", "L"];
const brandArr = ["FOREVER 21", "Allen Solly", "MAX"];
const gender = ["Women", "Men"];

export const Filters = () => {
  const { productState, productDispatch } = useProduct();
  const { brandFilter, sizeFilter, genderFilter, sortBy } = productState;

  const isBrandChecked = (brand) => brandFilter.includes(brand);

  const isSizeChecked = (size) => sizeFilter.includes(size);

  const isGenderChecked = (gender) => genderFilter.includes(gender);

  const isSortBy = (value) => sortBy === value;

  const sizeHandler = (size) => {
    productDispatch({ type: ACTION_TYPE.SIZE_FILTER, payload: { size } });
  };

  const brandHandler = (brand) => {
    productDispatch({ type: ACTION_TYPE.BRAND_FILTER, payload: { brand } });
  };

  const genderHandler = (gender) => {
    productDispatch({ type: ACTION_TYPE.GENDER_FILTER, payload: { gender } });
  };

  const sortHandler = (sortType) => {
    console.log("filter", sortType);
    productDispatch({ type: ACTION_TYPE.SORT_BY, payload: { sortType } });
  };

  const clearHandler = () => {
    productDispatch({ type: ACTION_TYPE.CLEAR_ALL });
  };

  return (
    <div className="shadow-lg h-screen bg-white">
      <div className="p-2 flex justify-between">
        <h1 className="font-bold text-xl">Filters</h1>
        <button className="font-semibold" onClick={clearHandler}>
          CLEAR ALL
        </button>
      </div>
      <div className="border-b-gray-400 border-[1px]"></div>
      <div>
        <div className="p-2">
          <div className="font-bold">Size</div>
          <div className="flex flex-col gap-1 justify-center">
            {sizeArr.map((size) => (
              <label>
                <input
                  type="checkbox"
                  value={size}
                  checked={isSizeChecked(size)}
                  onChange={() => sizeHandler(size)}
                />
                {size}
              </label>
            ))}
          </div>
        </div>
      </div>
      <div className="border-b-gray-400 border-[1px]"></div>
      <div className="p-2">
        <div className="font-bold">Brand</div>
        <div className="flex flex-col gap-1 justify-center">
          {brandArr.map((brand) => (
            <label>
              <input
                type="checkbox"
                value={brand}
                checked={isBrandChecked(brand)}
                onChange={() => brandHandler(brand)}
              />
              {brand}
            </label>
          ))}
        </div>
      </div>
      <div className="border-b-gray-400 border-[1px]"></div>
      <div className="p-2">
        <div className="font-bold">Gender</div>
        <div className="flex flex-col gap-1 justify-center">
          {gender.map((gender) => (
            <label>
              <input
                type="checkbox"
                value={gender}
                checked={isGenderChecked(gender)}
                onChange={() => genderHandler(gender)}
              />
              {gender}
            </label>
          ))}
        </div>
      </div>
      <div className="border-b-gray-400 border-[1px]"></div>
      <div className="p-2">
        <div className="font-bold">Sort By</div>
        <div className="flex flex-col gap-1 justify-center">
          <label>
            <input
              type="radio"
              name="sort"
              value={ACTION_TYPE.HIGH_TO_LOW}
              checked={isSortBy(ACTION_TYPE.HIGH_TO_LOW)}
              onChange={() => sortHandler(ACTION_TYPE.HIGH_TO_LOW)}
            />
            High To Low
          </label>
          <label>
            <input
              type="radio"
              name="sort"
              value={ACTION_TYPE.LOW_TO_HIGH}
              checked={isSortBy(ACTION_TYPE.LOW_TO_HIGH)}
              onChange={() => sortHandler(ACTION_TYPE.LOW_TO_HIGH)}
            />
            Low To High
          </label>
        </div>
      </div>
    </div>
  );
};
