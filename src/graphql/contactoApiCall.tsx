import client from "@/apollo-client"
import { gql } from "@apollo/client"

export default async function contactoApiCall(){
   const { data } = await client.query({
      query: gql`
         query GetPosts {
            pageBy(pageId: 10) {
               id
               title
               content
            }
         }
      `
   })
  
   return data
}