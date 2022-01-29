import Slider from "react-slick";
import styled from "styled-components";
import { SettingsType } from "./SettingsType";
import { Result } from "../../types/Movies";
import UseWindowSize from "../../hooks/useWindowSize";
import Card from "../card";

const DivContainer = styled.div`
  z-index: 0;
  width: 57vw;
  height: 40vh;
  padding: 20px;

  background-color: rbga(1, 1, 1, 1);
  margin-left: 40px;
`;

const Corousel = ({ movies }: any) => {
  const { width } = UseWindowSize();
  const settings: SettingsType = {
    dots: false,
    infinite: true,
    slidesToShow: width > 900 ? 4 : width > 604 ? 3 : 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 3000,
    cssEase: "linear",
  };
  
  return (
    <DivContainer>
      <Slider {...settings}>
        {movies.map((movie: Result) => (
          <Card
            key={movie.id}
            src={"https://image.tmdb.org/t/p/w500/" + movie.poster_path}
            name={(movie.original_title.length>24)?movie.original_title.substring(0,20)+"...":movie.original_title}
          />
        ))}
      </Slider>
    </DivContainer>
  );
};

export default Corousel;
