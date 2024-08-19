"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import "./index.css";
import Image from "next/image";
import Grid from "@mui/material/Unstable_Grid2";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";

function Footer() {
  return (
    <Box p={5} className="background-footer global-text-cormorand">
      <Container>
        <Grid container spacing={3}>
          <Grid
            xs={12}
            md={4}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <div style={{ textAlign: "center" }}>
              <div>
                <a href="tel:+351915129665">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="72"
                    height="72"
                    viewBox="0 0 72 72"
                    fill="none"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M36 72C55.8823 72 72 55.8823 72 36C72 16.1177 55.8823 0 36 0C16.1177 0 0 16.1177 0 36C0 55.8823 16.1177 72 36 72ZM23 17C24.9289 16.4999 32.5 23 31.5 25.5C31.0428 26.643 30.1044 27.3745 29.1537 28.1155C28.0251 28.9952 26.8792 29.8885 26.5 31.5C26.1422 33.0205 26.0709 33.998 26.5 35.5C27.101 37.6035 28.6299 38.9479 30.236 40.3601C30.6571 40.7304 31.0836 41.1054 31.5 41.5C33.4069 43.3068 36.5 45 36.5 45C36.5 45 39.2184 46.2581 41 46C42.537 45.7773 43.172 44.5458 43.8182 43.2924C44.4359 42.0943 45.064 40.8762 46.5 40.5C51.4436 39.2047 57.2806 44.5525 56 49.5C55.2035 52.5772 53.0563 54.1267 50 55C48.3915 55.4596 47.2913 55.3094 45.7907 55.1047C45.5398 55.0705 45.2776 55.0347 45 55C43.0625 54.7578 40.1181 54.1363 37.5 52.5C33.5 50 32.644 49.2482 29 46C28.5369 45.5871 28.1245 45.2237 27.7338 44.8795C26.0378 43.385 24.7511 42.2511 21.5 39C17 34.5 16.5 30.5 16.5 29C16.5 26.2042 18 22 18 22C18 22 20.3269 17.693 23 17Z"
                      fill="#AA5E28"
                    />
                  </svg>
                </a>
              </div>
              <br />
              <div>
                <span>wilsonsoaresfilm@gmail.com</span>
              </div>
              <br />
              <div>
                Sitio Quatrim do Norte 701Z, <br />
                8700-127 Olhão
              </div>
            </div>
          </Grid>
          <Grid
            xs={12}
            md={4}
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
          >
            <div>
              <Image
                width={250}
                height={150}
                src="/images/logo.png"
                alt="Big Wilson Weddings Logo"
              />
              <div className="flex-space-evenly">
                <a href="https://www.youtube.com/@wilsonsoaresweddings" target="_blank">
                  <YouTubeIcon
                    fontSize="large"
                    sx={{ fill: "#DDA376;", fontSize: "50px" }}
                  />
                </a>
                <a href="https://www.instagram.com/wilsonsoaresweddings/" target="_blank">
                  <InstagramIcon
                    fontSize="large"
                    sx={{ fill: "#DDA376;", fontSize: "50px" }}
                  />
                </a>
                <a href="https://www.linkedin.com/in/wilson-soares-048ab882/" target="_blank">
                  <LinkedInIcon
                    fontSize="large"
                    sx={{ fill: "#DDA376;", fontSize: "50px" }}
                  />
                </a>
              </div>
            </div>
          </Grid>
          <Grid
            xs={12}
            md={4}
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
          >
            <div>
              <Image
                width={50}
                height={50}
                src="/images/logo2.png"
                alt="Small Wilson Weddings logo"
              />
              <div className="flex-space-evenly global-text-cormorand">
                Wilson Soares Film <br />
                All rights reserved
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
export default Footer;
