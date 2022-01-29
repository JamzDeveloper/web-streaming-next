import styled from "styled-components";
import { InferGetStaticPropsType } from "next";
import Banner from "../components/banner";
import Carousel from "../components/carousel";
import { Response } from "../types/Movies";
//import { DivContainer, DivContainerPopular, DivPopular } from "./styles";
const DivContainer = styled.div``;

const DivContainerPopular = styled.div`
  width: 100vw;
  height: 40vh;
  background: rgb(1, 1, 1);
  background: linear-gradient(
    0deg,
    rgba(1, 1, 1, 1) 0%,
    rgba(1, 1, 1, 0.989233193277311) 90%,
    rgba(1, 1, 1, 0) 100%
  );
  /*  margin-top: -120px;
  */
  margin-top: -10px;
  z-index: 1000;
`;
const DivPopular = styled.div`
  background: rgb(1, 1, 1);
  background: linear-gradient(0deg, rgba(1, 1, 1, 1) 0%, rgba(1, 1, 1, 0) 100%);
  margin-top: -45px;
  margin-left: 40px;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: start;
  padding: 3px;
  h2 {
    margin-left: 50px;
    color: white;
  }
`;

const API_URL: string =
  "https://api.themoviedb.org/3/movie/now_playing?api_key=ed9029ed89725b40d35194fa79616a38&language=es-Es&page=1";
const Home = ({ movies }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <DivContainer>
      <Banner></Banner>
      <DivContainerPopular>
        <DivPopular>
          <h2>Premiere Movies</h2>
          <Carousel movies={movies.results} />
        </DivPopular>
      </DivContainerPopular>
    </DivContainer>
  );
};

export const getStaticProps = async () => {
  const res = await fetch(API_URL);
  const movies: Response = await res.json();

  return {
    props: {
      movies,
    },
  };
};

export default Home;
