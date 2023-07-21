import React, { useState } from "react";
import axiosClient from "../http";

const PostUseEffect = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState("");

  const postTodo = async () => {
    try {
      setLoading(true);
      const response = await axiosClient.post("/todos", {
        id: Date.now(),
        title: "... title",
        body: "... body",
        userId: 1,
      });
      setData(response.data);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      setError(err.message);
    }
  };

  if (loading) return <p>Loading</p>;

  if (error) return <p>Error</p>;

  return (
    <div>
      <button onClick={() => postTodo()}>Post</button>
    </div>
  );
};

export default PostUseEffect;
