import { rest } from "msw";
import { Post } from "../types";

let blogPost: Post = {
  id: 1,
  name: "First post",
  publishedAt: "2000-01-01T10:00:00Z",
};

export const getPost = rest.get("/post", (req, res, context) => {
  return res(context.delay(1000), context.json(blogPost));
});

export const updatePost = rest.patch<Partial<Omit<Post, "id">>>(
  "/post",
  (req, res, context) => {
    const changes = req.body;
    blogPost = { ...blogPost, ...changes };

    return res(context.delay(1000), context.json(blogPost));
  }
);

export const handlers = [getPost, updatePost];
