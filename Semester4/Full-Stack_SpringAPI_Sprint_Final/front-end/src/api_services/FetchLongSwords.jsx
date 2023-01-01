import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { LOCAL_URL, AWS_EBS_URL } from "../constants";

const FetchLongSwords = () => {
  const [longSwords, setLongSwords] = useState([]);
  const [loadingLongSwords, toggleLongSwordsLoading] = useState(false);
  const navigate = useNavigate();

  // Gets all swords with type Long Sword.
  useEffect(() => {
    const fetchProduct = async () => {
      toggleLongSwordsLoading(true);
      // Checks both URLs to see if they have a response.
      const requests = [
        axios({
          method: "GET",
          url: `${AWS_EBS_URL}/api/sword/type/Long Sword`,
        }),
        axios({
          method: "GET",
          url: `${LOCAL_URL}/api/sword/type/Long Sword`,
        }),
      ];
      let success = false;
      try {
        const res = await Promise.any(requests);
        if (res && res.status === 200) {
          setLongSwords(res.data);
          success = true;
        }
        console.log(res);

        // Gives time for images to load too.
        setTimeout(() => {
          toggleLongSwordsLoading(false);
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
  // console.log(longSwords);

  return [longSwords, loadingLongSwords];
};

export default FetchLongSwords;
