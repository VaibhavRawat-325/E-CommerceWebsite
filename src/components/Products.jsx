import React, { useEffect } from "react";
import Input from "./Input";
import NoMatching from "./NoMatching";
import ProductsList from "./ProductsList";
import { getProductList } from "./Api";
import Loading from "./Loading";

function Products() {
  const [productsList, setProductsList] = React.useState([]);

  const [query, setQuery] = React.useState("");
  const [sort, setSort] = React.useState("default");

  useEffect(() => {
    const promise = getProductList();
    promise.then((response) => {
      setProductsList(response);
    });
  }, []);

  const data = productsList.filter((item) => {
    const lowerCaseTitle = item.title.toLocaleLowerCase();
    const lowerCaseQuery = query.toLocaleLowerCase();

    return lowerCaseTitle.indexOf(lowerCaseQuery) != -1;
  });

  const handleQueryChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSortChange = (event) => {
    setSort(event.target.value);
  };

  if (sort == "price") {
    data.sort((x, y) => {
      return x.price - y.price;
    });
  } else if (sort == "name") {
    data.sort((x, y) => {
      return x.title.toLocaleLowerCase() < y.title.toLocaleLowerCase() ? -1 : 1;
    });
  }

  return (
    <div className="bg-gray-200 max-w-6xl mx-auto mt-12 pb-8">
      <div className="px-20 py-24 bg-white mx-5 my-7">
        <div className="flex gap-5 items-baseline justify-between">
          <Input
            value={query}
            onChange={handleQueryChange}
            placeholder="search"
          />
          <select
            className="p-2 border border-gray-300 rounded-md"
            value={sort}
            onChange={handleSortChange}
          >
            <option value="default">default sort</option>
            <option value="name">sort by name</option>
            <option value="price">sort by price</option>
          </select>
        </div>
        <div>
          {data.length > 0 ? <ProductsList products={data} /> : <Loading />}
        </div>
        {data.length == 0 && <NoMatching>No matching found</NoMatching>}
        {data.length <= 1 && (
          <NoMatching>Try some other words to see more results</NoMatching>
        )}
      </div>
    </div>
  );
}

export default Products;
