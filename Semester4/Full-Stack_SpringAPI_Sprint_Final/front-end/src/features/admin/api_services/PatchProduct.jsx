import { useNavigate } from "react-router-dom";
import axios from "axios";

// *URL Imports*
import { LOCAL_URL, AWS_EBS_URL } from "../../../constants";

// Edits a new sword from the database.
const PatchProduct = () => {
  const navigate = useNavigate();

  const PATCHname = async (name, sword_id) => {
    // Checks both URLs to see if they have a response.
    const requests = [
      axios({
        method: "PATCH",
        url: `${AWS_EBS_URL}/api/sword/${sword_id}`,
        data: {
          name: name,
        },
      }),
      axios({
        method: "PATCH",
        url: `${LOCAL_URL}/api/sword/${sword_id}`,
        data: {
          name: name,
        },
      }),
    ];
    try {
      const res = await Promise.any(requests);
      res.status === 200 && navigate("/admin/successfulPatch");
      console.log(res);
    } catch (error) {
      console.error(error);
      navigate("/error500");
    }
  };

  const PATCHtype = async (type, sword_id) => {
    const requests = [
      axios({
        method: "PATCH",
        url: `${AWS_EBS_URL}/api/sword/${sword_id}`,
        data: {
          type: type,
        },
      }),
      axios({
        method: "PATCH",
        url: `${LOCAL_URL}/api/sword/${sword_id}`,
        data: {
          type: type,
        },
      }),
    ];
    try {
      const res = await Promise.any(requests);
      res.status === 200 && navigate("/admin/successfulPatch");
      console.log(res);
    } catch (error) {
      console.error(error);
      navigate("/error500");
    }
  };

  const PATCHlength = async (length, sword_id) => {
    const requests = [
      axios({
        method: "PATCH",
        url: `${AWS_EBS_URL}/api/sword/${sword_id}`,
        data: {
          length: length,
        },
      }),
      axios({
        method: "PATCH",
        url: `${LOCAL_URL}/api/sword/${sword_id}`,
        data: {
          length: length,
        },
      }),
    ];
    try {
      const res = await Promise.any(requests);
      res.status === 200 && navigate("/admin/successfulPatch");
      console.log(res);
    } catch (error) {
      console.error(error);
      navigate("/error500");
    }
  };

  const PATCHmass = async (mass, sword_id) => {
    const requests = [
      axios({
        method: "PATCH",
        url: `${AWS_EBS_URL}/api/sword/${sword_id}`,
        data: {
          mass: mass,
        },
      }),
      axios({
        method: "PATCH",
        url: `${LOCAL_URL}/api/sword/${sword_id}`,
        data: {
          mass: mass,
        },
      }),
    ];
    try {
      const res = await Promise.any(requests);
      res.status === 200 && navigate("/admin/successfulPatch");
      console.log(res);
    } catch (error) {
      console.error(error);
      navigate("/error500");
    }
  };

  const PATCHprice = async (price, sword_id) => {
    const requests = [
      axios({
        method: "PATCH",
        url: `${AWS_EBS_URL}/api/sword/${sword_id}`,
        data: {
          price: price,
        },
      }),
      axios({
        method: "PATCH",
        url: `${LOCAL_URL}/api/sword/${sword_id}`,
        data: {
          price: price,
        },
      }),
    ];
    try {
      const res = await Promise.any(requests);
      res.status === 200 && navigate("/admin/successfulPatch");
      console.log(res);
    } catch (error) {
      console.error(error);
      navigate("/error500");
    }
  };

  const PATCHdescription = async (description, sword_id) => {
    const requests = [
      axios({
        method: "PATCH",
        url: `${AWS_EBS_URL}/api/sword/${sword_id}`,
        data: {
          description: description,
        },
      }),
      axios({
        method: "PATCH",
        url: `${LOCAL_URL}/api/sword/${sword_id}`,
        data: {
          description: description,
        },
      }),
    ];
    try {
      const res = await Promise.any(requests);
      res.status === 200 && navigate("/admin/successfulPatch");
      console.log(res);
    } catch (error) {
      console.error(error);
      navigate("/error500");
    }
  };

  const PATCHimageUrl = async (imageUrl, sword_id) => {
    const requests = [
      axios({
        method: "PATCH",
        url: `${AWS_EBS_URL}/api/sword/${sword_id}`,
        data: {
          image_url: imageUrl,
        },
      }),
      axios({
        method: "PATCH",
        url: `${LOCAL_URL}/api/sword/${sword_id}`,
        data: {
          image_url: imageUrl,
        },
      }),
    ];
    try {
      const res = await Promise.any(requests);
      res.status === 200 && navigate("/admin/successfulPatch");
      console.log(res);
    } catch (error) {
      console.error(error);
      navigate("/error500");
    }
  };

  return {
    PATCHname,
    PATCHtype,
    PATCHlength,
    PATCHmass,
    PATCHprice,
    PATCHdescription,
    PATCHimageUrl,
  };
};

export default PatchProduct;
