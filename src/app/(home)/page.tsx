import client from "@/apollo-client";
import { gql } from "@apollo/client";
import { SanitizeHTML } from "@/utils/sanitizeHTML/SanitizeHTML";
import Image from "next/image";
import styles from './home.module.css'

export const revalidate = 10;
export default async function Home() {
  const { data } = await client.query({
    query: gql`
      query {
        pageBy(pageId: 12) {
          title
          content
        }
        homePage: pageBy(uri: "/") {
          id
          homepage {
            userphoto {
              node {
                id
                mediaItemUrl
              }
            }
          }
        }
      }
    `,
  });

  // const cleanestHTML = SanitizeHTML(data.pageBy.content)
  console.log("my content", data.homePage.homepage.userphoto.node.mediaItemUrl);
  const photoURL = data.homePage.homepage.userphoto.node.mediaItemUrl;

  return (
    <div className={styles.homeContainer}>
      <SanitizeHTML
        tag="div"
        className="whitespace-normal"
        cleanHtml={data.pageBy.content}
      />
      <Image src={photoURL} width={300} height={200} alt="some" />
    </div>
  );
}
