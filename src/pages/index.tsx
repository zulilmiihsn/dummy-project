import type { NextPage } from "next";
import { ArrowRight, ButtonLeft, ButtonRight, PlusButton } from "./components/Icons";
import React from "react";

const Home: NextPage = () => {
  return (
    <main>
      <header>
        <div className="flex flex-col-reverse items-center md:items-start md:flex-row justify-between py-8 px-8 xl:px-24 lg:px-18 md:px-12 md:py-12 sm:px-8 sm:py-8">
          <div className="md:w-1/2 flex flex-col py-8 justify-center space-y-4 xl:space-y-8 xl:py-24 lg:space-y-8 lg:py-24 md:space-y-4 sm:space-y-4">
            <div className="w-3/4 text-black dark:text-white font-bold text-5xl xl:w-2/3 xl:text-7xl lg:w-2/3 lg:text-6xl md:w-4/5 md:text-5xl sm:w-4/5 sm:text-4xl">
              We Take Care of Your Brand
            </div>
            <p className="text-black dark:text-white text-xs lg:text-lg md:text-sm sm:text-sm sm:w-3/4">
              We care about our work and we care about our clients.
            </p>
            <div className="flex flex-wrap space-x-2">
              <input
                type="text"
                className="form-input w-3/5 h-8 text-xs border pl-2 rounded-xl lg:rounded-3xl lg:w-3/5 lg:h-12 md:h-8 md:text-sm md:w-3/5 sm:h-6 sm:text-sm"
                placeholder="Enter your email"
              />
              <button className="text-white bg-[#3461FF] font-medium rounded-full text-xs px-2 lg:h-12 lg:px-6 md:h-8 md:text-sm md:px-4 sm:h-6">
                Lets talk
              </button>
            </div>
          </div>
          <div className="md:w-1/2">
            <img src="/image-header.png" alt="image-header" />
          </div>
        </div>
      </header>
      <section className="bg-[#FAFAFA] dark:bg-[#252526] flex flex-col items-center px-8 space-y-4 lg:px-24 md:px-12">
        <h1 className="text-black dark:text-white font-medium pt-8 text-2xl">
          Companies We Work With
        </h1>
        <div className="space-x-4 flex flex-row md:hidden w-full justify-center py-4">
          <img src="/mobile-ver/companies/frame 56.png" className="w-1/4"></img>
          <img src="/mobile-ver/companies/frame 57.png" className="w-1/4"></img>
        </div>
        <div className="space-x-4 md:space-x-0 md:space-y-8 md:py-12 md:flex md:flex-col hidden">
          <img src="/frame/frame 56.png"></img>
          <img src="/frame/frame 57.png"></img>
        </div>
      </section>
      <section className="flex flex-col md:flex-row justify-center md:items-start py-8 px-8 lg:py-24 lg:px-24 md:py-12 md:px-12">
        <div className="md:w-1/2 grid gap-4 grid-cols-2 grid-rows-2 flex-col items-center py-4">
          <div className="text-black dark:text-white">
            <h1 className="font-bold text-3xl lg:text-5xl md:text-4xl">245%</h1>
            <p className="text-slate-400 text-xs lg:text-md md:text-sm">
              Most revenues for the brand
            </p>
          </div>
          <div className="text-black dark:text-white">
            <h1 className="font-bold text-3xl lg:text-5xl md:text-4xl">50+</h1>
            <p className="text-slate-400 text-xs lg:text-md md:text-sm">
              Brand trust us
            </p>
          </div>
          <div className="text-black dark:text-white">
            <h1 className="font-bold text-3xl lg:text-5xl md:text-4xl">
              130K+
            </h1>
            <p className="text-slate-400 text-xs lg:text-md md:text-sm">
              Audience reached
            </p>
          </div>
          <div className="text-black dark:text-white">
            <h1 className="font-bold text-3xl lg:text-5xl md:text-4xl">24+</h1>
            <p className="text-slate-400 text-xs lg:text-md md:text-sm">
              Worldwide award
            </p>
          </div>
        </div>
        <div className="py-4 md:w-1/2 space-y-4">
          <h1 className="text-black dark:text-white font-medium text-3xl lg:text-5xl md:text-4xl">
            Commitments
          </h1>
          <p className="text-slate-600 dark:text-slate-400 text-xs md:text-sm">
            We are committed to working with you collaboratively to understand
            your goals and create a strategy that will achieve them.
          </p>
          <a
            href="/"
            className="text-blue-500 font-bold text-sm md:text-lg flex items-center gap-2"
          >
            Learn more
            <ArrowRight className="text-[#3461FF] w-6 h-6" />
          </a>
        </div>
      </section>
      <section
        id="how-it-works"
        className="flex flex-col md:flex-row justify-between px-8 py-8 lg:px-24 md:space-x-8 lg:space-x-12 lg:py-12 md:px-12 md:h-1/2"
      >
        <div className="md:w-1/2 space-y-12 md:h-1/2 py-4">
          <div className="space-y-2 md:space-y-4">
            <h1 className="text-black dark:text-white font-medium text-3xl lg:text-6xl md:text-4xl">
              How It Works
            </h1>
            <p className="text-black dark:text-slate-400 w-full text-sm lg:text-lg md:text-sm">
              We believe that the best way to create successful marketing
              campaigns is to work closely with our clients to understand their
              goals and challenges.
            </p>
          </div>
          <div>
            <img src="image-section3.png" alt="a Keyboard" className="w-full" />
          </div>
        </div>
        <div className="md:w-1/2 space-y-9 xl:space-y-12 lg:space-y-9 md:space-y-11 md:h-1/2 py-4">
          <div className="flex space-x-4 h-16 md:h-16 lg:h-28">
            <img src="/icon/majesticons_dollar-circle.png" alt="icon1" />
            <div>
              <h1 className="text-black dark:text-white font-bold text-sm lg:text-2xl">
                Discovery
              </h1>
              <p className="text-black dark:text-slate-400 text-xs xl:text-lg lg:text-md md:text-sm">
                We meet with you to learn about your business, your goals, and
                your target audience.
              </p>
            </div>
          </div>
          <div className="flex space-x-4 h-16 md:h-16 lg:h-full">
            <img src="/icon/majesticons_dollar-circle (1).png" alt="icon2" />
            <div>
              <h1 className="text-black dark:text-white font-bold text-sm lg:text-2xl">
                Strategy
              </h1>
              <p className="text-black dark:text-slate-400 text-xs xl:text-lg lg:text-md md:text-sm">
                We develop a customized marketing strategy that is based on your
                unique needs and goals.
              </p>
            </div>
          </div>
          <div className="flex space-x-4 h-16 md:h-16 lg:h-full">
            <img src="/icon/majesticons_dollar-circle (2).png" alt="icon3" />
            <div>
              <h1 className="text-black dark:text-white font-bold text-sm lg:text-2xl">
                Execution
              </h1>
              <p className="text-black dark:text-slate-400 text-xs xl:text-lg lg:text-md md:text-sm">
                We execute our strategy using the latest digital marketing tools
                and techniques.
              </p>
            </div>
          </div>
          <div className="flex space-x-4 h-16 md:h-16 lg:h-full">
            <img src="/icon/majesticons_dollar-circle (3).png" alt="icon4" />
            <div>
              <h1 className="text-black dark:text-white font-bold text-sm lg:text-2xl">
                Measurement
              </h1>
              <p className="text-black dark:text-slate-400 text-xs xl:text-lg lg:text-md md:text-sm">
                We track the results of our campaigns so that we can make
                adjustments as needed.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="our-work" className="space-y-12 py-12 md:h-1/2">
        <div className="px-4 space-y-12">
          <div className="flex flex-col items-center space-y-2 lg:space-y-2">
            <h1 className="text-black dark:text-white font-medium md:text-5xl text-4xl">
              Our Work
            </h1>
            <p className="text-black dark:text-slate-400 text-sm">
              A glimpse of our portofolio
            </p>
          </div>
          <div className="grid-rows-3 gap-2 flex flex-col md:flex-row items-center justify-between px-8">
            <div className="space-y-2">
              <img src="/our-work/Rectangle 161.png" alt="apple" />
              <h1 className="text-black dark:text-white font-bold flex justify-center">
                Apple
              </h1>
            </div>
            <div className="space-y-2">
              <img src="/our-work/Rectangle 161 (1).png" alt="apple" />
              <h1 className="text-black dark:text-white font-bold flex justify-center">
                Coca Cola
              </h1>
            </div>
            <div className="space-y-2">
              <img src="/our-work/Rectangle 161 (2).png" alt="apple" />
              <h1 className="text-black dark:text-white font-bold flex justify-center">
                Nike
              </h1>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <button className="bg-[#3461FF] rounded-3xl py-2 px-4 md:px-8">
              See more
            </button>
          </div>
          <div className="flex justify-center items-center h-1/2 py-4 md:px-8">
            <div className="bg-[#3561FF] bg-[url('/elevate-your-brand/Background.png')] w-full rounded-2xl px-8 py-8 flex flex-row md:space-y-0 relative h-64">
              <span className="absolute left-0 right-0 top-0 bottom-0 bg-gradient-to-l from-blue-500 z-0 rounded-2xl"/>
              <div className="w-1/2">
                <h1 className="flex items-center text-xl sm:text-3xl md:text-4xl font-medium w-1/2 h-full">
                  Elevate Your Brand Today!
                </h1>
              </div>
              <div className="w-1/2 flex flex-col space-y-4 md:space-y-10 md:py-6 z-10">
                <p className="text-xs md:text-lg lg:text-xl">
                  Ready to transform your digital dresence? Let's create magic
                  together! book our services now!
                </p>
                <button className="bg-white text-xs md:text-lg text-black rounded-3xl py-2 md:p-2 w-3/4 sm:w-1/3">
                  Book Call
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-col px-8 md:px-12 py-12 font-sans space-y-12">
        <div className="flex flex-col md:flex-row w-full h-max justify-center md:space-x-4">
          <div className="flex flex-col gap-2 md:w-1/2">
            <div className="flex gap-2">
              <div className="w-1/3">
                <img width={"100%"} src="/meet-our-team/Rectangle 184.png" />
              </div>
              <div className="w-1/3">
                <img width={"100%"} src="/meet-our-team/Rectangle 185.png" />
              </div>
              <div className="w-1/3">
                <img width={"100%"} src="/meet-our-team/Rectangle 181.png" />
              </div>
            </div>
            <div className="flex gap-2">
              <div className="w-1/3">
                <img width={"100%"} src="/meet-our-team/Rectangle 182.png" />
              </div>
              <div className="w-1/3">
                <img width={"100%"} src="/meet-our-team/Rectangle 183.png" />
              </div>
              <div className="w-1/3">
                <img width={"100%"} src="/meet-our-team/Rectangle 186.png" />
              </div>
            </div>
          </div>
          <div className="w-full sm:w-2/5 md:w-1/2 py-4 sm:py-0 px-8 min-h-max flex flex-col justify-between">
            <div className="flex flex-col gap-4">
              <h1 className="text-black dark:text-white text-3xl sm:text-5xl font-semibold">
                Meet Our Team
              </h1>
              <p className="text-slate-400 md:w-2/3">
                Discover the brilliance behind Embrace. Our team blends
                innovation and artistry to craft digital wonders that captivate
              </p>
            </div>
            <button className="bg-[#3461FF] rounded-full py-3 px-2 w-2/5">
              Learn more
            </button>
          </div>
        </div>
        <div className="flex flex-col space-y-4 items-center">
          <div className="w-full flex justify-between">
            <div>
              <h1 className="text-black dark:text-white text-2xl sm:text-3xl font-semibold sm:text-start text-center">
                What Our Client Said About Us
              </h1>
            </div>
            <div className="space-x-2 hidden md:flex">
              <button className="w-12 aspect-square rounded-full bg-gray-200 hover:bg-blue-500"><ButtonLeft className=""/></button>
              <button className="w-12 aspect-square rounded-full bg-gray-200 hover:bg-blue-500"><ButtonRight className=""/></button>
            </div>
          </div>
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 w-full">
            <div className="bg-[#FAFAFA] dark:bg-[#252526] dark:hover:bg-[#3461FF] hover:bg-[#3461FF] text-black dark:text-white hover:text-white transition duration-300 ease-in-out p-8 flex flex-col rounded-2xl sm:w-4/5 md:w-1/3 space-y-2">
              <div className="flex space-x-4">
                <div>
                  <img
                    src="/what-our-client-said/Ellipse 80.png"
                    alt=""
                    className="w-16"
                  />
                </div>
                <div>
                  <h1 className="font-bold text-xl">Amelia Joseph</h1>
                  <h2 className="font-medium">Chief Manager</h2>
                </div>
              </div>
              <div>
                <p>
                  My vision came alive effortlessly. Their blend of casual and
                  professional approach made the process a breeze. Creativity
                  flowed, and the results were beyond my expectations.
                </p>
              </div>
            </div>
            <div className="bg-[#FAFAFA] dark:bg-[#252526] dark:hover:bg-[#3461FF] hover:bg-[#3461FF] text-black dark:text-white hover:text-white transition duration-300 ease-in-out p-8 flex flex-col rounded-2xl sm:w-4/5 md:w-1/3 space-y-2">
              <div className="flex space-x-4">
                <div>
                  <img
                    src="/what-our-client-said/Ellipse 80 (1).png"
                    alt=""
                    className="w-16"
                  />
                </div>
                <div>
                  <h1 className="font-bold text-xl">Jacob Joshua</h1>
                  <h2 className="font-medium">Chief Manager</h2>
                </div>
              </div>
              <div>
                <p>
                  I found the digital expertise I needed. Their
                  creative-professional balance exceeded expectations. Friendly
                  interactions, exceptional outcomes. For digital enchantment,
                  it's got to be Embrace!
                </p>
              </div>
            </div>
            <div className="bg-[#FAFAFA] dark:bg-[#252526] dark:hover:bg-[#3461FF] hover:bg-[#3461FF] text-black dark:text-white hover:text-white transition duration-300 ease-in-out p-8 flex flex-col rounded-2xl sm:w-4/5 md:w-1/3 space-y-2">
              <div className="flex space-x-4">
                <div>
                  <img
                    src="/what-our-client-said/Ellipse 80 (2).png"
                    alt=""
                    className="w-16"
                  />
                </div>
                <div>
                  <h1 className="font-bold text-xl">Jacob Joshua</h1>
                  <h2 className="font-medium">Chief Manager</h2>
                </div>
              </div>
              <div>
                <p>
                  Embrace really nails it! Creative brilliance, approachable
                  style. They're the partners you want—artistry meets strategy.
                  Thrilled with what they achieved!"
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="space-y-12">
        <div className="h-1/2 flex justify-center px-4 md:px-24">
          <div className="bg-[#232038] bg-[url('/start-your-journey/background.png')] bg-cover w-full rounded-2xl lg:p-8 flex flex-row">
            <div className="w-3/5 p-4 sm:p-8 space-y-4 md:space-y-12 flex flex-col justify-center md:flex-none">
              <h1 className="text-lg sm:text-2xl md:text-3xl lg:text-5xl">
                Start Your Journey With Us Now
              </h1>
              <button className="bg-[#3461FF] rounded-full lg:py-4 lg:px-8 py-2 px-4 lg:text-xl text-xs w-2/3 sm:w-1/3">
                Start Now
              </button>
            </div>
            <div className="w-2/5 flex flex-col items-center justify-center p-4 sm:p-6 md:p-4">
              <div>
                <img src="/start-your-journey/Group 2192.png" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col space-y-8 md:space-y-0 md:space-x-0 md:flex-row px-8 md:py-12 md:px-24">
          <div className="md:w-3/5 md:pr-24 md:py-8">
            <div className="border-t text-black dark:text-white text-xs md:text-lg py-4 md:py-8 flex justify-between">
              <h1>How do i sign up for the project</h1>
              <button><PlusButton className="w-6"/></button>
            </div>
            <div className="border-b border-t text-xs md:text-lg text-black dark:text-white py-4 md:py-8 flex justify-between">
              <h1>What thing that i should prepare before starting</h1>
              <button><PlusButton className="w-6"/></button>
            </div>
            <div className="border-b text-black dark:text-white text-xs md:text-lg py-4 md:py-8 flex justify-between">
              <h1>Does my company need help for marketing advices</h1>
              <button><PlusButton className="w-6"/></button>
            </div>
          </div>
          <div className="md:w-2/5 md:space-y-8 space-y-2 py-2 flex flex-col">
            <h1 className="text-black dark:text-white text-2xl md:text-4xl font-bold">
              How We Can Help You?
            </h1>
            <p className="text-slate-400 lg:w-2/5">
              Follow our newsletter. We will regularly update our latest project
              and availability
            </p>
            <div className="gap-2 w-full py-4">
              <input
                type="text"
                className="bg-[#FAFAFA] text-black form-input rounded-3xl pl-4 h-8 md:h-12 w-3/5 sm:w-2/5 md:w-2/3"
                placeholder="Enter your email"
              />
              <button className="text-white bg-[#3461FF] font-medium rounded-full h-8 md:h-12 w-2/5 sm:w-1/5 md:w-1/3">
                Lets talk
              </button>
            </div>
            <div>
              <a
                href=""
                className="text-[#3461FF] font-semibold underline decoration-[#3461FF] flex items-center gap-2"
              >
                More FAQ
                <ArrowRight className="text-[#3461FF] w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#FAFAFA] dark:bg-[#252526] flex flex-col md:flex-row justify-between px-8 xl:px-24 py-12 md:px-12 md:py-8 space-y-8 md:space-y-0">
        <div className="md:w-1/2 md:space-y-8 flex justify-between md:flex-col">
          <div className="space-y-8">
            <img src="/embrace.svg" alt="logo embrace" />
            <div className="flex justify-between w-36">
              <a href="instagram.com" className="hover:scale-105">
                <img src="/contact-us/instagram.png" alt="logo instagram" />
              </a>
              <a href="twitter.com" className="hover:scale-105">
                <img
                  src="/contact-us/twitter.png"
                  alt="logo twitter"
                  className="pt-1"
                />
              </a>
              <a href="facebook.com" className="hover:scale-105">
                <img
                  src="/contact-us/facebook.png"
                  alt="logo facebook"
                  className="pt-1"
                />
              </a>
            </div>
          </div>
          <div className="items-center flex">
            <button className="bg-[#3461FF] rounded-3xl p-2 sm:p-3 text-sm sm:w-36 hover:scale-105">
              Contact Us
            </button>
          </div>
        </div>
        <div className="text-black dark:text-white w-full md:w-1/2 flex font-semibold gap-4 justify-between">
          <div className="space-y-4">
            <ul className="hover:scale-105">
              <a href="">Work With Us</a>
            </ul>
            <ul className="hover:scale-105">
              <a href="">Advertise With Us</a>
            </ul>
            <ul className="hover:scale-105">
              <a href="">Support Us</a>
            </ul>
            <ul className="hover:scale-105">
              <a href="">Business Advices</a>
            </ul>
          </div>
          <div className="space-y-4">
            <ul className="hover:scale-105">
              <a href="">Private Coaching</a>
            </ul>
            <ul className="hover:scale-105">
              <a href="">Our Work</a>
            </ul>
            <ul className="hover:scale-105">
              <a href="">Our Commitment</a>
            </ul>
            <ul className="hover:scale-105">
              <a href="">Our Team</a>
            </ul>
          </div>
          <div className="space-y-4">
            <ul className="hover:scale-105">
              <a href="">About Us</a>
            </ul>
            <ul className="hover:scale-105">
              <a href="">FAQs</a>
            </ul>
            <ul className="hover:scale-105">
              <a href="">Report a Bug</a>
            </ul>
          </div>
        </div>
      </section>
      <footer className="bg-black h-4 p-4 flex justify-between md:p-8 md:text-normal text-xs">
        <p className="w-2/4">2022 Embrace, inc - All Right Reserved</p>
        <div className="flex md:space-x-40 w-2/4 space-x-4 justify-between">
          <p>Terms of use</p>
          <p>Privacy Policy</p>
        </div>
      </footer>
    </main>
  );
};

export default Home;
