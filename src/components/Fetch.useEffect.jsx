import React, { useEffect, useState } from "react";
import axiosClient from "../http";

const FetchUseEffect = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState("");

  const fetchTodos = async () => {
    try {
      setLoading(true);
      const response = await axiosClient.get("/todos");
      setData(response.data);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  if (loading) return <p>Loading</p>;

  if (error) return <p>Error</p>;

  return <div>FetchUseEffect</div>;
};

export default FetchUseEffect;
