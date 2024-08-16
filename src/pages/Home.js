import React from "react";
import Products from "../components/Products";

const Home = () => {
  return (
    <div>
      <h2 className="heading">REDUX PROJECT</h2>

      <section>
        <h3>
          <Products />
        </h3>
      </section>
    </div>
  );
};

export default Home;
