import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";

// *Redux Action Imports*
import { STORE_PRODUCTS_SEARCHED } from "../redux/globalSlice";

// *URL Imports*
import { LOCAL_URL, AWS_EBS_URL } from "../constants";

const SearchSword = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Query a search by input and GETs the swords.
  const searchProduct = async (val) => {
    // Checks both URLs to see if they have a response.
    const requests = [
      axios({
        method: "GET",
        url: `${AWS_EBS_URL}/api/swords/search?name=${val}`,
      }),
      axios({
        method: "GET",
        url: `${LOCAL_URL}/api/swords/search?name=${val}`,
      }),
    ];
    let success = false;
    try {
      const res = await Promise.any(requests);
      if (res && res.status === 200) {
        dispatch(STORE_PRODUCTS_SEARCHED(res.data));
        navigate("/home/search");
        success = true;
      }
      console.log(res);
    } catch (error) {
      console.error(error);
      navigate("/error500");
    }
    if (success) {
      console.warn(
        "One server was unable to get the data from the search, but was able to find a working server."
      );
    }
  };

  return searchProduct;
};

export default SearchSword;
