import type { NextApiRequest, NextApiResponse } from "next";

type InfoData = {
  time: string;
  appEnv: string;
  appName: string;
  buildId: string;
  commitSha: string;
};

const {
  APP_NAME = "MY APP",
  APP_ENV = "local",
  COMMIT_SHA = "",
  BUILD_ID = "",
} = process.env;

export default function handler(
  _req: NextApiRequest,
  res: NextApiResponse<InfoData>,
) {
  res.status(200).json({
    time: new Date().toISOString(),
    appEnv: APP_ENV,
    appName: APP_NAME,
    buildId: BUILD_ID,
    commitSha: COMMIT_SHA,
  });
}
