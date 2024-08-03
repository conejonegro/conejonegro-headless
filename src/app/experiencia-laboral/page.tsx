import client from "@/apollo-client";
import { gql } from "@apollo/client";
import { SanitizeHTML } from "@/utils/sanitizeHTML/SanitizeHTML";

export const revalidate = 10;

type CorusesFields = {
  duracion: string;
};

type Post = {
  id: number;
  title: String;
  content: string
};

export default async function Cursos() {
  const siteURL = process.env.SITE_URL;

  const { data } = await client.query({
    query: gql`
      query GetExperiencia {
        trabajos {
          nodes {
            content
            id
            slug
            title
          }
        }
      }
    `,
  });
  //console.log("Cursos1", data.cursos.nodes[0].featuredImage.node.uri);
  // console.log("Cursos1", data.cursos.nodes[0].corusesFields.duracion);
  return (
    <div className="container mx-auto">
      <h1 className="font-bold">Expericencia Laboral</h1>
      <div className="grid grid-rows gap-4 mt-4">
        {data.trabajos.nodes.map((trabajo: Post) => (
            <div key={trabajo.id} className="border px-3 py-3 max-w-5xl">
              <h2>{trabajo.title}</h2>
              <SanitizeHTML tag="div" cleanHtml={trabajo.content} />
            </div>
         
        ))}
      </div>
    </div>
  );
}
