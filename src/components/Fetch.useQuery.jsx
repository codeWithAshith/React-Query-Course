import React from "react";
import axiosClient from "../http";
import { useQuery, useQueryClient } from "react-query";

const FetchUseQuery = () => {
  const queryClient = useQueryClient();

  const fetchTodos = async () => {
    return await axiosClient.get("/todos/1");
  };

  // "todos" -> ["todos"]
  // "todos/1" -> ["todos", todo.id]

  const { isLoading, data, isError } = useQuery({
    queryKey: ["todos", 1],
    queryFn: fetchTodos,
    // enabled: true, // run based on condition
    // staleTime: 1000, // stale after 1 se
    // refetchInterval: 1000, // refresh data every one second
  });

  console.log(data);

  if (isLoading) return <p>Loading</p>;

  if (isError) return <p>Error</p>;

  return (
    <div>
      <p>{data.data.title}</p>
    </div>
  );
};

export default FetchUseQuery;
