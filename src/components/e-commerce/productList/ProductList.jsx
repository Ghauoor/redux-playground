import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadProducts } from "../../../redux/slices/productSlice";
import SingleProduct from "../singleProduct/SingleProduct";
import "./ProductList.css";

const URL = "https://fakestoreapi.com/products";

function ProductList() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.productReducer.products);
  console.log("products", products);
  async function fetchData() {
    const response = await fetch(URL);
    const data = await response.json();

    dispatch(loadProducts(data));
  }
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="ProductList">
      {products.map((item) => (
        <SingleProduct product={item} />
      ))}
    </div>
  );
}

export default ProductList;
