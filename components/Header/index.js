import { useEffect, useState } from "react";
import Image from "next/image";

// Components
import Logo from "../Logo";
import MenuItems from "../MenuItems";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [lastScrollPos, setLastScrollPos] = useState(0);
  const [showMenu, setShowMenu] = useState(true);
  const [headerColor, setHeaderColor] = useState("bg-transparent");

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const isScrollingUp = lastScrollPos > currentScrollPos;

      setHeaderColor(currentScrollPos > 0 ? "bg-white" : "bg-transparent");

      setTimeout(() => {
        setShowMenu(isScrollingUp);
        setLastScrollPos(currentScrollPos);
      }, 300);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollPos]);

  return (
    <header
      className={`${headerColor} w-full z-[100] fixed transition-all duration-400 ${
        showMenu ? "top-0" : "top-[-15%]"
      }`}
    >
      <nav className="container flex items-center justify-between mx-auto">
        <Logo />

        {/* Desktop Menu */}
        <MenuItems isMobile={false} />

        {/* Only shows on mobile & tablet */}
        <SearchIcon />
        <HamburgerMenu openState={{ isOpen, setIsOpen }} />
      </nav>

      {/* Mobile Menu */}
      {isOpen && <MenuItems isMobile />}
    </header>
  );
}

const HamburgerMenu = ({ openState: { isOpen, setIsOpen } }) => {
  return (
    <div className="lg:hidden">
      <button className="mr-4" onClick={() => setIsOpen(!isOpen)}>
        {!isOpen ? (
          <svg viewBox="0 0 100 80" width="40" height="40">
            <rect width="100" height="10" rx="10"></rect>
            <rect y="30" width="100" height="10" rx="10"></rect>
            <rect y="60" width="100" height="10" rx="10"></rect>
          </svg>
        ) : (
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              x1="10"
              y1="10"
              x2="30"
              y2="30"
              stroke="black"
              height="10"
              strokeWidth="3"
              strokeLinecap="round"
            />
            <line
              x1="30"
              y1="10"
              x2="10"
              y2="30"
              stroke="black"
              height="10"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </svg>
        )}
      </button>
    </div>
  );
};

const SearchIcon = () => {
  return (
    <div className="justify-end flex-1 hidden lg:flex">
      <Image
        src="/images/search.svg"
        alt="Search Icon"
        width={24}
        height={24}
      />
    </div>
  );
};
