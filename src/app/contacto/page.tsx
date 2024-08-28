import { Metadata } from "next";

export const metadata: Metadata = {
   title: "Contacto | conejoNegro ",
   description: "Contacta a Conejo Negro, desarrollador web desde Guadalajara, Jalisco, México. Envía un mensaje para consultas, colaboraciones y proyectos.",
 };

export const revalidate = 10; 
export default async function Contacto(){

   return(
      <section className="bg-black p-6 text-center">
      <h2 className="text-2xl font-bold">Luis Rosales</h2>
      <p className="mt-2">Desarrollador Web</p>

      <div className="flex justify-center mt-4 space-x-4">
        <a
          href="https://github.com/conejonegro"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/luis-antonio-rosales-ochoa-472869243/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          LinkedIn
        </a>
        <a
          href="https://cineclub-forever.web.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          Proyecto Personal
        </a>
      </div>

      <p className="mt-6 text-sm text-gray-500">
        Desarrollado con Next.js, React.js, Tailwind CSS, Headless WordPress, TypeScript, GitHub, y Vercel.
      </p>
    </section>
   )
}