import { useQuery } from "@apollo/client";
import React, { useState } from "react";
import { GET_ALL_POST } from "../../queries/getAllPosts";
import { Post } from "../../../../__generated__/frontend/graphql";

function PostList() {
  const [posts, setPosts] = useState<Post[]>([]);

  const { loading } = useQuery(GET_ALL_POST, {
    onCompleted(data) {
      console.log("data?.posts", data?.posts);
      setPosts((data?.posts || []) as Post[]);
    },
  });

  return (
    <div>
      {loading ? (
        "Loading... "
      ) : (
        <ol>
          {posts.map(({ id, title, content, user }) => (
            <li key={id}>
              <div>{title}</div>
              <p>{content}</p>
              <div>
                User:{" "}
                <strong>
                  {user.name} - {user.email}
                </strong>
              </div>
            </li>
          ))}
        </ol>
      )}
    </div>
  );
}

export default PostList;
