import styled from "styled-components";

export const DivContainer = styled.div``;

export const DivContainerPopular = styled.div`
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
export const DivPopular = styled.div`
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