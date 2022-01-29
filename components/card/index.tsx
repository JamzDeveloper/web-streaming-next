import { NextPage } from "next";

import styled from "styled-components";
type Props = {
  src: string;
  name: string;
};

const Figure = styled.figure`
  margin: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img {
    border-radius: 15px;
    width: 70%;
    height: 70%;
  }
  figcaption {
    font-size: 1.2rem;
    font-weight: bold;
    color: #ffffff;
    width: 70%;
    text-align: center;
  }
  @media (max-width: 700px) {
    figcaption {
      font-size: 1rem;
    }
  }
`;

const card: NextPage<Props> = ({ src, name }) => {
  return (
    <Figure>
      <img src={src} alt={name}></img>
      <figcaption>{name}</figcaption>
    </Figure>
  );
};

export default card;
