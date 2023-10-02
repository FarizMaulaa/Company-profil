import { FaHome, FaBuilding } from "react-icons/fa";
import { BsFillBoxFill } from "react-icons/bs";
import { GiCargoShip } from "react-icons/gi";
import { BiSolidPhoneCall, BiSolidNotepad } from "react-icons/bi";
import { IoMdArrowDropdown } from "react-icons/io";

const Navbar = () => {
  return (
    <>
      <div className="drawer z-10">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          {/* Navbar */}
          <div className="w-full flex justify-between navbar bg-blue-800 fixed pl-2">
            <div className="flex-1 px-2 mx-2 py-2 text-slate-200">
              <div className="font-bold text-6xl">
                <GiCargoShip />
              </div>
              <div className="block ml-1">
                <p className="iconame font-semibold text-base xl:text-xl  font-sans">
                  PT EXPORT IMPORT ARANG
                </p>
                <p className="font-base text-sm sm:text-xs font-serif">
                  We always provide good things
                </p>
              </div>
            </div>
            <div className="flex-none hidden lg:block">
              <ul className="flex text-slate-200 ">
                {/* Navbar menu content here */}
                <li className="text-slate-200 flex items-center font-medium text-base mr-4 hover:-mt-2 hover:underline hover:underline-offset-[20px] ">
                  <FaHome />
                  <p className="font-normal text-lg ml-1">Home</p>
                </li>
                <li className="text-slate-200 flex items-center font-medium text-base mr-4 hover:-mt-2 hover:underline hover:underline-offset-[20px] ">
                  <FaBuilding />
                  <p className="font-normal text-lg ml-1">Profile</p>
                </li>
                <div className="dropdown">
                  <label tabIndex={0} className="">
                    <li className=" flex items-center font-normal text-base mr-4 hover:-mt-2 hover:underline hover:underline-offset-[20px] ">
                      <BsFillBoxFill />
                      <p className="font-normal text-lg ml-1">Our Product</p>
                      <div className="ml-1">
                        <IoMdArrowDropdown />
                      </div>
                    </li>
                  </label>
                  <ul
                    tabIndex={0}
                    className="dropdown-content text-slate-200 z-[1] mt-9 p-3 bg-blue-900 rounded-sm border border-white w-72"
                  >
                    <li className="hover:font-bold hover:ml-4">
                      <a>
                        <span className="text-2xl">»</span> Hardwood Charcoal
                      </a>
                    </li>
                    <li className="hover:font-bold hover:ml-4">
                      <a>
                        <span className="text-2xl">»</span> Halaban Charcoal
                      </a>
                    </li>
                    <li className="hover:font-bold hover:ml-4">
                      <a>
                        <span className="text-2xl">»</span> Charcoal Briquette
                      </a>
                    </li>
                    <li className="hover:font-bold hover:ml-4">
                      <a>
                        <span className="text-2xl">»</span> Coconut Shell
                        Charcoal
                      </a>
                    </li>
                  </ul>
                </div>
                <li className=" flex items-center font-normal text-base mr-4 hover:-mt-2 hover:underline hover:underline-offset-[20px] ">
                  <BiSolidNotepad />
                  <p className="font-normal text-lg ml-1">Catalog</p>
                </li>
                <li className="flex items-center font-medium text-base mr-4 hover:-mt-2 hover:underline hover:underline-offset-[20px] pr-6 ">
                  <BiSolidPhoneCall />
                  <p className="font-normal text-lg ml-1">Contact</p>
                </li>
              </ul>
            </div>
            <div className="flex-none lg:hidden">
              <label
                htmlFor="my-drawer-3"
                className="btn btn-circle swap swap-rotate"
              >
                {/* this hidden checkbox controls the state */}
                <input type="checkbox" />

                {/* hamburger icon */}
                <svg
                  className="swap-off fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 512 512"
                >
                  <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
                </svg>

                {/* close icon */}
                <svg
                  className="swap-on fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 512 512"
                >
                  <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
                </svg>
              </label>
            </div>
          </div>
          {/* Page content here */}
          Content
        </div>
        <div className="drawer-side -z-10 mt-16">
          <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
          <ul className="p-4 w-60 min-h-full bg-base-200">
            {/* Sidebar content here */}
            <li className="text-slate-800 mt-8 flex items-center font-bold text-2xl mr-8 hover:text-blue-700 hover:mt-6 hover:underline hover:underline-offset-[12px]">
              <FaHome />
              <p className="font-semibold text-lg ml-1">Home</p>
            </li>
            <li className="text-slate-800 mt-4 flex items-center font-bold text-2xl mr-8 hover:mt-6 hover:text-blue-700 hover:underline hover:underline-offset-[12px]">
              <FaBuilding />
              <p className="font-semibold text-lg ml-1">Profile</p>
            </li>
            <div className="dropdown mt-4">
              <label tabIndex={0} className="">
                <li className=" flex items-center font-bold text-2xl mr-8 hover:-mt-2 hover:underline hover:underline-offset-[12px]  hover:text-blue-700">
                  <BsFillBoxFill />
                  <p className="font-semibold text-lg ml-1">Our Product</p>
                  <div className="ml-1">
                    <IoMdArrowDropdown />
                  </div>
                </li>
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content text-slate-200 z-[1] mt-3 p-3 bg-blue-600 rounded-sm border border-white w-72"
              >
                <li className="hover:font-bold hover:ml-4">
                  <a>
                    <span className="text-2xl">»</span> Hardwood Charcoal
                  </a>
                </li>
                <li className="hover:font-bold hover:ml-4">
                  <a>
                    <span className="text-2xl">»</span> Halaban Charcoal
                  </a>
                </li>
                <li className="hover:font-bold hover:ml-4">
                  <a>
                    <span className="text-2xl">»</span> Charcoal Briquette
                  </a>
                </li>
                <li className="hover:font-bold hover:ml-4">
                  <a>
                    <span className="text-2xl">»</span> Coconut Shell Charcoal
                  </a>
                </li>
              </ul>
            </div>
            <li className="text-slate-800 mt-4 flex items-center font-bold text-2xl mr-8 hover:mt-6 hover:text-blue-700 hover:underline hover:underline-offset-[12px]">
              <BiSolidNotepad />
              <p className="font-semibold text-lg ml-1">Catalog</p>
            </li>
            <li className="text-slate-800 mt-4 flex items-center font-bold text-2xl mr-4 hover:mt-6 hover:text-blue-700 hover:underline hover:underline-offset-[12px]">
              <BiSolidPhoneCall />
              <p className="font-semibold text-lg ml-1">Contact</p>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
