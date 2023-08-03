import { Link } from "react-router-dom";
import { Button, Typography, Box } from "@mui/material";
import Navbar from "../Navbar";

const iphoneMaxWidth = "768px";

export const LandingPage = () => {
  return (
    <div className="App">
      <Navbar />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "80vh",
          width: "100vw",
          [`@media (max-width: ${iphoneMaxWidth})`]: {
            height: "60vh",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            backgroundColor: "#9eb8d7",
            color: "black",
            height: "47vh",
            width: "88vw",
            borderRadius: "30px",
            fontFamily: "Libre Baskerville-regular",
            textAlign: "center",
            fontSize: "24px",
            fontStyle: "normal",
            fontWeight: 400,
            lineHeight: "normal",
            [`@media (max-width: ${iphoneMaxWidth})`]: {
              height: "35vh",
            },
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "10vh",
              width: "50vw",
              fontFamily: "Lato-bold",
              color: "black",
              fontSize: "2rem",
              [`@media (max-width: ${iphoneMaxWidth})`]: {
                fontSize: "1.5rem",
              },
            }}
          >
            <Typography
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
          </Box>
          Owl Mart is a web application designed to facilitate buying and
          selling among Rice University students. It resembles a shopping app
          and allows students to sell various products such as furniture,
          clothing, accessories, etc.
          <Button
            variant="contained"
            component={Link}
            to="/home"
            sx={{
              width: "12rem",
              backgroundColor: "white",
              borderRadius: "15px",
              marginTop: "10vh",
            }}
          >
            <Typography

              sx={{
                width: "12rem",
                fontSize: "24px",
                fontFamily: "Lato-regular",
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
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "10vh",
            width: "50vw",
            fontFamily: "Lato-bold",
            color: "black",
            fontSize: "2rem",
            marginTop: "10vh",
            [`@media (max-width: ${iphoneMaxWidth})`]: {
              fontSize: "1.5rem",
            },
          }}
        >
          <Typography
            sx={{
              fontSize: "36px",
              fontFamily: "Lato-bold",
              color: "#2E4561",
              fontStyle: "normal",
              fontWeight: 800,
              lineHeight: "normal",
            }}
          >
            Want to start selling?
          </Typography>
        </Box>
        <Button
          variant="contained"
          sx={{
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
      </Box>
    </div>
  );
};
