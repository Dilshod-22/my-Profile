import "./App.css";
import { FaReact } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { LiaTelegramPlane } from "react-icons/lia";
import { FaDownload } from "react-icons/fa";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { FaRegEnvelope } from "react-icons/fa";


import logo from "./assets/LOGO.svg";
function App() {
  return (
    <div className="App w-full min-w-[1430px] h-full bg-[#1E1E1E]">
      <div className="min-w-[1280px] relative pb-20">
        <nav className="fixed w-full h-20 z-20 top-0 start-0 flex items-center bg-[#1E1E1E]">
          <div className="min-w-[1280px] flex flex-wrap items-center justify-between mx-auto p-4 h-16">
            <a
              href="https://flowbite.com/"
              className="flex items-center space-x-3 rtl:space-x-reverse"
            >
              <img src={logo} className="h-8" alt="Flowbite Logo" />
            </a>
            <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
              <button
                type="button"
                className="text-white bg-[#E46400] hover:bg-[#E46400] focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-4 py-2 text-center"
              >
                Hire me
              </button>
              <button
                data-collapse-toggle="navbar-sticky"
                type="button"
                className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="navbar-sticky"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 17 14"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 1h15M1 7h15M1 13h15"
                  />
                </svg>
              </button>
            </div>
            <div
              className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
              id="navbar-sticky"
            >
              <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 dark:border-gray-700">
                <li>
                  <a
                    href="https://codepen.io/"
                    className="block py-2 px-3 text-white rounded md:bg-transparent md:p-0 md:dark:text-[#E46400]"
                    aria-current="page"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="https://codepen.io/"
                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a href="https://codepen.io/" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="https://codepen.io/"
                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div className="flex felx-col w-[1280px] h-[850px] mx-auto mt-20">
          <div className="w-1/2 flex flex-col justify-center">
            <div className="h-60">
              <h3 className="text-[#707070] text-xl font-semibold">Hi I am</h3>
              <h2 className="text-[#959595] text-2xl font-semibold mt-2">
                Dilshodbek Dev
              </h2>
              <h1 className="textGradient text-7xl font-bold mt-10">
                FULL STACK developer
              </h1>
            </div>
            <div className="mt-10 flex text-white h-8 w-[200px] justify-around">
              <span className="bgColor rounded-full h-9 w-9 flex items-center justify-center">
                <FaReact size={25} />
              </span>
              <span className="bgColor rounded-full h-9 w-9 flex items-center justify-center">
                <FaInstagram size={25} />
              </span>
              <span className="bgColor rounded-full h-9 w-9 flex items-center justify-center">
                <CiLinkedin size={25} />
              </span>
              <span className="bgColor rounded-full h-9 w-9 pt-[6px] pl-[5px]">
                <LiaTelegramPlane size={25} />
              </span>
            </div>
            <div className="mt-14">
              <button className="border border-gray-400 text-gray-400 w-[200px] h-[45px] rounded-lg">
                Hire me
              </button>
              <button className="border border-gray-400 text-gray-400 w-[200px] h-[45px] rounded-lg ml-8">
                Download CV
              </button>
            </div>
          </div>
          <div className="w-1/2  flex flex-row imageBG"></div>
        </div>

        <div className="w-[1280px] h-[830px] text-white flex flex-col items-center justify-between m-auto mt-28">
          <div className="text-center">
            <h1 className="text-[50px] font-semibold">About Me</h1>
            <h2 className="text-[19px] text-gray-400">
              User Interface and User Experience and Also video editing{" "}
            </h2>
          </div>
          <div className="w-full flex flex-row">
            <div className="w-1/2">
              <div className="multiImageAbout"></div>
            </div>
            <div className="w-1/2">
              <p className="text-gray-400 break-all text-[20px] w-[530px] mt-20">
                A software engineer, the modern-day architect of digital realms,
                navigates the ethereal landscapes of code, sculpting intangible
                structures that shape our technological world. With fingers
                poised over keyboards like virtuoso pianists, they compose
                symphonies of logic, their minds a labyrinth of algorithms and
                solutions.Their canvas is a screen, a vast expanse where lines
                of code dance in intricate patterns, weaving the fabric of
                programs and applications. Each keystroke is a brushstroke,
                crafting intricate architectures and breathing life into
                innovative designs.In this digital atelier, they don the mantle
                of problem solvers, confronting bugs and glitches like valiant
                knights in an ever-evolving quest for perfection. Debugging
                becomes a noble pursuit, unraveling the mysteries hidden within
                the tangled webs of code. designs.In this digital atelier.
              </p>
              <button className="bg-[#E46400] text-xl w-[200px] h-[45px] rounded-lg mt-[40px] flex items-center justify-center">
                <FaDownload className="mr-3" size={20} />
                Download CV
              </button>
            </div>
          </div>
        </div>

        <div className="text-center text-white mt-20">
            <>
                <h1 className="text-3xl font-semibold">Contact me</h1>
                <p className="text-[#707070] text-lg mt-2">Cultivating Connections: Reach Out and Connect with Me</p>
            </>
            <form action="">
                <div className="grid grid-cols-2 grid-wrap gap-8 w-[970px] mx-auto mt-20 justify-items-end">
                    <input className="bg-[#272727] h-14 w-[470px] rounded-xl px-4" placeholder="Name"/>
                    <input className="bg-[#272727] h-14 w-[470px] rounded-xl px-4" placeholder="Email"/>
                    <input className="bg-[#272727] h-14 w-[470px] rounded-xl px-4" placeholder="Phone"/>
                    <input className="bg-[#272727] h-14 w-[470px] rounded-xl px-4" placeholder="Timeline"/>
                    <textarea className="col-span-2 bg-[#272727] h-40 w-[970px] rounded-xl px-4 py-4" placeholder="Project Details...." ></textarea>
                    <button className="col-span-2 w-[200px] h-12 border rounded-xl">SEND</button>
                </div>
            </form>
        </div>

        <footer className="w-full h-[500px] bg-[#272727] text-center mt-24">
            <div className="h-40  inline-block mt-10">
                <img src={logo} className="mx-auto mt-4"/>
                <div>
                    icon bar
                </div>
                <div className="text-[#6d6d6d] mt-6 text-xl font-semibold flex gap-16">
                    <a className="flex gap-3"><MdOutlinePhoneInTalk size={30}/>Myprofileforgithub@gmail.com</a>
                    <a className="flex gap-3"><FaRegEnvelope size={25}/>+998 94 025 04 35</a>
                </div>
                <hr className="mt-10 border-none bg-[#6d6d6d] h-[1px]"/>
                <p className="text-[#6d6d6d] mt-2 text-lg font-semibold">Designed by Moxir</p>
            </div>
        </footer>

      </div>
    </div>
  );
}

export default App;
