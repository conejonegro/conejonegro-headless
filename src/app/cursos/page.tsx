import client from "@/apollo-client";
import { gql } from "@apollo/client";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";


export const revalidate = 10;

type CorusesFields = {
  duracion: string;
};

export const metadata: Metadata = {
  title: "Cursos | conejoNegro ",
  description: "Explora los cursos de desarrollo web completados por Conejo Negro. Formación avanzada en React.js, Next.js, WordPress y más.",
};

type Post = {
  id: number;
  title: String;
  featuredImage: string;
  corusesFields: CorusesFields;
};

export default async function Cursos() {
  const siteURL = process.env.SITE_URL;

  const { data } = await client.query({
    query: gql`
      query GetCourses {
        cursos {
          nodes {
            featuredImage {
              node {
                id
                mediaItemUrl
              }
            }
            content
            corusesFields {
              duracion
            }
            title
            id
            uri
            slug
          }
        }
      }
    `,
  });
  //console.log("Cursos", data.cursos.nodes);
  // console.log("Cursos1", data.cursos.nodes[0].corusesFields.duracion);
  return (
    <div className="container mx-auto max-w-screen-xl">
      <h1 className="font-bold">Cursos</h1>
      <div className="grid grid-cols-3 gap-4 mt-4">
        {data.cursos.nodes.map((curso: Post) => (
          <Link href={`${siteURL}${curso.uri}`} key={curso.id} className=" ">
            <div key={curso.id} className="border px-3 py-3 relative h-80 w-full">
              <Image
                src={curso.featuredImage.node.mediaItemUrl}
                alt="curso poster"
                fill={true}
                object-fit="contain"
                priority={true} 
              />
              <h2>{curso.title}</h2>
              <p>
                {" "}
                {`${curso.corusesFields.duracion} ${
                  curso.corusesFields.duracion === "1"
                    ? "mes de práctica"
                    : "meses de práctica"
                }`}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
