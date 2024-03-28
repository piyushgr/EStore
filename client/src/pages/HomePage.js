import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../components/Card";
import { Checkbox } from "antd";

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [checked, setChecked] = useState([]);
  const [minprice, setMinPrice] = useState(0);
  const [maxprice, setMaxPrice] = useState(999999999);
  const getAllProducts = async () => {
    const response = await axios.get(
      `${process.env.REACT_APP_API}/api/v1/product/get-products`
    );
    if (response.data.count) {
      setProducts(response.data.products);
    }
  };
  const getAllCategories = async () => {
    const response = await axios.get(
      `${process.env.REACT_APP_API}/api/v1/category/all-categories`
    );
    if (response.data) {
      setCategories(response.data.categories);
    }
  };
  const handleFilters = (value, id) => {
    let all = [...checked];
    if (value) {
      all.push(id);
    } else {
      all = all.filter((c) => c !== id);
    }
    setChecked(all);
  };
  // get filtered products
  const filterProduct = async () => {
    const { data } = await axios.post(
      `${process.env.REACT_APP_API}/api/v1/product/product-filters`,
      { checked }
    );
    setProducts(data?.products);
  };
  useEffect(() => {
    getAllCategories();
  }, []);
  useEffect(() => {
    if (checked.length === 0) getAllProducts();
  }, [checked]);
  useEffect(() => {
    if (checked.length) {
      filterProduct();
    }
  }, [checked]);

  return (
    <div className="flex flex-wrap justify-center">
      <div className="w-2/12 inline-block border border-red-700 overflow-x-hidden">
        <h2>Filters</h2>
        <h3>Min Price</h3>
        <input
          className="border border-blue-900 w-full"
          type="number"
          name="minprice"
          value={minprice}
          onChange={(e) => {
            setMinPrice(e.target.value);
          }}
        />
        <h3>Max Price</h3>
        <input
          className="border border-blue-900 w-full"
          type="number"
          name="maxprice"
          value={maxprice}
          onChange={(e) => {
            setMaxPrice(e.target.value);
          }}
        />
        <h3>Category:</h3>
        <div className="flex flex-wrap">
          {categories.map((category) => (
            <Checkbox
              key={category._id}
              onChange={(e) => {
                e.preventDefault();
                handleFilters(e.target.checked, category._id);
              }}
            >
              {category.name}
            </Checkbox>
          ))}
        </div>
      </div>
      <div className="flex flex-wrap justify-evenly w-10/12">
        {products.map(
          (product) =>
            product.price >= minprice &&
            product.price <= maxprice && (
              <Card
                imageUrl={`${process.env.REACT_APP_API}/api/v1/product/product-photo/${product._id}`}
                Name={product.name}
                Description={`${product.description.substring(0, 35)}...`}
                readLink={product._id}
                key={product._id}
              ></Card>
            )
        )}
      </div>
    </div>
  );
};
export default HomePage;
