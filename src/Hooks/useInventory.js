import { useEffect, useState } from "react";
const useInentory = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://nameless-river-31040.herokuapp.com/product")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return [products, setProducts];
};

export default useInentory;
