import React from 'react';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import logo from '../../assets/logo.png';

interface HeaderProps {
  title?: string;
  children?: React.ReactNode;
}

const Header: React.FC<HeaderProps> = ({ title = 'Multi Theme Switcher', children }) => {
  return (
    <header className="bg-base-50/50 dark:bg-base-950/50 fixed z-10 w-full backdrop-blur-xl">
      <nav className="border-base relative container mx-auto flex h-14 flex-wrap items-center justify-start gap-4 border-b px-0 lg:gap-8">
        <a href="">
          <img src={logo} alt="logo" className="h-10 w-auto hover:animate-spin dark:invert" />
        </a>
        <div className="hidden md:block md:w-auto">
          <ul className="flex flex-col gap-2 p-4 font-medium md:mt-0 md:flex-row md:space-x-8 md:border-0 md:p-0 rtl:space-x-reverse">
            <a
              href="#features"
              className="text-base-600 dark:text-base-400 hover:text-base-800 dark:hover:text-base-300 text-sm font-normal"
            >
              Home
            </a>
            <a
              href="#pricing"
              className="text-base-600 dark:text-base-400 hover:text-base-800 dark:hover:text-base-300 text-sm font-normal"
            >
              About
            </a>
            <a
              href="#testimonials"
              className="text-base-600 dark:text-base-400 hover:text-base-800 dark:hover:text-base-300 text-sm font-normal"
            >
              Contact
            </a>
            <a
              href="#faqs"
              className="text-base-600 dark:text-base-400 hover:text-base-800 dark:hover:text-base-300 text-sm font-normal"
            >
              FAQs
            </a>
          </ul>
        </div>
        <div className="ml-auto flex gap-2"></div>
        <button className="group text-base-600 inline-flex items-center gap-2 rounded-full bg-transparent p-2 text-sm duration-200 ease-in-out hover:scale-95 md:hidden"></button>
      </nav>
    </header>
  );
};

export default Header;
