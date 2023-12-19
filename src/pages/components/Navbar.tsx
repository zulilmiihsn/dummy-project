import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "../../../firebase";
import Link from "next/link";
import Share from "./Share";
import Switcher, { Tab, theme } from './Switcher';
import { darkTheme } from './plugins/sync';
import { LogoHorizontal } from "./Icons";

const Navbar = () => {
  const [user, setUser] = useState<any | null>(false);
  const [nav, setNav] = useState(false);

  const [colorScheme, setColorScheme] = useState(darkTheme)
  const toggle = () => theme(colorScheme, setColorScheme)

  function ColorScheme() {
    return <Switcher default={colorScheme} onChange={toggle} />
  }

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user == null) {
        setUser(null);
      } else {
        setUser(user);
      }
    });
  }, [setUser]);

  function googleSignIn() {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  }

  function logOut() {
    signOut(auth);
  }
  return (
    <main className="flex flex-col sticky top-0 z-50">
      <nav className="bg-white dark:bg-[#252526] dark:border-black flex flex-nowrap items-center justify-between border-b py-4 px-4 xl:px-24 lg:px-18 md:px-12 md:flex-nowrap sm:px-8 sm:flex-nowrap">
        <div>
          <Link href="/">
<LogoHorizontal className="fill-white w-36"/>
          </Link>
        </div>
        <div className="text-black dark:text-white hidden md:flex flex-wrap space-x-4 items-center justify-between font-medium text-sm xl:text-lg md:flex-nowrap md:text-xs sm:text-xs">
          <Link href="/#how-it-works">How it works</Link>
          <Link href="/#our-work">Our Work</Link>
          <Link href="/listing">Listing</Link>
          <a>About Us</a>
        </div>
        <div className="md:hidden">
          <button onClick={() => setNav(!nav)}>
            <img src="/icon/dropdown-button.png" alt="" />
          </button>
        </div>
        <div className="space-x-4 justify-between hidden md:flex flex-wrap items-center font-medium text-sm xl:text-lg md:flex-nowrap md:text-xs sm:text-xs">
          <ColorScheme/>
          <button className="text-white bg-[#3461FF] rounded-xl p-2 xl:py-2 xl:px-3 xl:text-lg lg:text-xs lg:p-2 md:p-1 md:text-xs md:rounded-1 md:mx-0 sm:text-xs">
            Book A Call
          </button>
          <Share />
          {!user ? (
            <button
              className="text-white bg-[#3461FF] rounded-xl p-2 xl:py-2 xl:px-3 xl:text-lg lg:text-xs lg:p-2 md:p-1 md:text-xs md:rounded-1 md:mx-0 sm:text-xs"
              onClick={googleSignIn}
            >
              Login
            </button>
          ) : (
            <button
              className="text-white bg-[#3461FF] rounded-xl p-2 xl:py-2 xl:px-3 xl:text-lg lg:text-xs lg:p-2 md:p-1 md:text-xs md:rounded-1 md:mx-0 sm:text-xs"
              onClick={logOut}
            >
              Logout
            </button>
          )}
        </div>
      </nav>
      {nav && (
        <div className="relative">
          <nav className="text-black absolute bg-white dark:bg-[#252526] text-lg gap-4 font-medium flex flex-col w-full py-2 shadow-xl md:hidden px-4 rounded-b-xl">
            <Link href="/#how-it-works" className="dark:text-white w-full justify-center flex">
              How it works
            </Link>
            <Link href="/#our-work" className="dark:text-white w-full justify-center flex">
              Our Work
            </Link>
            <Link href="/listing" className="dark:text-white w-full justify-center flex">
              Listing
            </Link>
            <Link href="/" className="dark:text-white w-full justify-center flex">
              About Us
            </Link>
            <div className="dark:text-white w-full justify-center flex gap-4">Dark Mode<ColorScheme/></div>
            <button className="text-white bg-[#3461FF] rounded-xl p-2 xl:py-2 xl:px-3 xl:text-lg lg:text-xs lg:p-2 md:p-1 md:text-xs md:rounded-1 md:mx-0 sm:text-xs">
              Book A Call
            </button>
            {!user ? (
              <button
                className="bg-[#3461FF] text-white rounded-xl p-2 xl:py-2 xl:px-3 xl:text-lg lg:text-xs lg:p-2 md:p-1 md:text-xs md:rounded-1 md:mx-0 sm:text-xs"
                onClick={googleSignIn}
              >
                Login
              </button>
            ) : (
              <button
                className="bg-[#3461FF] text-white rounded-xl p-2 xl:py-2 xl:px-3 xl:text-lg lg:text-xs lg:p-2 md:p-1 md:text-xs md:rounded-1 md:mx-0 sm:text-xs"
                onClick={logOut}
              >
                Logout
              </button>
            )}
          </nav>
        </div>
      )}
    </main>
  );
};

export default Navbar;
