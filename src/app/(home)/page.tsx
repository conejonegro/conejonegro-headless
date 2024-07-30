import client from "@/apollo-client"
import { gql } from '@apollo/client';

export const revalidate = 10; 

type Post = {
   id: number,
   title: String
 }

export default async function Home() {

   const { data } = await client.query({
     query: gql`
       query GetPosts {
         posts {
           nodes {
             id
             title
           }
         }
       }
     `,
   });
 
   return (
     <div>
       <h1>WordPress Posts</h1>
       <ul>
         {data.posts.nodes.map((post: Post) => (
           <li key={post.id}>{post.title}</li>
         ))}
       </ul>
     </div>
   );
 }