// Link: react style of "a href"
import { Link } from "react-router-dom";

export default function ProductsPage() {
  return (
    <>
      <h1>Products Page!</h1>

      <p>
        Go to <Link to="/">Home</Link>
      </p>
    </>
  );
}
