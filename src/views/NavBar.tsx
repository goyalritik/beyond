import { useState } from "react";

import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

function Header() {
  const Links = [
    { name: "About", link: "/" },
    { name: "Job Search", link: "/" },
    { name: "Candidates", link: "/" },
    { name: "Employers", link: "/" },
    { name: "Latest News", link: "/" },
    { name: "Contact", link: "/" },
  ];
  const [navbar, setNavbar] = useState(false);
  return (
    <nav className="bg-white w-full shadow p-2 relative z-20">
      <div className="sm:hidden flex justify-end p-2">
        <button type="button" onClick={() => setNavbar(!navbar)}>
          {navbar ? (
            <AiOutlineClose className="fill-secondary" />
          ) : (
            <GiHamburgerMenu className="fill-primary" />
          )}
        </button>
      </div>
      <div
        className={`flex flex-col sm:flex-row items-center justify-center sm:justify-end w-full z-10 bg-white left-0 ${
          navbar ? "absolute" : "hidden"
        } sm:flex`}
      >
        <ul className="sm:flex items-center justify-center text-center space-y-8 sm:space-x-6 sm:space-y-0">
          {Links.map((link) => (
            <li
              key={`${link.name}`}
              className="px-2 hover:text-gray-400 duration-500"
            >
              <a href={link.link} key={link.name}>
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Header;
