import client from "@/apollo-client";
import { gql } from "@apollo/client";
import Image from "next/image";
import Link from "next/link";

interface MenuItem {
  id: string;
  label: string;
  uri: string;
}
interface MenuEdge {
  id: string;
  node: MenuItem;
}
export async function MainNav() {
  const { data } = await client.query({
    query: gql`
      query {
        menus {
          nodes {
            menuItems {
              edges {
                node {
                  id
                  label
                  uri
                }
              }
            }
          }
        }
      }
    `,
  });

  const menuItems = data.menus.nodes[0].menuItems.edges;
  //console.log("My menu Items", menuItems);

  return (
    <nav>
      <ul className="flex gap-8 justify-center my-4 items-center">
        <Link href="/">
          <Image src="/static/blackRabbit.png" alt="image" width={80} height={80}/>
        </Link>
        {menuItems.map((menu: MenuEdge) => {
          return (
            <Link href={`${process.env.SITE_URL}${menu.node.uri}`} key={menu.id}>
              <li key={menu.id}>{menu.node.label}</li>
            </Link>
          );
        })}
      </ul>
    </nav>
  );
}
