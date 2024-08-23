"use client";

import { Box, Container } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import "./index.css";
import Contact from "@/components/Contact/Contact";
import { Fragment, useEffect, useState } from "react";
import testimonialDataJson from "../../data/testimonials.json";
import TestimonialsCard from "@/components/TestimonialsCard/TestimonialsCard";
import Image from "next/image";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import projects from "../../data/projects.json";
import "@splidejs/react-splide/css";
import ProjectsCard from "@/components/ProjectsCard";
import getApiVideos from "../api/contact/getApiVideos";

export default function Page() {
  const [videos, setVideos] = useState([]);
  
  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const res = await getApiVideos(projects.housingProjects.ids);
        console.log(res); // This will show the API response in the console
        if (res) {
          setVideos(res);
        } else {
          console.log("No items found in the response");
        }
      } catch (err) {
        console.error("Error fetching videos:", err);
      }
      
    };
    fetchVideos()
  }, [])

  return (
    <Container>
      <Grid container spacing={3} marginTop={5} marginBottom={2}>
        <Grid item xs={12}>
          <Box>
            <div className="title">
              <h1
                className="pages-titles"
                style={{ marginBlockEnd: "1rem", textAlign: "center" }}
              >
                Projects
              </h1>
            </div>
          </Box>
        </Grid>
          {videos.map((project, index) => {
            return (
              <Grid item container key={index} spacing={0} xs={12} md={6} xl={4} style={{textAlign: "center"}} justifyContent="center"
  alignItems="center">
                <ProjectsCard project={project} />
              </Grid>
            );
          })}
        </Grid>
    </Container>
  );
}
