import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProduct } from "./Api";
import { Link } from "react-router-dom";
import Button from "./Button";

function ProductDetail() {
  const id = +useParams().id;

  const [product, setProduct] = React.useState();

  useEffect(() => {
    const promise = getProduct(id);
    promise.then((response) => {
      setProduct(response);
    });
  }, [id]);

  return (
    <div className="bg-gray-200 flex max-w-6xl mx-auto">
      {product && (
        <div className="px-20 py-24 bg-white mx-5 my-7">
          <div className="flex gap-10">
            <div className="max-w-xl aspect-square">
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
                <h1 className="text-gray-800 text-4xl pt-5">{product.title}</h1>
                <h1 className="text-gray-800 text-2xl pt-5">
                  ${product.price}
                </h1>
                <p className="text-gray-800 text-xl pt-3">
                  {product.description}
                </p>
              </div>
              <div className="flex gap-5 pt-5 items-center">
                <input className="border border-gray-800 w-12 h-8 p-2 rounded-sm" />
                <Button>Add to Cart</Button>
              </div>
            </div>
          </div>
          <div className="gap-2 flex">
            {id > 1 && (
              <Link to={"/products/" + (id - 1) + "/details"}>previous</Link>
            )}
            <Link to={"/products/" + (id + 1) + "/details"}>next</Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductDetail;
