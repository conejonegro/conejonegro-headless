import client from "@/apollo-client"
import { gql } from '@apollo/client';
import { SanitizeHTML } from "@/utils/sanitizeHTML/SanitizeHTML";

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
        <SanitizeHTML tag="h1" cleanHtml={data.pageBy.content} />
     </div>
   );
 }