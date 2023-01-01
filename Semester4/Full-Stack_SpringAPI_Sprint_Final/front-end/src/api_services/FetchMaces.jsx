import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { LOCAL_URL, AWS_EBS_URL } from "../constants";

const FetchMaces = () => {
  const [maces, setMaces] = useState([]);
  const [loadingMaces, toggleMacesLoading] = useState(false);
  const navigate = useNavigate();

  // Gets all swords with type Maces.
  useEffect(() => {
    const fetchProduct = async () => {
      toggleMacesLoading(true);
      // Checks both URLs to see if they have a response.
      const requests = [
        axios({
          method: "GET",
          url: `${AWS_EBS_URL}/api/sword/type/Mace`,
        }),
        axios({
          method: "GET",
          url: `${LOCAL_URL}/api/sword/type/Mace`,
        }),
      ];
      let success = false;
      try {
        const res = await Promise.any(requests);
        if (res && res.status === 200) {
          setMaces(res.data);
          success = true;
        }
        console.log(res);

        // Gives time for images to load too.
        setTimeout(() => {
          toggleMacesLoading(false);
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
  // console.log(maces);

  return [maces, loadingMaces];
};

export default FetchMaces;
