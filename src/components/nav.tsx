'use client'

import { AiOutlineMenu } from 'react-icons/ai'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image';
import { useThemeSwitch } from '../components/Hooks/useThemeSwitch';
import { MoonIcon, SunIcon } from '../components/icons'
import { cx } from '@/utils';

function Nav() {
  const [open, setOpen] = useState(false)
  const [mode, setMode] = useThemeSwitch();
  const [click, setClick] = useState(false);

  const toggleTheme = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  const toggle = () => {
    setClick(!click)
  }

  return (
    <nav className="lg:w-full lg:h-full xs:w-full xs:h-20 flex sticky top-0 z-10 bg-white dark:bg-dark" style={{ zIndex: 100 }} >
      <div className="w-1/2 h-20 flex lg:items-center lg:justify-center xs:items-center xs:justify-center">
        {mode === "dark" ? <Image className='w-48 h-full' src="/images/logo-white3.png" alt='logo-blanco' width={1080} height={1080}></Image> :
          <Image className='w-48 h-full' src="/images/logo-black3.jpg" alt='logo-negro' width={1080} height={1080}></Image>
        }
      </div>
      <div className="w-1/2 h-20 lg:flex lg:items-center lg:justify-center xs:hidden">
        <div className="w-full h-full flex justify-between items-center lg:pr-10 lg:pl-10">
          <button
            onClick={toggleTheme}
            className={cx(
              "w-6 h-6 ease ml-2 flex items-center justify-center rounded-full p-1",
              mode === "light" ? "bg-dark text-light" : "bg-light text-dark"
            )}
            aria-label="theme-switcher"
          >
            {mode === "light" ? <MoonIcon className={"fill-dark"} /> : <SunIcon className={"fill-dark"} />}
          </button>
          <Link className="text-black dark:text-light text-lg font-semibold hover:text-cyan-400 cursor-pointer" href='/' >Home</Link>
          <Link className="text-black dark:text-light text-lg font-semibold hover:text-cyan-400 cursor-pointer" href='/services' >Services</Link>
          <Link className="text-black dark:text-light text-lg font-semibold hover:text-cyan-400 cursor-pointer" href='/about' >About</Link>
          <Link className="text-black dark:text-light text-lg font-semibold hover:text-cyan-400 cursor-pointer" href='/projects' >Projects</Link>
          <Link className="text-black dark:text-light text-lg font-semibold hover:text-cyan-400 cursor-pointer" href='/blog' >Blog</Link>
        </div>
      </div>
      <div className="w-1/2 h-20 flex lg:hidden xs:flex justify-end items-center pr-6 relative text-dark dark:text-light">
        <div className='pr-4'>
          <button
            onClick={toggleTheme}
            className={cx(
              "w-6 h-6 ease ml-2 flex items-center justify-center rounded-full p-1",
              mode === "light" ? "bg-dark text-light" : "bg-light text-dark"
            )}
            aria-label="theme-switcher"
          >
            {mode === "light" ? <MoonIcon className={"fill-dark"} /> : <SunIcon className={"fill-dark"} />}
          </button>
        </div>
        <button className="p-2" onClick={() => setOpen(!open)}>
          <AiOutlineMenu size={30} />
        </button>
      </div>
      {open && (
        <div className='bg-gray-400 absolute top-16 right-6 flex flex-col items-center w-28'>
          <Link className="text-black dark:text-light text-lg font-semibold hover:text-cyan-400 cursor-pointer" href='/'  >Home</Link>
          <Link className="text-black dark:text-light text-lg font-semibold hover:text-cyan-400 cursor-pointer" href='/services'  >Services</Link>
          <Link className="text-black dark:text-light text-lg font-semibold hover:text-cyan-400 cursor-pointer" href='/about' >About</Link>
          <Link className="text-black dark:text-light text-lg font-semibold hover:text-cyan-400 cursor-pointer" href='/projects' >Projects</Link>
          <Link className="text-black dark:text-light text-lg font-semibold hover:text-cyan-400 cursor-pointer" href='/blog' >Blog</Link>
        </div>
      )}
    </nav>
  )
}

export default Nav