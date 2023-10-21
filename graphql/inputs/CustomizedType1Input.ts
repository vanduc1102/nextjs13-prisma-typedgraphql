import { Field, InputType } from "type-graphql";

@InputType()
export class CustomizedType1Input {
  @Field()
  field1: number;

  @Field()
  field2: string;

  @Field()
  field3: boolean;
}