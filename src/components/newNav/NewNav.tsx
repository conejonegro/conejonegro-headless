"use client";

import { CiMenuBurger } from "react-icons/ci";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import Image from "next/image";
import Link from "next/link";

const menuItems = [
    
    { label: "Cursos", href: "/cursos" },
    { label: "Experiencia", href: "/experiencia-laboral" },
    { label: "Contacto", href: "/contacto" },
  ]

export default function NewNav() {
  const [isOpen, setIsOpen] = useState(false);

  function clicked() {
    setIsOpen(!isOpen);
  }

  return (
    <nav className="container mx-auto flex my-2 items-center justify-end md:justify-between h-16 bg-black shadow-md text-white">
      <ul className="hidden justify-evenly w-full items-center md:flex">
      <Link href="/">
          <Image src="/static/blackRabbit.png" alt="image" width={80} height={80}/>
        </Link>
         { menuItems.map((menuItem) =>  {
            return(
              <li key={menuItem.label}>
                <Link href={menuItem.href}>
                  {menuItem.label}
                </Link>
              </li>
            )
         })}
       
      </ul>
      { /*  Hamburguer Button */ }
      <button aria-label="Toggle navigation menu" aria-expanded={isOpen}  className= "z-10 mr-8 w-full flex justify-between items-center md:hidden">
      <Link href="/"> <Image src="/static/blackRabbit.png" alt="image" width={80} height={80}/> </Link>
        {isOpen ? <IoMdClose onClick={clicked} /> : <CiMenuBurger onClick={clicked} />}
      </button>
      { /*  Dropdown Menu */ }
      <div
        className={`${
          isOpen ? "max-h-screen mt-4 flex overflow-hidden transition-all z-10 duration-500 ease-in-out absolute top-16 left-0 w-full bg-slate-600 text-white  p-4 md:hidden" : "hidden overflow-hidden transition-all duration-500 ease-in-out absolute top-16 left-0 w-full bg-black text-white p-4 md:hidden"
        } `}
      >
        <ul className="w-full">
          {menuItems.map((menuItem) => (
            <li key={menuItem.label} className="py-2">
             
              <Link href={menuItem.href} className="hover:text-gray-400">
                {menuItem.label}
              </Link>
              <hr className="mt-4 border-slate-50"></hr>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
