import { useAuth } from '../lib/auth';

import { FiLogOut } from 'react-icons/fi';
import { useState } from 'react';

const Navigation = () => {
  const { signout } = useAuth();
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <header className="w-full bg-gray-900 text-white">
      <nav role="navigation" className="container mx-auto">
        <div className="md:flex md:items-center md:justify-between">
          <div className="p-4 md:px-0 flex flex-wrap items-center md:flex-nowrap md:justify-between">
            <div className="mr-4 md:mr-8">
              <a href="/home">
                <img src="/images/logo.png" className="w-10" />
              </a>
            </div>
            <div className="ml-auto md:hidden">
              <button
                className="flex items-center px-3 py-2 border rounded"
                type="button"
                onClick={() => setNavbarOpen(!navbarOpen)}
              >
                <svg
                  className="h-3 w-3 bg-white"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Menu</title>
                  <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                </svg>
              </button>
            </div>
          </div>
          <div
            className={
              (navbarOpen ? 'flex ' : 'hidden ') +
              'justify-center items-center pb-4 md:pb-0 md:flex-row md:justify-end md:flex'
            }
          >
            <a href="/blog" className="px-4 py-2">
              Blog
            </a>
            <a href="/draw" className="px-4 py-2">
              Draw
            </a>
            <a href="/work" className="px-4 py-2">
              Work
            </a>
            <a href="/today" className="px-4 py-2">
              Today
            </a>
            <a onClick={() => signout()} className="cursor-pointer pl-4 py-2">
              <FiLogOut />
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
