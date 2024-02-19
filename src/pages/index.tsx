import type { NextPage } from "next";
import {
  ArrowRight,
  ButtonLeft,
  ButtonRight,
  PlusButton,
} from "../components/Icons";
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
                className="form-input w-3/5 h-8 text-xs border pl-2 rounded-xl lg:rounded-3xl lg:w-3/5 lg:h-12 md:h-8 md:text-sm md:w-3/5 sm:h-6 sm:text-sm text-black dark:bg-[#252526] dark:text-white"
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
          <img src="/mobile-ver/companies/Frame 56.png" className="w-1/4"></img>
          <img src="/mobile-ver/companies/Frame 57.png" className="w-1/4"></img>
        </div>
        <div className="space-x-4 md:space-x-0 md:space-y-8 md:py-12 md:flex md:flex-col hidden">
          <img src="/frame/Frame 56.png"></img>
          <img src="/frame/Frame 57.png"></img>
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
              <span className="absolute left-0 right-0 top-0 bottom-0 bg-gradient-to-l from-blue-500 z-0 rounded-2xl" />
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
              <h1 className="text-black dark:text-white text-7xl font-semibold">
                Meet Our Team
              </h1>
              <p className="text-slate-400 md:w-2/3 text-2xl">
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
              <button className="w-12 aspect-square rounded-full bg-gray-200 hover:bg-blue-500">
                <ButtonLeft className="" />
              </button>
              <button className="w-12 aspect-square rounded-full bg-gray-200 hover:bg-blue-500">
                <ButtonRight className="" />
              </button>
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
              <button>
                <PlusButton className="w-6" />
              </button>
            </div>
            <div className="border-b border-t text-xs md:text-lg text-black dark:text-white py-4 md:py-8 flex justify-between">
              <h1>What thing that i should prepare before starting</h1>
              <button>
                <PlusButton className="w-6" />
              </button>
            </div>
            <div className="border-b text-black dark:text-white text-xs md:text-lg py-4 md:py-8 flex justify-between">
              <h1>Does my company need help for marketing advices</h1>
              <button>
                <PlusButton className="w-6" />
              </button>
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
                className="bg-[#FAFAFA] form-input rounded-3xl pl-4 h-8 md:h-12 w-3/5 sm:w-2/5 md:w-2/3 text-black dark:bg-[#252526] dark:text-white"
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
            <svg
              width="144"
              height="32"
              viewBox="0 0 144 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M52.296 17.1213H42.4246V22.3465H53.6746V26H38.2748V5.67831H53.1783V9.27666H42.4246V13.5919H52.296V17.1213ZM63.1039 15.1085C62.773 14.3824 62.125 14.0193 61.1599 14.0193C60.0386 14.0193 59.2849 14.3824 58.8989 15.1085C58.6875 15.5221 58.5818 16.1379 58.5818 16.9559V26H54.5974V11H58.4164V13.1921C58.9035 12.4108 59.363 11.8548 59.795 11.5239C60.5579 10.9357 61.546 10.6415 62.7592 10.6415C63.9081 10.6415 64.8364 10.8943 65.5441 11.3998C66.114 11.8686 66.546 12.4706 66.8401 13.2059C67.3548 12.3235 67.9936 11.6756 68.7564 11.262C69.5653 10.8483 70.466 10.6415 71.4586 10.6415C72.1204 10.6415 72.773 10.7702 73.4164 11.0276C74.0597 11.2849 74.6434 11.7353 75.1673 12.3787C75.5901 12.9026 75.875 13.546 76.0221 14.3088C76.114 14.8143 76.1599 15.5542 76.1599 16.5285L76.1323 26H72.1066V16.432C72.1066 15.8621 72.0147 15.3934 71.8309 15.0257C71.4816 14.3272 70.8382 13.9779 69.9007 13.9779C68.8162 13.9779 68.0671 14.4283 67.6535 15.329C67.4421 15.807 67.3364 16.3814 67.3364 17.0524V26H63.3796V17.0524C63.3796 16.1608 63.2877 15.5129 63.1039 15.1085ZM85.9476 26.3998C84.7068 26.3998 83.7096 26.1517 82.9559 25.6553C82.5055 25.3612 82.0184 24.8465 81.4945 24.1112V26H77.648V5.70588H81.5634V12.9301C82.0597 12.2316 82.6066 11.6985 83.204 11.3309C83.9118 10.8713 84.8125 10.6415 85.9062 10.6415C87.8823 10.6415 89.4265 11.3539 90.5386 12.7785C91.6599 14.2031 92.2206 16.0414 92.2206 18.2932C92.2206 20.6278 91.6691 22.5625 90.5662 24.0974C89.4632 25.6324 87.9237 26.3998 85.9476 26.3998ZM88.0983 18.7068C88.0983 17.6406 87.9605 16.7583 87.6847 16.0597C87.1608 14.7362 86.1958 14.0745 84.7895 14.0745C83.3649 14.0745 82.386 14.7224 81.8529 16.0184C81.5772 16.7077 81.4393 17.5993 81.4393 18.693C81.4393 19.9798 81.7243 21.046 82.2941 21.8915C82.864 22.7371 83.7325 23.1599 84.8998 23.1599C85.9108 23.1599 86.6967 22.7509 87.2573 21.9329C87.818 21.1149 88.0983 20.0395 88.0983 18.7068ZM100.602 14.5983C99.0211 14.5983 97.9595 15.1131 97.4173 16.1425C97.114 16.7215 96.9623 17.6131 96.9623 18.8171V26H93.0055V10.9724H96.7555V13.5919C97.3621 12.5901 97.8906 11.9053 98.341 11.5377C99.0763 10.9219 100.032 10.614 101.209 10.614C101.282 10.614 101.342 10.6186 101.388 10.6278C101.443 10.6278 101.558 10.6324 101.733 10.6415V14.6673C101.484 14.6397 101.264 14.6213 101.071 14.6121C100.878 14.6029 100.721 14.5983 100.602 14.5983ZM102.614 12.5993C103.653 11.2757 105.436 10.614 107.963 10.614C109.608 10.614 111.07 10.9403 112.347 11.5928C113.625 12.2454 114.264 13.477 114.264 15.2877V22.1811C114.264 22.659 114.273 23.2381 114.291 23.9182C114.319 24.4329 114.397 24.7822 114.526 24.966C114.654 25.1498 114.847 25.3015 115.105 25.421V26H110.831C110.711 25.6967 110.629 25.4118 110.583 25.1452C110.537 24.8787 110.5 24.5754 110.472 24.2353C109.93 24.8235 109.305 25.3244 108.597 25.7381C107.752 26.2252 106.796 26.4687 105.73 26.4687C104.369 26.4687 103.244 26.0827 102.352 25.3107C101.47 24.5294 101.028 23.4265 101.028 22.0018C101.028 20.1544 101.741 18.8171 103.165 17.9899C103.947 17.5395 105.096 17.2178 106.612 17.0248L107.949 16.8594C108.676 16.7675 109.195 16.6526 109.507 16.5147C110.068 16.2757 110.348 15.9035 110.348 15.398C110.348 14.7822 110.132 14.3594 109.7 14.1296C109.278 13.8906 108.653 13.7711 107.825 13.7711C106.897 13.7711 106.24 14.0009 105.854 14.4605C105.578 14.8006 105.394 15.2601 105.302 15.8392H101.511C101.594 14.5248 101.961 13.4449 102.614 12.5993ZM105.537 23.1599C105.904 23.4632 106.355 23.6149 106.888 23.6149C107.733 23.6149 108.51 23.3667 109.218 22.8704C109.935 22.3741 110.307 21.4688 110.335 20.1544V18.693C110.086 18.8493 109.834 18.9779 109.576 19.079C109.328 19.171 108.983 19.2583 108.542 19.341L107.66 19.5064C106.833 19.6535 106.24 19.8327 105.881 20.0441C105.275 20.4026 104.971 20.9586 104.971 21.7123C104.971 22.3833 105.16 22.8658 105.537 23.1599ZM128.767 16.3631H124.741C124.667 15.8024 124.479 15.2969 124.176 14.8465C123.734 14.2399 123.05 13.9366 122.121 13.9366C120.798 13.9366 119.892 14.5938 119.405 15.9081C119.148 16.6066 119.019 17.5349 119.019 18.693C119.019 19.796 119.148 20.6829 119.405 21.3539C119.874 22.6039 120.756 23.2289 122.052 23.2289C122.971 23.2289 123.624 22.9807 124.01 22.4844C124.396 21.9881 124.631 21.3447 124.713 20.5542H128.725C128.633 21.7491 128.201 22.8796 127.429 23.9458C126.198 25.6645 124.373 26.5239 121.956 26.5239C119.539 26.5239 117.76 25.807 116.62 24.3732C115.481 22.9393 114.911 21.0781 114.911 18.7895C114.911 16.2068 115.54 14.1985 116.8 12.7647C118.059 11.3309 119.796 10.614 122.011 10.614C123.895 10.614 125.435 11.0368 126.63 11.8824C127.834 12.7279 128.546 14.2215 128.767 16.3631ZM142.346 21.5882C142.244 22.4798 141.78 23.3851 140.953 24.3042C139.666 25.7656 137.865 26.4963 135.549 26.4963C133.637 26.4963 131.95 25.8805 130.489 24.6489C129.028 23.4173 128.297 21.4136 128.297 18.6379C128.297 16.0368 128.954 14.0423 130.268 12.6544C131.592 11.2665 133.306 10.5726 135.411 10.5726C136.661 10.5726 137.787 10.807 138.789 11.2757C139.79 11.7445 140.618 12.4844 141.27 13.4954C141.858 14.387 142.24 15.421 142.415 16.5974C142.516 17.2868 142.557 18.2794 142.539 19.5754H132.254C132.309 21.0827 132.782 22.1397 133.674 22.7463C134.216 23.1232 134.869 23.3116 135.631 23.3116C136.44 23.3116 137.097 23.0818 137.603 22.6222C137.879 22.3741 138.122 22.0294 138.334 21.5882H142.346ZM138.458 16.9835C138.393 15.9449 138.076 15.159 137.506 14.6259C136.946 14.0836 136.247 13.8125 135.411 13.8125C134.501 13.8125 133.793 14.0974 133.288 14.6673C132.791 15.2371 132.479 16.0092 132.35 16.9835H138.458Z"
                className="fill-black dark:fill-white"
              />
              <circle cx="9.5" cy="16.5" r="9.5" fill="#3461FF" />
              <path
                d="M34.5192 15.6362C35.1807 16.0221 35.1807 16.9779 34.5192 17.3638L19.5039 26.1227C18.8372 26.5116 18 26.0308 18 25.259L18 7.74104C18 6.96925 18.8372 6.48837 19.5039 6.87726L27 11.25L34.5192 15.6362Z"
                fill="#3461FF"
              />
            </svg>
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
