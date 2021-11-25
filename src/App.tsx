import React from "react";

import "./App.css";
import { ShowBlogPost } from "./components/ShowBlogPost";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ShowBlogPost />
    </QueryClientProvider>
  );
}

export default App;
