import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../clients/prisma";

export default async function createContext({
  req,
  res,
}: {
  req: NextApiRequest;
  res: NextApiResponse;
}) {
  return {
    prisma,
  };
}
