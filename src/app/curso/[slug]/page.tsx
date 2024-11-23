import client from "@/apollo-client";
import { gql } from "@apollo/client";
import { SanitizeHTML } from "@/utils/sanitizeHTML/SanitizeHTML";

type CorusesFields = {
  duracion: string;
};

type Curso = {
  slug: string;
};

type Post = {
  id: number;
  title: String;
  featuredImage: string;
  corusesFields: CorusesFields;
};

export default async function Cursos({ params }: { params: { slug: string } }) {
  //const  {curso}  = useParams();
  //console.log("SLUG from params", params);
  //console.log("SITEURL", siteURL)

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
              modulosDelCurso
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
 // console.log("advanced custom fields", data.cursos.nodes);
  const mySlug = params.slug;
  //console.log("Slug", mySlug);
  //console.log("solo dos cursos?", data.cursos.nodes);
  const foundData = data.cursos.nodes.find(
    (curso: Curso) => curso.slug === mySlug
  );
  //console.log("foundData", foundData)

  return (
    <div className="container mx-auto p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Columna Izquierda */}
        <div>
          <h1>{foundData.title}</h1>
        </div>
        <div>
          <p className="relative">
            {" "}
            {`${foundData.corusesFields.duracion} ${
              foundData.corusesFields.duracion === "1"
                ? "mes de práctica"
                : "meses de práctica"
            }`}
          </p>
          <p className="relative">
            <SanitizeHTML tag="div" cleanHtml={foundData.corusesFields.modulosDelCurso} />
          </p>
        </div>
      </div>
    </div>
  );
}
