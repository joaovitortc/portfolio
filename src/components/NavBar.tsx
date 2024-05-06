import React from "react";

const NavBar: React.FC = () => {
  return (
    <nav className='navbar-top'>
    <div id='navbar' className="w-full flex flex-wrap items-center justify-between mx-auto p-4 font-medium md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
        <div className="text-white">
            Joao Cunha Portfolio
        </div>
      <div className="hidden w-full md:block md:w-auto">
        <ul id='navbar' className="flex flex-col p-4 md:p-0 mt-4 bg-transparent border border-gray-100 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
          <li>
            <a
              href="#about"
              className="block py-2 px-3 text-white md:bg-transparent md:p-0 dark:text-white md:p-0 dark:text-white md:dark:hover:text-blue-500 md:dark:hover:bg-transparent"
              aria-current="page"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#skills"
              className="block py-2 px-3 text-gray-900 rounded md:hover:bg-transparent md:border-0 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:text-white md:dark:hover:bg-transparent"
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="block py-2 px-3 text-gray-900 rounded md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
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
