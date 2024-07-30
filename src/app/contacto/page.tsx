import client from "@/apollo-client"
import { gql } from "@apollo/client"

export default async function Contacto(){

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
   
   return(
      <section>
         <h1>{data.pageBy.title}</h1>
        
      </section>
   )
}