import client from "@/apollo-client"
import { gql } from '@apollo/client';

export const revalidate = 10; 
export default async function Home() {

   const { data } = await client.query({
     query: gql`
         query {
          pageBy(pageId: 12) {
            title
          }
       }
     `,
   });

   return (
     <div>
       <h1> {data.pageBy.title}</h1>
     </div>
   );
 }