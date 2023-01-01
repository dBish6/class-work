import { useNavigate } from "react-router-dom";
import axios from "axios";

// *URL Imports*
import { LOCAL_URL, AWS_EBS_URL } from "../../../constants";

// Replaces sword from the database.
const PutProduct = () => {
  const navigate = useNavigate();

  const PUT = async (
    swordId,
    name,
    type,
    length,
    mass,
    price,
    description,
    imageUrl
  ) => {
    // Checks both URLs to see if they have a response.
    const requests = [
      axios({
        method: "PUT",
        url: `${AWS_EBS_URL}/api/sword/${swordId}`,
        data: {
          name: name,
          type: type,
          length: length,
          mass: mass,
          price: price,
          description: description,
          image_url: imageUrl,
        },
      }),
      axios({
        method: "PUT",
        url: `${LOCAL_URL}/api/sword/${swordId}`,
        data: {
          name: name,
          type: type,
          length: length,
          mass: mass,
          price: price,
          description: description,
          image_url: imageUrl,
        },
      }),
    ];
    try {
      const res = await Promise.any(requests);
      res.status === 200 && navigate("/admin/successfulPut");

      console.log(res);
    } catch (error) {
      console.error(error);
      navigate("/error500");
    }
  };
  return PUT;
};

export default PutProduct;
