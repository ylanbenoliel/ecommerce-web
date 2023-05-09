import cartIcon from "@/assets/navbar/cart.svg";
import heartIcon from "@/assets/navbar/heart.svg";
import logo from "@/assets/navbar/logo.svg";
import searchIcon from "@/assets/navbar/search.svg";
import userLogo from "@/assets/navbar/userLogo.svg";
import Image from "next/image";

export default function NavBar() {
  return (
    <div className="flex flex-1 flex-row place-content-around">
      <div className="flex ml-14">
        <Image src={logo} alt="Logo to e-commerce" />
      </div>
      <div className="flex flex-wrap items-center m-auto p-4">
        <nav>
          <div className="max-w-screen-xl flex flex-wrap items-center p-4">
            <div className="hidden w-full md:block" id="navbar-default">
              <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 md:flex-row md:space-x-8 md:mt-0">
                <li>
                  <a
                    href="#"
                    className="block py-2 pl-3 pr-4 text-black md:text-pink-300 md:p-0 md:dark:text-pink-300"
                    aria-current="page"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 pl-3 pr-4 md:border-0 md:hover:text-pink-300 md:p-0 md:hover:text-pink-300"
                  >
                    Shop
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 pl-3 pr-4 md:border-0 md:hover:text-pink-300 md:p-0 md:hover:text-pink-300"
                  >
                    Blogs
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 pl-3 pr-4 md:border-0 md:hover:text-pink-300 md:p-0 md:hover:text-pink-300"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 pl-3 pr-4 md:border-0 md:hover:text-pink-300 md:p-0 md:hover:text-pink-300"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>

      <div className="flex flex-wrap items-center mr-14 p-4">
        <Image src={userLogo} alt="User icon" className="mr-2" />
        <button className="mr-1">Login</button>
        <label> / </label>
        <button className="ml-1">Register</button>

        <Image src={searchIcon} alt="Search icon" className="ml-8" />
        <Image src={cartIcon} alt="Cart icon" className="ml-8" />
        <Image src={heartIcon} alt="Cart icon" className="ml-8" />
      </div>
    </div>
  );
}
