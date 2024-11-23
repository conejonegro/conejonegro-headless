import client from "@/apollo-client";
import { gql } from "@apollo/client";
import { SanitizeHTML } from "@/utils/sanitizeHTML/SanitizeHTML";
import Link from "next/link";
import type { Metadata } from "next";

export const revalidate = 10;
export const dynamic = 'force-dynamic'

type Post = {
  id: number;
  title: String;
  content: string;
  trabajosCustomFields: {
    companyUrl: string;
  };

};

export const metadata = {
  title: "Experiencia Laboral | conejoNegro",
  description:
    "Revisa la experiencia laboral de Conejo Negro, desarrollador web con trayectoria en proyectos destacados con React.js, Next.js y WordPress.",
};

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
            trabajosCustomFields {
              companyUrl
            }
          }
        }
      }
    `,
  });

  //console.log("miscustomfields", data.trabajos.nodes);

  const mistrabajos = data.trabajos.nodes;

  mistrabajos.forEach( (trabajo: Post) => {
    console.log(trabajo.trabajosCustomFields.companyUrl)

  });

  return (
    <div className="container mx-auto mt-8">
      <h1 className="font-bold mb-4">Expericencia Laboral</h1>
      <div className="grid grid-rows gap-4 mt-4">
        {data.trabajos.nodes.map((trabajo: Post) => (
          <div key={trabajo.id} className="border px-3 py-3 max-w-5xl">
            <Link className="underline mb-4 block" href={trabajo.trabajosCustomFields.companyUrl || "#"} target="_blank"> <h2>{trabajo.title}</h2></Link>
            <SanitizeHTML tag="div" cleanHtml={trabajo.content} />
          </div>
        ))}
      </div>
    </div>
  );
}
