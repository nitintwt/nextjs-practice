import Link from "next/link"
function Header() {
  return (
    <header className="shadow sticky z-50 hrefp-0">
    <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auhref max-w-screen-xl">
            <Link href="" className="flex items-center">
                <img
                    src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
                    className="mr-3 h-12"
                    alt="Logo"
                />
            </Link>

            <div
                className="hidden justify-between items-center w-full lg:flex lg:w-auhref lg:order-1"
                id="mobile-menu-2"
            >
                <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                    <li>
                        <Link 
                        href="/Home"
                            className=
                                "block py-2 pr-4 pl-3 duration-200  border-b border-gray-100  lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                        href="/about"
                            className=
                                "block py-2 pr-4 pl-3 duration-200  border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0">
                            About
                        </Link>
                    </li>
                    <li>
                        <Link
                        href="/contact"
                            className=
                                "block py-2 pr-4 pl-3 duration-200  border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0">
                            Contact
                        </Link>
                    </li>
                    <li>
                        <Link
                        href="/github"
                            className=
                                "block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0">
                            Github
                        </Link>
                    </li>  
                </ul>
            </div>
        </div>
    </nav>
</header>
  );
};


export default Header
