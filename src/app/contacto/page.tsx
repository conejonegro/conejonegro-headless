import client from "@/apollo-client";
import { gql } from "@apollo/client";
import  contactoApiCall  from "@/graphql/contactoApiCall";

export default async function Contacto(){

   const data =  await contactoApiCall()

   return(
      <section>
         <h1>{data.pageBy.title}</h1>
         <h1>{data.pageBy.content}</h1>
        
      </section>
   )
}