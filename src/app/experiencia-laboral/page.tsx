import client from "@/apollo-client";
import { gql } from "@apollo/client";
import { SanitizeHTML } from "@/utils/sanitizeHTML/SanitizeHTML";
import type { Metadata } from "next";

export const revalidate = 10;

type Post = {
  id: number;
  title: String;
  content: string
};

export const metadata = {
    title: "Experiencia Laboral | conejoNegro",
    description: "Revisa la experiencia laboral de Conejo Negro, desarrollador web con trayectoria en proyectos destacados con React.js, Next.js y WordPress."
}

export default async function Cursos() {

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
