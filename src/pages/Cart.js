import { Link } from "react-router-dom";

export const Cart = () => {
  return (
    <>
      {/* code text 0003, contoh cara pembuatan navigate with link component  */}
      <Link to={"/product"}>go to product detail</Link>
      <h4>Cart</h4>
      <hr />
    </>
  );
};
