"use client";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { CiMenuBurger } from "react-icons/ci";
import { useState, useEffect } from "react";
import { IoMdClose } from "react-icons/io";

const menuItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Contact", href: "/contact" },
  ]

export default function NewNav() {
  const [isOpen, setIsOpen] = useState(false);

  function clicked() {
    setIsOpen(!isOpen);
  }

  return (
    <nav className="container mx-auto flex items-center justify-end md:justify-between h-16 bg-black shadow-md text-white">
      <ul className="hidden justify-evenly w-full md:flex">
         { menuItems.map((menuItem) =>  {
            return(
               <li key={menuItem.label}>{menuItem.label}</li>
            )
         })}
       
      </ul>
      <button aria-label="Toggle navigation menu" aria-expanded={isOpen} onClick={clicked} className= "z-10 md:hidden">
        {isOpen ? <IoMdClose /> : <CiMenuBurger />}
      </button>
      <div
        className={`${
          isOpen ? "max-h-screen" : "max-h-0"
        } md:hidden overflow-hidden transition-all duration-500 ease-in-out absolute top-16 left-0 w-full bg-black text-white p-4`}
      >
        <ul>
          {menuItems.map((menuItem) => (
            <li key={menuItem.label} className="py-2">
              <a href={menuItem.href} className="hover:text-gray-400">
                {menuItem.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
