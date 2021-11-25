import { Post } from "../types";

const headers: HeadersInit = {
  "Content-Type": "application/json",
};

export const getPost = async (): Promise<Post> => {
  const response = await fetch("/post", {
    method: "GET",
    headers: headers,
  });

  return await response.json();
};

export const updatePost = async (post: Partial<Post>) => {
  const response = await fetch("/post", {
    method: "PATCH",
    headers: headers,
    body: JSON.stringify(post),
  });

  return await response.json();
};
