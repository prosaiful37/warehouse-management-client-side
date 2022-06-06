import { useEffect, useState } from "react";

const useInventoryDetails = (inventoryId) => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const url = `https://nameless-river-31040.herokuapp.com/product/${inventoryId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [inventoryId]);

  return [product, setProduct];
};

export default useInventoryDetails;
