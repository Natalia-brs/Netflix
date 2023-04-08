import Link from "next/link";
import { useEffect, useState } from "react";
import { HiSearch } from "react-icons/hi";
import { HiBell } from "react-icons/hi2";

function Header() {
  const [ isScrolled, setIsScrolled ] = useState(false);

//Adicionando o scroll do header, 
useEffect(() => {
  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    };
  };
  window.addEventListener('scroll', handleScroll);

  return () => {
    window.removeEventListener('scroll', handleScroll);
  }
}, []);

  return (
    <header  className={`${isScrolled && 'bg-red-500'}`} >
        <div className="flex items-center space-x-2 md:space-x-10">
        <img
          src="https://rb.gy/ulxxee"
          width={100}
          height={100}
          className="cursor-pointer object-contain"
        />
        <ul className="hidden space-x-4 md:flex">
            <li className="headerLink">Home</li>
            <li className="headerLink">Séries</li>
            <li className="headerLink">Filmes</li>
            <li className="headerLink">Populares</li>
            <li className="headerLink">Minha lista</li>
        </ul>
        </div>

        <div className="flex items-center space-x-4 text-sm font-light">
            <HiSearch className="hidden sm:inline h-6 w-6"/>
            <p className="hidden lg:inline"> Infantil </p>
            <HiBell className="h-6 w-6"/>
            <Link href="/account">
            <img
            src="https://rb.gy/g1pwyx"
            alt=""
            className="cursor-pointer rounded"
          />
            </Link>
        </div>
    </header>
  )
}

export default Header