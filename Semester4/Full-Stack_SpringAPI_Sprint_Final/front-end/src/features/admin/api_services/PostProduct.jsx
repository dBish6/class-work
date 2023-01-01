import { useNavigate } from "react-router-dom";
import axios from "axios";

// *URL Imports*
import { LOCAL_URL, AWS_EBS_URL } from "../../../constants";

// Adds a new sword to the database.
const PostProduct = () => {
  const navigate = useNavigate();

  const POST = async (
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
        method: "POST",
        url: `${AWS_EBS_URL}/api/sword`,
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
        method: "POST",
        url: `${LOCAL_URL}/api/sword`,
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
      res.status === 200 && navigate("/admin/successfulPost");

      console.log(res);
    } catch (error) {
      console.error(error);
      navigate("/error500");
    }
  };
  return POST;
};

export default PostProduct;
