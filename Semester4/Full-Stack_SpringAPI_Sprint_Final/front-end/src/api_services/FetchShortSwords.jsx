import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { LOCAL_URL, AWS_EBS_URL } from "../constants";

const FetchShortSwords = () => {
  const [shortSwords, setShortSwords] = useState([]);
  const [loadingShortSwords, toggleShortSwordsLoading] = useState(false);
  const navigate = useNavigate();

  // Gets all swords with type Short Swords.
  useEffect(() => {
    const fetchProduct = async () => {
      toggleShortSwordsLoading(true);
      // Checks both URLs to see if they have a response.
      const requests = [
        axios({
          method: "GET",
          url: `${AWS_EBS_URL}/api/sword/type/Short Sword`,
        }),
        axios({
          method: "GET",
          url: `${LOCAL_URL}/api/sword/type/Short Sword`,
        }),
      ];
      let success = false;
      try {
        const res = await Promise.any(requests);
        if (res && res.status === 200) {
          setShortSwords(res.data);
          success = true;
        }
        console.log(res);

        // Gives time for images to load too.
        setTimeout(() => {
          toggleShortSwordsLoading(false);
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
  // console.log(shortSwords);

  return [shortSwords, loadingShortSwords];
};

export default FetchShortSwords;
