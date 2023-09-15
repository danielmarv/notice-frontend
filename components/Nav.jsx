"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";

const Nav = () => {
  const { data: session } = useSession();

  const [providers, setProviders] = useState(null);
  const [toggleDropdown, setToggleDropdown] = useState(false);

  useEffect(() => {
    (async () => {
      const res = await getProviders();
      setProviders(res);
    })();
  }, []);

  return (
    <nav className='w-full pt-3 mb-16 flex-between'>
      <Link href='https://bugemauniv.ac.ug/' className='flex gap-2 flex-center'>
        <Image
          src='/assets/images/logo.svg'
          alt='logo'
          width={30}
          height={30}
          className='object-contain'
        />
        <p className='logo_text'>BU Notice Board</p>
      </Link>

      {/* Desktop Navigation */}
      <div className='hidden sm:flex'>
        {/* {session?.user ? ( */}
          <div className='flex gap-3 md:gap-5'>
            <Link href='/' className='black_btn'>
              Home
            </Link>

            <Link href='/notice' className='black_btn'>
              Notices
            </Link>
            <Link href='/notice' className='outline_btn'>
              Sign In
            </Link>

            <Link href='/notice'>
              <Image
                src='/assets/images/logo.svg'
                width={37}
                height={37}
                className='rounded-full'
                alt='profile'
              />
            </Link>
          </div>
        {/* ) : ( */}
          {/* <>
            {providers &&
              Object.values(providers).map((provider) => (
                <button
                  type='button'
                  key={provider.name}
                  onClick={() => {
                    signIn(provider.id);
                  }}
                  className='black_btn'
                >
                  Sign in
                </button>
              ))}
          </> */}
        {/* )} */}
      </div>

      {/* Mobile Navigation */}
      <div className='relative flex sm:hidden'>
        {/* {session?.user ? ( */}
          <div className='flex'>
            <Image
              src='/assets/images/logo.svg'
              width={37}
              height={37}
              className='rounded-full'
              alt='profile'
              onClick={() => setToggleDropdown(!toggleDropdown)}
            />

            {toggleDropdown && (
              <div className='dropdown'>
                <Link
                  href='/'
                  className='dropdown_link'
                  onClick={() => setToggleDropdown(false)}
                >
                  Home
                </Link>
                <Link
                  href='/notice'
                  className='dropdown_link'
                  onClick={() => setToggleDropdown(false)}
                >
                  Notices
                </Link>
                {/* <Link
                  href='/create-notice'
                  className='dropdown_link'
                  onClick={() => setToggleDropdown(false)}
                >
                  Create Notice
                </Link>
                <button
                  type='button'
                  onClick={() => {
                    setToggleDropdown(false);
                    signOut();
                  }}
                  className='w-full mt-5 black_btn'
                >
                  Sign Out
                </button> */}
              </div>
            )}
          </div>
        {/* ) : ( */}
          {/* <>
            {providers &&
              Object.values(providers).map((provider) => (
                <button
                  type='button'
                  key={provider.name}
                  onClick={() => {
                    signIn(provider.id);
                  }}
                  className='black_btn'
                >
                  Sign in
                </button>
              ))}
          </> */}
        {/* )} */}
      </div>
    </nav>
  );
};

export default Nav;
