import { Link } from "react-router-dom";
import { Button, Typography } from "@mui/material";
import { Navbar } from "./Navbar";
import {
  CenteredBox,
  DescriptionBox,
  TitleBox,
} from "./LandingStyles";
export const LandingPage = () => {
  return (
    <div className="App">
      <Navbar />
      <CenteredBox>
        <DescriptionBox>
          <TitleBox>
            <Typography
              variant="h1"
              sx={{
                fontSize: "36px",
                fontFamily: "Lato-bold",
                color: "black",
                fontStyle: "normal",
                fontWeight: 800,
                lineHeight: "normal",
              }}
            >
              OWLMART
            </Typography>
          </TitleBox>
          Owl Mart is a web application designed to facilitate buying and
          selling among Rice University students. It resembles a shopping app
          and allows students to sell various products such as furniture,
          clothing, accessories, etc.
          <Button
            variant="contained"
            style={{
              backgroundColor: "white",
              borderRadius: "15px",
              marginTop: "10vh",
            }}
            component={Link}
            to="/home"
          >
            <Typography
              variant="h1"
              sx={{
                fontSize: "24px",
                fontFamily: "Lato-bold",
                color: "black",
                fontStyle: "normal",
                fontWeight: "20px",
                lineHeight: "normal",
                textTransform: "none",
              }}
            >
              Shop Now
            </Typography>
          </Button>
        </DescriptionBox>
        <TitleBox style={{ marginTop: "5vh" }}>
          <Typography
            variant="h1"
            sx={{
              fontSize: "24px",
              fontFamily: "Lato-bold",
              color: "#2E4561",
              fontStyle: "normal",
              fontWeight: 800,
              lineHeight: "normal",
            }}
          >
            Want to start Selling?
          </Typography>
        </TitleBox>
        <Button
          variant="contained"
          style={{
            backgroundColor: "#B6CEEA",
            borderRadius: "15px",
            color: "black",
            marginTop: "1vh",
            fontFamily: "Lato-bold",
            fontSize: "24px", 
            fontStyle: "normal",
            fontWeight: "700",
            lineHeight: "normal",
            textTransform: "none",
          }}
        >
          Sign Up
        </Button>
      </CenteredBox>
    </div>
  );
};
