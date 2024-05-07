import React from "react";

const NavBar: React.FC = () => {
  return (
    <nav className='navbar-top'>
    <div id='navbar' className="w-full flex flex-wrap items-center justify-between mx-auto p-2 font-small md:space-x-8 rtl:space-x-reverse border-0">
        <div className="text-white">
            Joao Cunha Portfolio
        </div>
      <div className="w-full block w-auto">
        <ul className="flex flex-row p-0 mt-4 space-x-2 sm:space-x-8 rtl:space-x-reverse mt-0 border-0">
          <li>
            <a
              href="#about"
              className="block py-2 px-3 text-white rounded p-0 dark:text-white dark:hover:bg-gray-700 sm:px-1"
              aria-current="page"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#skills"
              className="block py-2 px-3 rounded border-0 p-0 dark:text-white dark:hover:bg-gray-700 sm:px-1"
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="block py-2 px-3  rounded border-0 p-0 dark:text-white dark:hover:bg-gray-700 sm:px-1"
            >
              Projects
            </a>
          </li>
        </ul>
      </div>
      </div>
    </nav>
  );
};

export default NavBar;
