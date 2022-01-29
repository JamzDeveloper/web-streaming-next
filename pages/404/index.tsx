import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";

import NotFount from "../../assets/animations/404.json";
import styled from "styled-components";

const NotFound = () => {
  const container: any = useRef<HTMLDivElement>(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: NotFount,
    });
  }, []);

  const DivContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: rgba(1, 1, 1, 1);
  `;
  const DivAnimation = styled.div`
    width: 100vw;
    height: 100vh;
 
  `;
  return (
    <DivContainer>
      <DivAnimation ref={container}></DivAnimation>
    </DivContainer>
  );
};

export default NotFound;
