"use client";

import { Box, Typography } from "@mui/material";
import { Container } from "@mui/system";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Homepage() {
  const [uris, setUris] = useState([
    {
      name: "video-web-phone.mp4",
    },
    {
      name: "hero-video-v2.mp4",
    },
    {
      name: "video-web-4k.mp4",
    },
  ]);
  const [videoUri, setVideoUri] = useState("");
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getCorrectUrlForFilm();
  }, []);

  const getCorrectUrlForFilm = async () => {
    let videoUri = "";
    if (window.innerWidth < 901) {
      videoUri = uris[0].name;
    } else if (window.innerWidth >= 901 && window.innerWidth < 1901) {
      videoUri = uris[1].name;
    } else {
      videoUri = uris[2].name;
    }
    setVideoUri(videoUri);
    setLoading(false);
  };

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
            {!loading && 
              <source src={videoUri} type="video/mp4" />}
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
