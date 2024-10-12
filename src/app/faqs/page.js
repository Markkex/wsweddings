"use client";
import { Box } from "@mui/material";
import { Container } from "@mui/system";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import Faqs from "../../components/Faqs/Faqs";
import faqDataJson from "../../data/faqs.json";
import { useEffect, useState } from "react";

export default function Page() {
  const [faqData, setFaqData] = useState([]);

  useEffect(() => {
    setFaqData(faqDataJson.faqs);
  }, [faqData]);

  return (
    <div>
      <Container>
        <Box marginTop={5} marginBottom={2}>
          <div className="text-align-center">
            <h1 className="pages-titles">FAQ</h1>
          </div>
        </Box>
        <Grid container spacing={3}>
          {faqData.map((faq, index) => {
            return <Faqs key={index} faq={faq} index={index} />
          })}
          
        </Grid>
      </Container>
    </div>
  );
}
