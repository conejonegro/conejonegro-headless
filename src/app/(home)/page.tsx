import client from "@/apollo-client"
import { gql } from '@apollo/client';

export const revalidate = 10; 
export default async function Home() {

   const { data } = await client.query({
     query: gql`
         query {
          pageBy(pageId: 12) {
            title
            content
          }
       }
     `,
   });

   return (
     <div>
       <h1> {data.pageBy.content}</h1>
     </div>
   );
 }