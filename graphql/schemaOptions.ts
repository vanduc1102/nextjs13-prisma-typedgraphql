import { BuildSchemaOptions } from "type-graphql";
import {
  PostCrudResolver,
  PostRelationsResolver,
  TagCrudResolver,
  TagRelationsResolver,
  UserCrudResolver,
  UserRelationsResolver,
} from "../__generated__/backend/type-graphql";

const schemaOptions: BuildSchemaOptions = {
  resolvers: [
    PostCrudResolver,
    PostRelationsResolver,
    TagCrudResolver,
    TagRelationsResolver,
    UserCrudResolver,
    UserRelationsResolver,
  ],
  validate: false,
};

export default schemaOptions;
