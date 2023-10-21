import * as TypeGraphQL from "type-graphql";

import { Post } from "../../__generated__/backend/type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import prisma from "../../clients/prisma";
import { CustomizedType1Input } from "../inputs/CustomizedType1Input";
import { CustomizedType2Input } from "../inputs/CustomizedType2Input";
import { CustomizedType3Input } from "../inputs/CustomizedType3Input";
import { CustomizedType4Input } from "../inputs/CustomizedType4Input";

@TypeGraphQL.Resolver((_of) => Post)
export class CustomizedResolver {
  @TypeGraphQL.Mutation((_returns) => Post, {
    nullable: true,
  })
  async customized1(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Arg("input") input: CustomizedType1Input,
  ): Promise<Post | null> {
    return prisma.post.findFirst();
  }

  @TypeGraphQL.Mutation((_returns) => Post, {
    nullable: true,
  })
  async customized2(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Arg("input") input: CustomizedType2Input,
  ): Promise<Post | null> {
    return prisma.post.findFirst();
  }

  @TypeGraphQL.Mutation((_returns) => Post, {
    nullable: true,
  })
  async customized3(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Arg("input") input: CustomizedType3Input,
  ): Promise<Post | null> {
    return prisma.post.findFirst();
  }

  @TypeGraphQL.Mutation((_returns) => Post, {
    nullable: true,
  })
  async customized4(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Arg("input") input: CustomizedType4Input,
  ): Promise<Post | null> {
    return prisma.post.findFirst();
  }
}
