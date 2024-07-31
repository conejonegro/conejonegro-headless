import client from "@/apollo-client";
import { gql } from "@apollo/client";
import  contactoApiCall  from "@/graphql/contactoApiCall";

export default async function Contacto(){

   const data =  await contactoApiCall()

   return(
      <section>
         <h1 className="text-3xl font-bold">
            {data.pageBy.title}
         </h1>
         <p>{data.pageBy.content}</p>
        
      </section>
   )
}