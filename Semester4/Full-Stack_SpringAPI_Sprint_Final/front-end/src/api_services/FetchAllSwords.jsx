import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

// *URL Imports*
import { LOCAL_URL, AWS_EBS_URL } from "../constants";

const FetchAllSwords = () => {
  const [products, setProducts] = useState([]);
  const [loadingProduct, toggleProductLoading] = useState(false);
  const navigate = useNavigate();

  // Gets all swords from database - used in ProductCard.jsx.
  useEffect(() => {
    const fetchProduct = async () => {
      toggleProductLoading(true);
      // Checks both URLs to see if they have a response.
      const requests = [
        axios({
          method: "GET",
          url: `${AWS_EBS_URL}/api/swords`,
        }),
        axios({
          method: "GET",
          url: `${LOCAL_URL}/api/swords`,
        }),
      ];
      let success = false;
      try {
        const res = await Promise.any(requests);
        if (res && res.status === 200) {
          setProducts(res.data);
          success = true;
        }
        console.log(res);

        // Gives time for images to load too.
        setTimeout(() => {
          toggleProductLoading(false);
        }, 1000);
      } catch (error) {
        console.error(error);
        navigate("/error500");
      }
      if (success) {
        console.warn(
          "One server was unable to get the data, but was able to find a working server."
        );
      }
    };
    fetchProduct();
  }, [navigate]);
  // console.log(products);

  return [products, loadingProduct];
};

export default FetchAllSwords;
