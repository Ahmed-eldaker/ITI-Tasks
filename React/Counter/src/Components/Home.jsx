import React, { useState } from "react";
import Filter from "./Filter";
import AddToCart from "./AddToCart";
import Pagination from "./Pagination";

export default function Home(props) {
  const { data, categories, handelAddToCart } = props;

  const [selectedCategory, setSelectedCategory] = useState(0);

  const [currentPage, setCurrentPage] = useState(1);

  const [searchInput, setSearchInput] = useState("");

  const handelSelectCategory = (categoryId) => {
    setSelectedCategory(categoryId);
    setCurrentPage(1);
  };

  const handleSearchChange = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    searchInput(e.target.value);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const pageSize = 2;
  let filteredProducts =
    selectedCategory === 0
      ? data
      : data.filter((p) => p.categoryId === selectedCategory);

  const startProduct = (currentPage - 1) * pageSize;
  let productsToShow = filteredProducts.slice(
    startProduct,
    startProduct + pageSize
  );

  return (
    <>
      <div className=" gap-2 mt-5">
        <input
          name="Search"
          value={searchInput}
          onChange={handleSearchChange}
          type="text"
          className="ms-5 border-2 rounded p-1 outline-none focus:border-slate-500 hover:border-slate-400 "
          placeholder="Search..."
        />
        <div className="flex">
          <div>
            <Filter
              handelSelectCategory={handelSelectCategory}
              selectedCategory={selectedCategory}
              categories={categories}
            />
          </div>
          <div className="flex  w-72">
            <div className="inline-block  py-2">
              <table className=" font-light border-4 rounded shadow text-center ">
                <thead className=" border-b font-medium bg-slate-300 dark:border-neutral-500">
                  <tr>
                    {/* <th className="px-6 py-4">ID</th> */}
                    <th className="px-6 py-4">product</th>
                    <th className="px-6 py-4">Price</th>
                    <th>Cart</th>
                  </tr>
                </thead>
                <tbody>
                  {productsToShow.map((e, index) => (
                    <tr
                      key={index}
                      className="border-b transition duration-300 ease-in-out hover:bg-slate-100"
                    >
                      {/* <td className="whitespace-nowrap px-6 py-4">{e.id}</td> */}
                      <td className="whitespace-nowrap px-6 py-4">{e.name}</td>
                      <td className="whitespace-nowrap px-6 py-4">{e.price}</td>
                      <td className="whitespace-nowrap px-6 py-4">
                        <AddToCart
                          // prod={e} // inCart={e.inCart}
                          data={data}
                          handelAddToCart={handelAddToCart}
                        />
                        {/* data.inCart={e.inCart} */}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <Pagination
                currentPage={currentPage}
                pageSize={pageSize}
                prod
                handlePageChange={handlePageChange}
                itemsLength={filteredProducts.length}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
