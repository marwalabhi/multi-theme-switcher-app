import React from 'react';
import { Menu, MenuButton, Transition, MenuItem, MenuItems } from '@headlessui/react';
// import { motion, AnimatePresence } from 'framer-motion';

import logo from '../../assets/logo.png';
import ThemeOption from '../ThemeOption/ThemeOption';
import { useSelector } from 'react-redux';
import type { RootState } from '../../utils/store';

interface HeaderProps {
  title?: string;
  children?: React.ReactNode;
}

const Header: React.FC<HeaderProps> = () => {
  const currentTheme = useSelector((state: RootState) => state.theme.currentTheme);

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
        <div className="mr-4 ml-auto flex gap-2">
          <div className="theme-options">
            <ThemeOption theme="dark" />
            <ThemeOption theme="light" />
            <ThemeOption theme="purple" />
          </div>
          <Menu as="div" className="relative inline-block text-left">
            <MenuButton className="rounded bg-gray-200 px-3 py-2 dark:bg-gray-700">
              {currentTheme}
            </MenuButton>
            <Transition>
              <MenuItems className="absolute mt-2 rounded bg-white shadow-md dark:bg-gray-800">
                {['light', 'dark', 'colorful'].map((t) => (
                  <MenuItem key={t}>
                    {({ active }) => (
                      <button
                        className={`block w-full px-4 py-2 text-left ${active ? 'bg-blue-100 dark:bg-blue-900' : ''}`}
                        // onClick={() => setTheme(t)}
                      >
                        {t.charAt(0).toUpperCase() + t.slice(1)}
                      </button>
                    )}
                  </MenuItem>
                ))}
              </MenuItems>
            </Transition>
          </Menu>
        </div>
      </nav>
    </header>
  );
};

export default Header;
