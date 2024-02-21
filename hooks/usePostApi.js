// create a hook to post data to an API
import { useState } from "react";

export default function usePostApi(url) {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  const postData = async (data) => {
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const data = await response.json();
      setData(data);
    } catch (error) {
      setError(error);
    }
  };

  return { data, error, postData };
}
