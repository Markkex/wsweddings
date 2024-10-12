"use client";

import { Box, Container } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import "./index.css";
import { useEffect, useState } from "react";
import "@splidejs/react-splide/css";
import ProjectsCard from "../../components/ProjectsCard";


export default function Page() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        fetch(process.env.NEXT_PUBLIC_API_SERVER + "/get-projects/index.php",)
        .then((response) => response.json())
        .then((data) => {
          setVideos(data);
        })
        .catch((error) => console.error('Error fetching projects:', error))
      } catch (err) {
        console.error("Error fetching videos:", err);
      }
    };
    fetchVideos();
  }, []);

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
        <Grid item justifyItems="center" alignContent="center" xs={12}>
          {videos.map((project, index) => {
            return (
              <Grid item xs={12} xl={3} key={index} className="p-5">
                  <ProjectsCard project={project} />
              </Grid>
            );
          })}
        </Grid>
      </Grid>
    </Container>
  );
}
