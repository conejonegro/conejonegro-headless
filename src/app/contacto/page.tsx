import  contactoApiCall  from "@/graphql/contactoApiCall";
import { SanitizeHTML } from "@/utils/sanitizeHTML/SanitizeHTML";

export const revalidate = 10; 
export default async function Contacto(){

   const data =  await contactoApiCall()

   return(
      <section>
         <h1 className="text-3xl font-bold">
            {data.pageBy.title}
         </h1>
         <SanitizeHTML tag="p" cleanHtml={data.pageBy.content} />
      </section>
   )
}