import client from "@/apollo-client";
import { gql } from "@apollo/client";

export default async function navItemsApiCall() {
  const { data } = await client.query({
    query: gql`
      query {
        menus {
          nodes {
            menuItems {
              edges {
                node {
                  id
                  label
                  uri
                }
              }
            }
          }
        }
      }
    `,
  });

  return data;
}
