import { buildSchema } from "type-graphql";
import schemaOptions from "./schemaOptions";

const schema = buildSchema(schemaOptions);

export default schema;
