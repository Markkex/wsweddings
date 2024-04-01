import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./index.css";
import parse from "html-react-parser";

const card = (testimonial) => (
  <React.Fragment>
    <CardContent>
      <div style={{ width: "100%" }}>
        <Typography>{parse(testimonial.textOne)}</Typography>
      </div>
      <div style={{paddingTop: '15px'}}>
        <Typography align="right" sx={{color: "#AE6D3F"}}>~ {testimonial.signatory}</Typography>
      </div>
    </CardContent>
  </React.Fragment>
);

export default function TestimonialsCard({ testimonial }) {
  return (
    <Box sx={{ marginTop: '20px', marginBottom: '20px'}}>
      <Card
        className="testimonial-card"
      >
        {card(testimonial)}
      </Card>
    </Box>
  );
}
