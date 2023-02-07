import React, { useEffect } from "react";
import Input from "./Input";
import NoMatching from "./NoMatching";
import ProductsList from "./ProductsList";
import { getProductsList } from "./js/Api";
import Loading from "./Loading";
import Button from "./Button";
import { range } from "lodash";

function Products() {
  const [productsList, setProductsList] = React.useState([]);
  const [meta, setMeta] = React.useState({});
  const [query, setQuery] = React.useState("");
  const [sort, setSort] = React.useState("default");
  const [pageNumber, setPageNumber] = React.useState(1);

  useEffect(() => {
    let sortBy;
    let sortType;

    if (sort == "title") {
      sortBy = "title";
    } else if (sort == "low to high") {
      sortBy = "price";
    } else if (sort == "high to low") {
      sortBy = "price";
      sortType = "desc";
    }
    const promise = getProductsList({ sortBy, sortType, query, pageNumber });
    promise.then((body) => {
      const { data, meta } = body;
      setProductsList(data);
      setMeta(meta);
    });
  }, [sort, query, pageNumber]);

  const handleQueryChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSortChange = (event) => {
    setSort(event.target.value);
  };

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
            <option value="title">sort by title</option>
            <option value="low to high">sort by price: low to high</option>
            <option value="high to low">sort by price: high to low</option>
          </select>
        </div>
        <div>
          {productsList.length > 0 ? (
            <ProductsList products={productsList} />
          ) : (
            <Loading />
          )}
        </div>
        {productsList.length == 0 && <NoMatching>No matching found</NoMatching>}
        {productsList.length <= 1 && (
          <NoMatching>Try some other words to see more results</NoMatching>
        )}
      </div>
      {range(1, meta.last_page + 1).map((pageNum) => (
        <Button
          key={pageNum}
          onClick={() => {
            setPageNumber(pageNum);
          }}
        >
          {pageNum}
        </Button>
      ))}
    </div>
  );
}

export default Products;
