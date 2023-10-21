import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "./__generated__/schema.graphql",
  documents: ["src/**/*.ts"],
  generates: {
    "./__generated__/frontend/": {
      preset: "client",
      plugins: [
        {
          add: {
            content: "// @ts-nocheck",
          },
        },
        "typescript",
      ],
      presetConfig: {
        gqlTagName: "gql",
      },
    },
  },
};

export default config;
