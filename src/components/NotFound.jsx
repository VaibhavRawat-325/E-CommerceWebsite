import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import NotFoundImage from "./not-found.jpeg";

function NotFound() {
  return (
    <div className="flex items-end justify-center">
      <img className="h-screen mx-auto" src={NotFoundImage} />
      <div className="absolute z-10 mb-24">
        <Link to="/products">
          <Button>go back to shop</Button>
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
