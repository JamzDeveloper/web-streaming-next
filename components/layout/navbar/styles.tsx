import styled from "styled-components";
export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  position: fixed;
  align-items: center;
  margin-top: 10px;
  height: 50px;
  width: 100vw;
  z-index: 1000;
`;
export const NavItem = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 150px;
  margin-left: 7px;
  cursor: pointer;
`;
export const NavItemAvatar = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 180px;
  margin-right: 7px;
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* Internet Explorer */
  -khtml-user-select: none; /* KHTML browsers (e.g. Konqueror) */
  -webkit-user-select: none; /* Chrome, Safari, and Opera */
  -webkit-touch-callout: none; /* Disable Android and iOS callouts*/
`;

export const A = styled.a`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
`;
export const Button = styled.button`
  margin-left: 10px;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;
export const DivAvatar = styled.div`
border-radius: 50%;
border: 3px solid blue;
width: 40px;
height: 40px;
align-items: center;
overflow: hidden
margin-right: 10px;
curso: pointer;
object-fit: cover;
img{
    cursor: pointer;
    object-fit: cover;
    border-radius:50%;
}

`;
export const PUser = styled.p`
  color: #ffffff;
  margin-left: 5px;
  cursor: pointer;
`;
/*----------------- */

export const UlMenu = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: -15px;
  right: 0;
  background-color: rgba(1, 1, 1, 0.96);
  color: white;
  width: 250px;
  height: 100vh;
  padding: 20px;
  z-index: 1000;

  button {
    position: absolute;
    right: 0;
    top: 0;
    margin-right: 10px;
    margin-top: 10px;
    padding: 5px;
    background-color: transparent;
    border: none;
    cursor: pointer;
    color: white;
    font-size: 15px;
  }
`;

export const MenuContainer = styled.div`
  height: 40%;
  display:flex;
  flex-direction:column;
 justify-content space-between;
div{
    margin-bottom: 20px;
}
  li{
      text-decoration: none;
      list-style:none;
  }
  a:hover{
        color: red;
  }
  li:nth-child(11)>a{
        color:#0093FF
  }
`;
