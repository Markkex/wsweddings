"use client";

import { Box, Container } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import "./index.css";
import Contact from "@/components/Contact/Contact";
import { Fragment, useEffect, useState } from "react";
import testimonialDataJson from "../../data/testimonials.json";
import TestimonialsCard from "@/components/TestimonialsCard/TestimonialsCard";
import Image from "next/image";

const applyCorrectGrid = (testimonial) => {
    if(testimonial.initialCol >= 8) {
        return (
            <Fragment>
                <Grid xs={12} md={testimonial.initialCol}>
                <TestimonialsCard
                  key={testimonial.url}
                  testimonial={testimonial}
                />
                </Grid>
                <Grid md={testimonial.lastCol}></Grid>
            </Fragment>
        );
    } 
    if(testimonial.lastCol >= 8) {
        return (
            <Fragment>
                <Grid md={testimonial.initialCol}></Grid>
                <Grid xs={12} md={testimonial.lastCol}>
                <TestimonialsCard
                  key={testimonial.url}
                  testimonial={testimonial}
                />
                </Grid>
            </Fragment>
        );
    }
}

export default function Page() {
  const [testimonialData, setTestimonialData] = useState([]);

  useEffect(() => {
    setTestimonialData(testimonialDataJson.testimonials);
    console.log(testimonialData);
  }, [testimonialData]);

  return (
    <Container>
      <Grid container spacing={3} marginTop={5} marginBottom={2}>
        <Grid xs={12}>
          <Box>
            <div className="title">
              <h1 className="pages-titles" style={{ marginBlockEnd: "1rem" }}>
                Testimonials
              </h1>
            </div>
          </Box>
        </Grid>
        <Grid xs={12} md={6}>
          <Grid container marginTop={1} marginBottom={1}>
            {testimonialData.map((testimonial) => {
              return applyCorrectGrid(testimonial);
            })}
          </Grid>
        </Grid>
        <Grid xs={12} md={6}>
        
        <div className="testimonials-background-image">
        
        </div>
        
        </Grid>
      </Grid>
    </Container>
  );
}
