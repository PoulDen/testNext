import { GET_ONE_LONG_TAIL } from "../query/TailQuery";
import client from "./../apollo-client";
import path from "path";
import fs from "fs";

export const getPost = async (tail) => {
  const { data } = await client.query({
    query: GET_ONE_LONG_TAIL,
    variables: {
      tail,
    },
  });
  const fileToRead = path.join(process.cwd(), "data.json");
  const fileData = JSON.parse(await fs.readFileSync(fileToRead));
  return fileData.find(
    ({ id }) => id === data.long_tails_aggregate.nodes[0].json_id
  );
};
