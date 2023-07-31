import styled from "styled-components";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";

const iphoneMaxWidth = "1080px"; // 768px - Set the maximum width for iPhone (adjust if needed)
const desktopMinWidth = "769px"; // Set the minimum width for desktop (adjust if needed)

export const CenteredBox = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
  width: 100vw;

  @media (max-width: ${iphoneMaxWidth}) {
    height: 60vh; /* Adjust the height for iPhone */
  }
`;

export const TitleBox = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 10vh;
  width: 50vw;
  font-family: "Lato-bold";
  color: black;
  font-size: 2.5rem;

  @media (max-width: ${iphoneMaxWidth}) {
    font-size: 1.5rem; /* Adjust the font-size for iPhone */
  }
`;

export const DescriptionBox = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #9eb8d7;
  color: black;
  min-height: 40vh;
  width: 88vw;
  border-radius: 30px;
  font-family: Libre Baskerville;
  text-align: center;
  font-size: 1.5rem; 
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  padding: 25px; 

  @media (max-width: ${iphoneMaxWidth}) {
    height: 35vh; /* Adjust the height for iPhone */
    min-height: 40vh;
  }
`;

export const StyledButton = styled(Button)`
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  font-family: "Lato-bold";
  font-size: 2rem;
  background-color: white;
  border-radius: 15px;
  width: 50%;
  margin-top: 20px;
 
  @media (max-width: ${iphoneMaxWidth}) {
    font-size: 18px; /* Adjust the font-size for iPhone */
    width: 50vw; /* Adjust the width for iPhone */
  }
`;
