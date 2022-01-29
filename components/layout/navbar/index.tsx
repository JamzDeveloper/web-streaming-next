import { NextPage } from "next";
import { useState } from "react";
import style from "./Menu.module.css";
import Image from "next/image";
import {
  Nav,
  NavItem,
  NavItemAvatar,
  A,
  Button,
  DivAvatar,
  PUser,
  UlMenu,
  MenuContainer,
} from "./styles";
import Link from "next/link";
import HboMaxIcon from "../../../assets/components-svg/hbo.max";
import SearchIcon from "../../../assets/components-svg/search";
import MenuIcon from "../../../assets/components-svg/menu";

const Navbar: NextPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Nav>
      <NavItem>
        <Button aria-label="Menu" onClick={() => setIsOpen(!isOpen)}>
          <MenuIcon width={35} height={35} />
        </Button>
        <UlMenu className={isOpen ? style.isopen : style.isnotopen}>
          <MenuContainer>
            <div>
              <h3>Categories</h3>
              <button onClick={() => setIsOpen(!isOpen)}> X</button>
            </div>
            <li>
              <a>Action</a>
            </li>
            <li>
              <a>Comedy</a>
            </li>
            <li>
              <a>Drama</a>{" "}
            </li>
            <li>
              <a>Fantasy</a>{" "}
            </li>
            <li>
              <a>Horror</a>{" "}
            </li>
            <li>
              <a>Mystery</a>{" "}
            </li>
            <li>
              <a>Romance</a>{" "}
            </li>
            <li>
              <a>Thriller</a>{" "}
            </li>
            <li>
              <a>Western</a>{" "}
            </li>
            <li>
              <a
                href="https://drive.google.com/file/d/1PG_4VOZ3J0xlLob1zGLiWoUobAlh_EWw/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
              >
                Mobile App
              </a>
            </li>
          </MenuContainer>
        </UlMenu>
        <Button aria-label="Busqueda">
          <SearchIcon width={35} height={35} />
        </Button>
      </NavItem>
      <NavItem>
        {
          <Link href="/">
            <A>
              <HboMaxIcon width="150" height="40" color="white" />
            </A>
          </Link>
        }
      </NavItem>
      <div>
        <div>
          <NavItemAvatar>
            {
              <Link href="/404">
                <A>
                  {" "}
                  <DivAvatar>
                    <Image
                      src="/images/user_woman.jpg"
                      width="100%"
                      height="100%"
                      alt="user"
                    />
                  </DivAvatar>
                  <PUser>Ana </PUser>
                </A>
              </Link>
            }
          </NavItemAvatar>
        </div>
      </div>
    </Nav>
  );
};

export default Navbar;
