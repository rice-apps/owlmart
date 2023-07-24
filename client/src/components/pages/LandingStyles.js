import styled from "styled-components";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";

export const CenteredBox = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 80vh;
  width: 100vw;
`;

export const TitleBox = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10vh;
  width: 50;vw
  font-family: "Lato-bold";
  color: black;
  font-size: 2rem;
`;

export const DescriptionBox = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #9eb8d7;
  color: black;
  height: 47vh;
  width: 88vw;
  border-radius: 30px;
  font-family: Libre Baskerville;
  text-align: center;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const StyledButton = styled(Button)`
    display: flex;
    justify-content: center;
    align-items: center;
    color: black;
    font-family: "Lato-bold";
    font-size: 24px;
    background-color: white;
    border-radius: 15px;
    padding: 10px
    width: 10vw;
`;
