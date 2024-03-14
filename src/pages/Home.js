import { Box, Typography } from "@mui/material";
import Menu from "../components/Menu/Menu";
import { Container } from "@mui/system";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import Image from "next/image";
import Footer from "@/components/Footer/Footer";

export default function Homepage() {
  return (
    <div>
      <section className="hero-section">
        <div className="hero-video-frame">
          <video
            id="my-hero-video"
            autoPlay
            muted
            loop
            playsInline
            preload="true"
          >
            <source src="hero-video-v2.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>
      <Container>
        <Box p={5}>
          <div className="clip-color-container">
            <div className="clip-color-div">
              <span>Magic Moments</span>
            </div>
          </div>
        </Box>
        <Box p={2}>
          <Grid container spacing={3}>
            <Grid
              xs={0}
              md={4}
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Image
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%", height: "auto" }} // optional
                src="/images/wedding-cake.jpeg"
                alt="wedding cake"
              />
            </Grid>
            <Grid
              xs={0}
              md={4}
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Image
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%", height: "auto" }} // optional
                src="/images/couples-dance.jpeg"
                alt="Couples Dancing"
              />
            </Grid>
            <Grid
              xs={12}
              md={4}
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Image
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%", height: "auto" }} // optional
                src="/images/couples-cut-cake.jpeg"
                alt="Couple Cutting Cake"
              />
            </Grid>
            <Grid md={3}></Grid>
            <Grid xs={12} md={6} style={{ textAlign: "center" }}>
              <Box p={2}>
                <span className="about-me-hello">HELLO THERE</span>
                <br />
                <br />
                <span className="about-me-text">
                  I am Wilson Soares, a wedding videographer with 10 years
                  experience in the weddings and events area. <br /> I provide
                  video capture, edition, post production and drone services and
                  my goal is to offer responsible and trustworthy services to
                  keep clients happy and satisfied with the results.
                </span>
              </Box>
            </Grid>
            <Grid md={3}></Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
}
