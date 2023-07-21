import React from "react";
import axiosClient from "../http";
import { useMutation, useQueryClient } from "react-query";

const PostUseMutation = () => {
  const queryClient = useQueryClient();

  const postTodo = async (newPost) => {
    return await axiosClient.post("/todos", newPost);
  };

  const { isLoading, mutate, isError } = useMutation({
    mutationKey: ["postTodo"],
    mutationFn: (newPost) => postTodo(newPost),
    onError: (err) => console.log(err),
    onSuccess: (res) => {
      queryClient.invalidateQueries(["todos"], { exact: true }); // TO REFRESH AFTER
      console.log("onSuccess", res);
    },
  });

  if (isLoading) return <p>Loading</p>;

  if (isError) return <p>Error</p>;

  return (
    <div>
      <button
        onClick={() =>
          mutate({
            id: Date.now(),
            title: "... title",
            body: "... body",
            userId: 1,
          })
        }
      >
        Post
      </button>
    </div>
  );
};

export default PostUseMutation;
