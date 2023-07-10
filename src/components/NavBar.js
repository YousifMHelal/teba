import React, { useState } from "react";
import { Link as Anchor } from "react-scroll";

const NavBar = () => {
  const [menu, setMenu] = useState(false);
  const showMenu = () => {
    menu ? setMenu(false) : setMenu(true);
  };

  return (
    <div>
      {/* -----Larg screen Navbar----- */}
      <nav className="nav-bar w-full fixed min-h-[70px]">
        <div className="container mx-auto max-w-[1172px] flex justify-between items-center h-full py-4 px-4">
          <Anchor
            to="home"
            smooth={true}
            className="flex items-center text-[1.8rem] capitalize cursor-pointer">
            <h2 className="text-main font-bold">طيبــــــة</h2>
          </Anchor>
          <ul
            className={
              menu ? "new" : "flex justify-between max-sm:hidden"
            }>
            <li>
              <Anchor
                to="about"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="no-underline capitalize text-xl leading-7 px-6 duration-150 cursor-pointer
                              font-bold text-h ">
                عنـــــــا
              </Anchor>
            </li>
            <li>
              <Anchor
                to="project"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="no-underline capitalize text-xl leading-7 px-6 duration-150 cursor-pointer
                          font-bold text-h ">
                منتجاتنــا
              </Anchor>
            </li>
            <li></li>
            <li>
              <Anchor
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="no-underline capitalize text-xl leading-7 px-6 duration-150 cursor-pointer
                          font-bold text-h ">
                تواصل معنــا
              </Anchor>
            </li>
          </ul>
          <div className={menu ? "is-active" : ""} onClick={showMenu} id="menu">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
