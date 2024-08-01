import client from "@/apollo-client";
import { gql } from "@apollo/client";
import Image from "next/image";
import Link from "next/link";

export const revalidate = 10;

type CorusesFields = {
  duracion: string;
};

type Post = {
  id: number;
  title: String;
  featuredImage: string;
  corusesFields: CorusesFields;
};

export default async function Cursos() {

  const siteURL = process.env.SITE_URL

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
          }
        }
      }
    `,
  });
   //console.log("Cursos1", data.cursos.nodes[0].featuredImage.node.uri);
  // console.log("Cursos1", data.cursos.nodes[0].corusesFields.duracion);
  return (
    <div>
      <h1>Cursos</h1>
      <div className="flex gap-8 justify-center items-center">
        {data.cursos.nodes.map((curso: Post) => (
          <Link href={`${siteURL}/${curso.uri}`}>
            <div key={curso.id} className="border w-1/3 px-3 py-3">
              <Image src={curso.featuredImage.node.mediaItemUrl} alt="curso poster" width="350" height="350"/>
              <h2>{curso.title}</h2>
              <p>{curso.corusesFields.duracion} Horas</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
