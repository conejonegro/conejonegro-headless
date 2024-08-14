import client from "@/apollo-client"
import { gql } from '@apollo/client';
import {SanitizeHTML}  from "@/utils/sanitizeHTML/SanitizeHTML";

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

 // const cleanestHTML = SanitizeHTML(data.pageBy.content)
 console.log("my content", data.pageBy.content)

   return (
     <div className="contaier mx-auto max-w-7xl px-4">
        <SanitizeHTML tag="div" className="whitespace-normal" cleanHtml={data.pageBy.content} />
       { /*<div dangerouslySetInnerHTML={{__html: data.pageBy.content}} />*/}
     </div>
   );
 }