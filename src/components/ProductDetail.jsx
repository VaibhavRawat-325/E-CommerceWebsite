import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProduct } from "./Api";
import { Link } from "react-router-dom";

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
    <>
      {product && (
        <div className="bg-blue-400 p-2 flex flex-col gap-3">
          <div className="flex gap-2">
            <img src={product.thumbnail}></img>
            <div>
              <div>categories: {product.category}</div>
              <div>details of the {product.title}</div>
              <p>description: {product.description}</p>
              <div>${product.price}</div>
            </div>
          </div>
          <div className="gap-2 flex">
            <Link to={"/products/" + (id - 1) + "/details"}>previous</Link>
            <Link to={"/products/" + (id + 1) + "/details"}>next</Link>
          </div>
        </div>
      )}
    </>
  );
}

export default ProductDetail;
