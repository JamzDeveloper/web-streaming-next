import { InferGetStaticPropsType } from "next";
import Banner from "../components/banner";
import Carousel from "../components/carousel";
import { Response } from "../types/Movies";
import { DivContainer, DivContainerPopular, DivPopular } from "./styles";

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