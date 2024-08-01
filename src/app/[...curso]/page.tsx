"use client";

import client from "@/apollo-client";
import { gql } from "@apollo/client";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

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
  
  const { curso } = useParams();
  //console.log("SLUG from params", curso);
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
  //console.log("Cursos1", data.cursos.nodes[0].featuredImage.node.uri);
  const mySlug = curso[1];
  const foundData = data.cursos.nodes.find((curso) => curso.slug === mySlug);

  return (
    <div>
      <h1>{foundData.title}</h1>
      <div className="flex gap-8 justify-center items-center">
        <div className="border w-1/3 px-3 py-3">
          <Image
            src={foundData.featuredImage.node.mediaItemUrl}
            alt="curso poster"
            width="350"
            height="350"
          />
          <h2>{foundData.title}</h2>
          <p>{foundData.corusesFields.duracion} Horas</p>
        </div>
      </div>
    </div>
  );
}
