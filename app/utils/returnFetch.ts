import fetch from "cross-fetch";
import { ApolloClient, InMemoryCache, HttpLink, gql } from "@apollo/client";

const client = new ApolloClient({
  link: new HttpLink({ uri: "https://api.testnets.sismo.io/", fetch }),
  cache: new InMemoryCache(),
});
export type Groupe = {
  id: `0x${string}`;
  name: string;
  latestSnapshot: {
    dataUrl: string;
    size: number;
  };
};
const GET_ALL_GROUPS = gql`
  query getAllGroups {
    groups {
      id
      name
      latestSnapshot {
        dataUrl
        size
      }
    }
  }
`;
async function fetchAllGroups() {
  let formatted;
  try {
    const response = await client.query({
      query: GET_ALL_GROUPS,
    });

    const groups = response.data.groups as Groupe[];
    console.log("Type groups", typeof groups);
    formatted = groups;
  } catch (error) {
    console.error("Error during groupe query:", error);
  }
  return formatted;
}
export const fetching = async () => {
  return fetchAllGroups();
};
