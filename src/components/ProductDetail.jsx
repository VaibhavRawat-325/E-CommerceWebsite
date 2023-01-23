import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProduct } from "./Api";
import { Link } from "react-router-dom";
import Button from "./Button";
import Loading from "./Loading";
import { CartContext } from "./Context";
import WithProvider from "./helpers/WithProvider";

function ProductDetail({ handleAddToCart }) {
  const id = +useParams().id;

  const [product, setProduct] = React.useState();
  const [count, setCount] = React.useState(1);

  useEffect(() => {
    const promise = getProduct(id);
    promise.then((response) => {
      setProduct(response);
    });
    setCount(1);
  }, [id]);

  const handleChange = (event) => {
    setCount(+event.target.value);
  };

  const handleButtonClick = () => {
    handleAddToCart(id, count);
  };

  return (
    <div className="bg-gray-200 flex max-w-6xl mx-auto">
      <div className="px-20 py-24 bg-white mx-5 my-16 grow">
        {product ? (
          <div>
            <div className="flex gap-10">
              <div className="max-w-xl h-64 w-64">
                <img
                  className="h-full w-full object-cover"
                  src={product.thumbnail}
                />
              </div>
              <div>
                <div>
                  <div className="text-gray-600 text-xl">
                    Category:
                    <span className="text-orange-500 ml-1">
                      {product.category}
                    </span>
                  </div>
                  <h1 className="text-gray-800 text-4xl pt-5">
                    {product.title}
                  </h1>
                  <h1 className="text-gray-800 text-2xl pt-5">
                    ${product.price}
                  </h1>
                  <p className="text-gray-800 text-xl pt-3">
                    {product.description}
                  </p>
                </div>
                <div className="flex gap-5 pt-5 items-center">
                  <input
                    type="number"
                    value={count}
                    onChange={handleChange}
                    className="border border-gray-800 w-12 h-8 p-1 rounded-sm"
                  />
                  <Button onClick={handleButtonClick}>Add to Cart</Button>
                </div>
              </div>
            </div>
            <div className="pt-10 underline text-gray-700 flex justify-between">
              {id > 1 && (
                <div>
                  <Link to={"/products/" + (id - 1) + "/details"}>
                    previous
                  </Link>
                </div>
              )}
              <div>
                <Link to={"/products/" + (id + 1) + "/details"}>next</Link>
              </div>
            </div>
          </div>
        ) : (
          <Loading />
        )}
      </div>
    </div>
  );
}

export default WithProvider(CartContext)(ProductDetail);
