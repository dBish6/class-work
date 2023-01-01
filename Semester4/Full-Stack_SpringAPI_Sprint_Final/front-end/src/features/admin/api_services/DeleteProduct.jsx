import { useNavigate } from "react-router-dom";
import axios from "axios";

// *URL Imports*
import { LOCAL_URL, AWS_EBS_URL } from "../../../constants";

// Removes a sword from the database.
const DeleteProduct = () => {
  const navigate = useNavigate();

  const DELETE = async (sword_id) => {
    const requests = [
      axios({
        method: "DELETE",
        url: `${AWS_EBS_URL}/api/sword/${sword_id}`,
      }),
      axios({
        method: "DELETE",
        url: `${LOCAL_URL}/api/sword/${sword_id}`,
      }),
    ];
    try {
      const res = await Promise.any(requests);
      res.status === 200 && navigate("/admin/successfulDelete");
      console.log(res);
    } catch (error) {
      console.error(error);
      navigate("/error500");
    }
  };
  return DELETE;
};

export default DeleteProduct;
