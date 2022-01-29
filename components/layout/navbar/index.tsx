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
import useWindowSize from "../../../hooks/useWindowSize";

const Navbar: NextPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { width } = useWindowSize();

  return (
    <Nav>
      <NavItem>
        <Button aria-label="Menu" onClick={() => setIsOpen(!isOpen)}>
          <MenuIcon
            width={width > 700 ? 35 : 25}
            height={width > 700 ? 35 : 25}
          />
        </Button>
        <UlMenu className={isOpen ? style.isopen : style.isnotopen}>
          <MenuContainer>
            <div>
              <h3>Categories</h3>
              <button onClick={() => setIsOpen(!isOpen)}> X</button>
            </div>
            <li>
              <a href="#">Action</a>
            </li>
            <li>
              <a href="#">Comedy</a>
            </li>
            <li>
              <a href="#">Drama</a>{" "}
            </li>
            <li>
              <a href="#">Fantasy</a>{" "}
            </li>
            <li>
              <a href="#">Horror</a>{" "}
            </li>
            <li>
              <a href="#">Mystery</a>{" "}
            </li>
            <li>
              <a href="#">Romance</a>{" "}
            </li>
            <li>
              <a href="#">Thriller</a>{" "}
            </li>
            <li>
              <a href="#">Western</a>{" "}
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
          <SearchIcon
            width={width > 700 ? 35 : 25}
            height={width > 700 ? 35 : 25}
          />
        </Button>
      </NavItem>
      <NavItem>
        {
          <Link href="/">
            <A>
              <HboMaxIcon
                width={width > 700 ? 150 : 135}
                height={width > 700 ? 40 : 30}
                color="white"
              />
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
