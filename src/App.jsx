import React from "react";
import FetchUseEffect from "./components/Fetch.useEffect";
import PostUseEffect from "./components/Post.useEffect";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import FetchUseQuery from "./components/Fetch.useQuery";
import PostUseMutation from "./components/Post.useMutation";

const client = new QueryClient({
  defaultOptions: { queries: { staleTime: 1000 * 60 * 5 } },
});

const App = () => {
  return (
    <QueryClientProvider client={client}>
      <div>
        <h1>Fetch - Use Effect</h1>
        <FetchUseEffect />
        <hr />
        <h1>Post - Use Effect</h1>
        <PostUseEffect />
        <hr />
        <h1>Fetch - Use Query</h1>
        <FetchUseQuery />
        <hr />
        <h1>Post - Use Mutation</h1>
        <PostUseMutation />
        <hr />
      </div>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default App;
