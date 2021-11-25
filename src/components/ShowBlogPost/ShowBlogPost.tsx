import Skeleton from "react-loading-skeleton";
import { useQuery } from "react-query";

import { getPost } from "../../api/blogPost";
import { UpdateBlogPost } from "../UpdateBlogPost";

export const ShowBlogPost = () => {
  const { data, isLoading } = useQuery("post", getPost);

  if (isLoading) {
    return (
      <div style={{ height: 500, width: 500 }}>
        <Skeleton height="2rem" />
        <br />
        <Skeleton count={2} />
      </div>
    );
  }
  return (
    <div>
      <h1>{data?.name}</h1>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div>Id: {data?.id}</div>
        <div>Published at: {data?.publishedAt}</div>
      </div>
      <hr />
      <UpdateBlogPost />
    </div>
  );
};
