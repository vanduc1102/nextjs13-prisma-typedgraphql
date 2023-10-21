import { BuildSchemaOptions } from "type-graphql";
import {
  PostCrudResolver,
  PostRelationsResolver,
  TagCrudResolver,
  TagRelationsResolver,
  UserCrudResolver,
  UserRelationsResolver,
} from "../__generated__/backend/type-graphql";
import { CustomizedResolver } from "./resolvers/CustomizedResolver";

const schemaOptions: BuildSchemaOptions = {
  resolvers: [
    PostCrudResolver,
    PostRelationsResolver,
    TagCrudResolver,
    TagRelationsResolver,
    UserCrudResolver,
    UserRelationsResolver,
    CustomizedResolver,
  ],
  validate: false,
};

export default schemaOptions;
