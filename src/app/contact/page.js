"use client";

import { Box, Container } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import "./index.css";
import Contact from "@/components/Contact/Contact";

export default function Page() {
  return (
    <Container>
      <Box marginTop={5} marginBottom={2}>
        <div className="text-align-center">
          <h1 className="pages-titles" style={{marginBlockEnd: "1rem"}}>Contact</h1>
          <Grid container spacing={3}>
            <Grid xs={4}></Grid>
            <Grid
              xs={12}
              md={4}
              display="flex"
              justifyContent="center"
              alignItems="center"
              flexDirection="column"
            >
              <div>
                <span>
                  For a full price list or to place a sample order please fill
                  out the form below.
                </span>
              </div>
              <div>
                <span>
                  Allow a few moments for the form to send and receive confirmation.
                </span>
              </div>
            </Grid>
            <Grid xs={4}></Grid>
          </Grid>
        </div>
        <Box>
        <Grid container spacing={3}>
            <Grid item xs={0} md={2}></Grid>
            <Grid item xs={12} md={8}>
              <Contact />
            </Grid>
          <Grid item xs={0} md={2}></Grid>
          </Grid>
        </Box>
      </Box>
      <Box></Box>
    </Container>
  );
}
