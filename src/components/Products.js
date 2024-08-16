import React, { useEffect, useState } from "react";
import { add } from "../store/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../store/productSlice";
import { STATUS } from "../store/productSlice";

const Products = () => {
  const dispatch = useDispatch();
  const { data: Products, status } = useSelector((state) => state.Product);
  //   const [Products, setProducts] = useState();
  useEffect(() => {
    dispatch(fetchProducts());
    // const fetchProducts = async () => {
    //   const response = await fetch("https://fakestoreapi.com/products");
    //   const data = await response.json();
    //   setProducts(data);
    // };
    // fetchProducts();
  }, []);
  const handleadd = (products) => {
    dispatch(add(products));
  };
  if (status == STATUS.LOADING) {
    return <h2>Loading...</h2>;
  }
  if (status == STATUS.ERROR) {
    return <h2>there is an error</h2>;
  }

  return (
    <div className="productsWrapper">
      {Products?.map((products) => (
        <div className="card" key={products.id}>
          <img src={products.image} alt="" />
          <h4>{products.title}</h4>
          <h5>{products.price}</h5>

          <button onClick={() => handleadd(products)} className="btn">
            {" "}
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default Products;
