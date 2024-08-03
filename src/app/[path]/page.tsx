import client from "@/apollo-client"
import { gql } from '@apollo/client';
import {SanitizeHTML}  from "@/utils/sanitizeHTML/SanitizeHTML";
import NotFound from "../not-found";

export default async function PathPage({ params }: { params: { slug: string } }) {
  //console.log("mis params",params)
  const { data } = await client.query({
    query: gql`
      query GetPages {
        pages {
          nodes {
            slug
            title
            content
          }
        }
      }
    `,
  });

  const mySlug = params.path;
  console.log("Slug", mySlug);
  console.log("solo dos cursos?", data.pages.nodes);
  const foundData = data.pages.nodes.find((page) => page.slug === mySlug);
  if (!foundData) {
    return <NotFound />;
  }
  return (
    
    <div>
      <h1>{foundData?.title}</h1>
      <SanitizeHTML tag="div" cleanHtml={foundData?.content} />
    </div>
  );
}
