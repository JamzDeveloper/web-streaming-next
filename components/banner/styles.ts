import styled from "styled-components";
export const DivBar = styled.div`
  background: rgb(1, 1, 1);
  background: radial-gradient(
    circle,
    rgba(1, 1, 1, 0) 0%,
    rgba(1, 1, 1, 0.3253676470588235) 34%,
    rgba(1, 1, 1, 0.5298494397759104) 48%,
    rgba(1, 1, 1, 1) 100%
  );
  /* background: rgb(0, 0, 0);
background: radial-gradient(
  circle,
  rgba(0, 0, 0, 0.06206232492997199) 0%,
  rgba(0, 0, 0, 0.5522584033613445) 100%
);*/
  z-index: 500;
  width: 100vw;
`;

export const Img = styled.img`
  position: relative;
  width: 100vw;
  height: 90vh;
  background-color: black;
  z-index: -1;

  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* Internet Explorer */
  -khtml-user-select: none; /* KHTML browsers (e.g. Konqueror) */
  -webkit-user-select: none; /* Chrome, Safari, and Opera */
  -webkit-touch-callout: none; /* Disable Android and iOS callouts*/

  @media (max-width: 1200px) {
    object-fit: cover;
  }
`;
export const ContentBanner = styled.div`
  position: absolute;
  top: 50%;
  left: 5%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: start;
  color: white;

  height: 30%;
  font-size: 1.25rem;

  @media (max-width: 700px) {
    font-size: 1rem;
  }
`;
export const DivAction = styled.div`
  display: flex;

  align-items: center;
  width: 80%;
  height: 50px;
`;
export const Button = styled.button`
  margin-left: 10px;
  background-color: white;
  border: none;
  cursor: pointer;
  border-radius: 50%;
  width: 45px;
  height: 45px;
`;

export const Button2 = styled.button`
  margin-left: 10px;
  background-color: rgba(1, 1, 1, 0.5);
  border: none;
  cursor: pointer;
  font-size: 20px;
  padding: 7px;
  border-radius: 15px;
  a {
    color: #ffffff;
  }
`;
