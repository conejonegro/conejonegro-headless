import client from "@/apollo-client";
import { gql } from "@apollo/client";

export const revalidate = 10;

type Post = {
  id: number;
  title: String;
  featuredImage: string;
  corusesFields:string;
};

export default async function Cursos() {
  const { data } = await client.query({
    query: gql`
      query GetCourses {
        cursos {
          nodes {
            featuredImage {
              node {
                uri
                id
              }
            }
            content
            corusesFields {
              duracion
            }
            title
             id
          }
        }
      }
    `,
  });
  console.log("Cursos1", data.cursos.nodes[0].featuredImage.node.title);
  console.log("Cursos1", data.cursos.nodes[0].corusesFields.duracion);
  return (
    <div>
      <h1>Cursos</h1>
      <ul>
        {data.cursos.nodes.map((curso: Post) => (
          <div>
            <li key={curso.id}>{curso.title}</li>
            <p>{curso.corusesFields.duracion} Horas</p>
          </div>
        ))}
      </ul>
      
    </div>
  );
}
