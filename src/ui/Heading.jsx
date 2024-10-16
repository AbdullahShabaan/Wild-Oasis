import styled, { css } from "styled-components";

const test = css`
  background-color: black;
`;
const Heading = styled.h1`
  ${(props) =>
    props.type == "h1" &&
    `font-size: 50px;
  color: red;
  text-align: center;
  font-weight: bold;
  ${test}`}

  ${(props) =>
    props.type == "h2" &&
    `font-size: 20px;
  color: blue;
  text-align: center;
  font-weight: bold;
  ${test}`}

${(props) =>
    props.type == "h3" &&
    `font-size: 20px;
  color: yellow;
  text-align: center;
  font-weight: bold;
  ${test}`}
`;

export default Heading;
