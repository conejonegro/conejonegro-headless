import client from "@/apollo-client";
import { gql } from "@apollo/client";
import { SanitizeHTML } from "@/utils/sanitizeHTML/SanitizeHTML";
import NotFound from "../not-found";

export const revalidate = 10;

export default async function PathPage({
  params,
}: {
  params: { path: string };
}) {
  //console.log("mis params",params)
  const mySlug = params.path;
  const { data } = await client.query({
    query: gql`
      query pageById {
        pageBy(uri: "${mySlug}") {
          content
          slug
          title
        }
      }
    `,
  });

  if (!data.pageBy) {
    return <NotFound />;
  }
  return (
    <div className="contaier mx-auto max-w-5xl">
      <h1>{data.pageBy.title}</h1>
      <SanitizeHTML tag="div" cleanHtml={data.pageBy.content} />
    </div>
  );
}
