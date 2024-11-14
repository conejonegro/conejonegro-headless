import Image from 'next/image';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaBirthdayCake, FaUser } from 'react-icons/fa';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <main className="container mx-auto px-4 py-8">
        <header className="text-center mb-12 flex justify-between">
          <div>
            <h1 className="text-4xl font-bold text-gray-800 mb-2">Luis Antonio Rosales Ochoa</h1>
            <p className="text-xl text-gray-600">Web Engineering and Management Professional</p>
          </div>
          <Image src="https://mcseguros.com.mx/portfolio/wp-content/uploads/2024/08/tituloluis.png" width={80} height={80} alt="Luis Rosales CV Photo"/>
        </header>
        <p className="text-gray-600 text-sm">This website was developed using technologies such as Next.js, React.js, Tailwind CSS, Headless WordPress, TypeScript, GitHub, and deployed on Vercel.</p>

        <section className="bg-white shadow-lg rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Education</h2>
          <ul className="space-y-2 text-black">
            <li>Masters Degree UNIR Produccion</li>
            <li>Degree in Administrative Computer Systems - Universidad Autónoma de Chihuahua</li>
          </ul>
        </section>

        <section className="bg-white shadow-lg rounded-lg p-6 mb-8 text-black">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact Information</h2>
          <ul className="space-y-2">
            <li className="flex items-center"><FaPhone className="mr-2 text-gray-600" /> +52 33 2343 1091</li>
            <li className="flex items-center"><FaEnvelope className="mr-2 text-gray-600" /> luisrosalesochoa@gmail.com</li>
            <li className="flex items-center"><FaMapMarkerAlt className="mr-2 text-gray-600" /> Lerdo de Tejada 2407 int 4. Guadalajara Jalisco México</li>
            <li className="flex items-center"><FaBirthdayCake className="mr-2 text-gray-600" /> December 04, 1984</li>
            <li className="flex items-center"><FaUser className="mr-2 text-gray-600" /> Single</li>
          </ul>
        </section>

        <section className="bg-white shadow-lg rounded-lg p-6 mb-8 text-black">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Objective</h2>
          <p>Professional and self-development in the IT field, work at the highest level within the company.</p>
        </section>

        <section className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { skill: 'HTML5', level: 90 },
              { skill: 'CSS3', level: 90 },
              { skill: 'SCSS', level: 70 },
              { skill: 'WordPress', level: 85 },
              { skill: 'JavaScript', level: 80 },
              { skill: 'Consuming APIs', level: 80 },
              { skill: 'Git & GitHub', level: 80 },
              { skill: 'React', level: 75 },
              { skill: 'PHP', level: 60 },
              { skill: 'Bootstrap', level: 90 },
              { skill: 'jQuery', level: 50 },
              { skill: 'cPanel', level: 85 },
              { skill: 'Website Management', level: 90 },
              { skill: 'Plugin Configuration', level: 85 },
            ].map((item, index) => (
              <div key={index} className="mb-2">
                <div className="flex justify-between mb-1">
                  <span className="text-base font-medium text-gray-700">{item.skill}</span>
                  <span className="text-sm font-medium text-gray-600">{item.level}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${item.level}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}