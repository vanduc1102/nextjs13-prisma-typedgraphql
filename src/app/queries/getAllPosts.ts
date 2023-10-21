import { gql } from "@apollo/client";

export const GET_ALL_POST = gql`
  query getAllPost {
    posts {
      id
      title
      content
      createdAt
      updatedAt
      user {
        id
        name
        email
      }
    }
  }
`;
