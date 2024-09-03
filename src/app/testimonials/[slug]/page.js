"use client";
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Container,
  Grid,
} from "@mui/material";
import testimonialDataJson from "../../../data/testimonials.json";
import { Fragment, useEffect, useState } from "react";

export default function Page({ params }) {
  const [testimonial, setTestimonial] = useState();
  useEffect(() => {
    const fetchedTestimonial = testimonialDataJson.testimonials.find(
      (testimonial) => testimonial.url === params.slug
    );

    if (fetchedTestimonial) {
      setTestimonial(fetchedTestimonial);
    }
  }, [params.slug]);

  return (
    <Fragment>
      {testimonial && (
        <Container>
          <Grid container spacing={3} marginTop={5} marginBottom={2}>
            <Grid item xs={12}>
              <Box>
                <div className="title">
                  <h1
                    className="pages-titles"
                    style={{ marginBlockEnd: "1rem", textAlign: "left" }}
                  >
                    {testimonial.signatory}
                  </h1>
                </div>
              </Box>
              <Box>
                <Card
                  style={{
                    backgroundColor: "rgba(221, 163, 118, 0.15)",
                    padding: "0.5rem",
                  }}
                >
                  <CardContent>
                    <Grid container>
                      <Grid item xs={12} md={6}>
                        <div dangerouslySetInnerHTML={{ __html: testimonial.textOne }} />;
                      </Grid>
                      <Grid item xs={12} md={6}>
                        cenas
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </Box>
            </Grid>
          </Grid>
        </Container>
      )}
    </Fragment>
  );
}
