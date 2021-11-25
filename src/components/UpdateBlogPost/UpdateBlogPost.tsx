import { useMutation, useQueryClient } from "react-query";

import { updatePost } from "../../api/blogPost";
import { useState } from "react";

export const UpdateBlogPost = () => {
  const queryClient = useQueryClient();
  const [name, setName] = useState("");
  const mutation = useMutation("updatePost", updatePost, {
    onSuccess: () => {
      queryClient.invalidateQueries("post");
    },
  });

  return (
    <div>
      {mutation.isLoading ? <div>Updating name...</div> : null}
      {mutation.isSuccess ? <div>Name Updated!</div> : null}
      Name:{" "}
      <input type="text" onChange={(event) => setName(event.target.value)} />
      <button
        onClick={() => {
          mutation.mutate({ name });
        }}
      >
        Update
      </button>
    </div>
  );
};
