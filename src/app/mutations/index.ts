import { gql } from "../../../__generated__/frontend/gql";

export const CUSTOMIZED1_MUTATION = gql(`
  mutation mutateCustomized1($input: CustomizedType1Input!) {
    customized1 (input: $input){
      id
      title
      content
      createdAt
      updatedAt
    }
  }
`);

export const CUSTOMIZED2_MUTATION = gql(`
  mutation mutateCustomized2($input: CustomizedType2Input!) {
    customized2 (input: $input){
      id
      title
      content
      createdAt
      updatedAt
    }
  }
`);

export const CUSTOMIZED3_MUTATION = gql(`
  mutation mutateCustomized3($input: CustomizedType3Input!) {
    customized3 (input: $input){
      id
      title
      content
      createdAt
      updatedAt
    }
  }
`);

export const CUSTOMIZED4_MUTATION = gql(`
  mutation mutateCustomized4($input: CustomizedType4Input!) {
    customized4 (input: $input){
      id
      title
      content
      createdAt
      updatedAt
    }
  }
`);
