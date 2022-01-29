import type { NextPage } from "next";

import PlayCircle from "../../assets/components-svg/play-circle";

import {
  DivBar,
  Img,
  ContentBanner,
  DivAction,
  Button,
  Button2,
} from "./styles";
const banner = () => {
  return (
    <DivBar>
      <Img src="/images/friends.jpg" alt="friends"></Img>

      <ContentBanner>
        <h2>NOW PLAYNG</h2>
        <p>They are back in Central Perk. For one night only.</p>
        <DivAction>
          <Button aria-label="Play">
            <PlayCircle width={45} height={45} />
          </Button>
          <Button2>
            {" "}
            <a>Más informacion</a>
          </Button2>
        </DivAction>
      </ContentBanner>
    </DivBar>
  );
};

export default banner;
