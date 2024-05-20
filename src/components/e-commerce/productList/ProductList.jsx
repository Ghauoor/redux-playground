import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../../redux/slices/productSlice";
import SingleProduct from "../singleProduct/SingleProduct";
import "./ProductList.css";
import { AiOutlineLoading } from "react-icons/ai";

function ProductList() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.productReducer.products);
  const error = useSelector((state) => state.productReducer.error);

  const status = useSelector((state) => state.productReducer.status);

  console.log(status);
  useEffect(() => {
    dispatch(fetchData());
  }, []);

  if (status === "loading") {
    return <AiOutlineLoading />;
  }

  if (status === "Failed") {
    return <h2>Error...{error}</h2>;
  }

  return (
    <div className="ProductList">
      {products.map((item) => (
        <SingleProduct product={item} key={item.id} />
      ))}
    </div>
  );
}

export default ProductList;
