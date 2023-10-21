import { useQuery } from "@apollo/client";
import React from "react";
import { GET_ALL_POST } from "../../queries/getAllPosts";

function PostList() {
  useQuery(GET_ALL_POST, {
    onCompleted(data) {
      console.log(data);
    },
  });
  return <div>PostList</div>;
}

export default PostList;
