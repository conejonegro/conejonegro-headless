import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-16">
      <div className="container mx-auto text-center">
        <h2 className="text-lg font-semibold">
          Luis Rosales - Desarrollador Web
        </h2>

        <p className="mt-4">Conéctate conmigo en mis redes:</p>

        <div className="flex justify-center mt-4 space-x-6">
          <Link
            href="https://github.com/conejonegro"
            className="hover:text-gray-400"
            rel="noopener noreferrer"
          >
            GitHub
          </Link>

          <Link
            href="https://cineclub-forever.web.app/"
            className="hover:text-gray-400"
          >
            Cineclub Forever
          </Link>
          <Link
            href="https://www.linkedin.com/in/luis-antonio-rosales-ochoa-472869243/"
            className="hover:text-gray-400"
          >
            LinkedIn
          </Link>
        </div>

        <p className="mt-8 text-sm">
          Este sitio web fue desarrollado con tecnologías como Next.js,
          React.js, Tailwind CSS, Headless WordPress, TypeScript, GitHub, y
          desplegado en Vercel.
        </p>

        <p className="mt-4 text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Luis Rosales. Todos los derechos
          reservados.
        </p>
      </div>
    </footer>
  );
}
