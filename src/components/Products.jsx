import React from "react";
import Input from "./Input";
import ProductsList from "./ProductsList";

function Products() {
  const store = [
    { title: "Macbook", category: "laptop", price: 10 },
    { title: "iPhone 12", category: "mobile", price: 15 },
    { title: "Bhindi", category: "vegetable", price: 12 },
    { title: "hp Victus", category: "gaming laptop", price: 5 },
    { title: "Samsung s20+", category: "mobile", price: 9 },
  ];

  const [query, setQuery] = React.useState("");
  const [sort, setSort] = React.useState("default");

  const data = store.filter((item) => {
    const lowerCaseTitle = item.title.toLocaleLowerCase();
    const lowerCaseQuery = query.toLocaleLowerCase();

    return lowerCaseTitle.indexOf(lowerCaseQuery) != -1;
  });

  const handleQueryChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSortChange = (event) => {
    console.log("sorting by", event.target.value);
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
    <div className="bg-gray-400 p-5 h-screen w-screen items-center flex flex-col">
      <div className="flex gap-5">
        <Input
          value={query}
          onChange={handleQueryChange}
          placeholder="search"
        />
        <select
          className="h-10 p-2 items-baseline border border-gray-500 rounded-md"
          value={sort}
          onChange={handleSortChange}
        >
          <option value="default">default sort</option>
          <option value="name">sort by name</option>
          <option value="price">sort by price</option>
        </select>
      </div>
      <ProductsList products={data} />
    </div>
  );
}

export default Products;
