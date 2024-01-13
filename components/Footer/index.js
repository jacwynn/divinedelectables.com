import Link from "next/link";
import Logo from "../Logo";
import MenuItems from "../MenuItems";

export default function Footer() {
  return (
    <footer className="mt-24 bg-right bg-cover bg-footer-texture">
      <div className="container flex flex-col items-start justify-between px-4 py-6 border-b border-white lg:mx-auto lg:items-center lg:px-0 lg:flex-row">
        <Logo context="footer" />
        <MenuItems context="footer" />
        <SocialIcons />
      </div>
      <div className="container flex flex-col justify-between px-4 py-8 mx-auto space-y-4 text-white lg:px-0 lg:space-y-0 lg:flex-row">
        <div>
          <p>Copyright 2023, All Rights Reserved</p>
        </div>
        <div>
          <Link href="/terms">Terms & Conditions</Link> |{" "}
          <Link
            href="https://wynnsolutions.co/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Site designed by Wynn Solutions
          </Link>
        </div>
      </div>
    </footer>
  );
}

const SocialIcons = () => {
  return (
    <div className="flex justify-end flex-1">
      <ul className="flex space-x-4">
        <li>
          <Link
            href="https://www.facebook.com/divine.delectables1/info/?tab=overview"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1.5em"
              viewBox="0 0 512 512"
              fill="#FFFFFF"
            >
              <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" />
            </svg>
          </Link>
        </li>
        <li>
          <Link
            href="https://www.linkedin.com/in/paulette-blanks-54830638"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1.5em"
              viewBox="0 0 448 512"
              fill="#FFFFFF"
            >
              <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
            </svg>
          </Link>
        </li>
      </ul>
    </div>
  );
};
