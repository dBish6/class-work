import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

// *URL Imports*
import { LOCAL_URL, AWS_EBS_URL } from "../../../constants";

const GetUsers = () => {
  const [users, setUsers] = useState([]);
  const [loadingUsers, toggleUsersLoading] = useState(false);
  const navigate = useNavigate();

  // If user session.
  useEffect(() => {
    const fetchUsers = async () => {
      toggleUsersLoading(true);
      // Checks both URLs to see if they have a response.
      const requests = [
        axios({
          method: "GET",
          url: `${AWS_EBS_URL}/api/users`,
        }),
        axios({
          method: "GET",
          url: `${LOCAL_URL}/api/users`,
        }),
      ];
      try {
        const res = await Promise.any(requests);
        if (res && res.status === 200) {
          setUsers(res.data);
        }

        toggleUsersLoading(false);
      } catch (error) {
        console.error(error);
        navigate("/error500");
      }
    };
    fetchUsers();
  }, [navigate]);
  // console.log(users);

  return [users, loadingUsers];
};

export default GetUsers;
