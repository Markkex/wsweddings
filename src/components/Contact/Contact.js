"use client";

import { Box, Container, TextField } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { useState } from "react";

import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import "./index.css";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [budget, setBudget] = useState(0);
  const [message, setMessage] = useState("");

  const submit = async () => {

    let formData = new FormData();
    formData.append('name', name)
    formData.append('email', email)
    formData.append('budget', budget)
    formData.append('message', message)
    const obj = {
      name: name,
      email: email,
      budget: budget,
      message: message,
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(obj),
      });

      if (!response.ok) {
        console.log("falling over");
        throw new Error(`response status: ${response.status}`);
      }
      const responseData = await response.json();
      console.log(responseData["message"]);

      alert("Message successfully sent");
    } catch (err) {
      console.error(err);
      alert(err);
    }
  };

  return (
    <Container>
      <Box p={3} m={5}>
        <Grid container spacing={3}>
          <Grid item xs={0} md={2}></Grid>
          <Grid
            item
            xs={12}
            md={8}
            className="contact-container text-align-center"
          >
            <Grid>
              <Grid m={4} item xs={0} md={12}>
                <TextField
                  id="standard-basic"
                  label="Your Name"
                  variant="standard"
                  fullWidth
                  className="input-color label"
                  onChange={(e) => setName(e.target.value)}
                />
              </Grid>
              <Grid m={4} item xs={0} md={12}>
                <TextField
                  id="standard-basic"
                  label="Your Email"
                  variant="standard"
                  fullWidth
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Grid>
              <Grid m={4} item xs={0} md={12}>
                <TextField
                  id="standard-basic"
                  label="Your Budget"
                  variant="standard"
                  fullWidth
                  onChange={(e) => setBudget(e.target.value)}
                />
              </Grid>
              <Grid m={4} item xs={0} md={12}>
                <TextField
                  id="standard-basic"
                  label="Your Message"
                  variant="standard"
                  fullWidth
                  multiline
                  maxRows={10}
                  style={{ color: "color: #000" }}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </Grid>
              <Grid m={4} marginLeft={8} marginRight={8} item xs={0} md={6}>
                <BootstrapButton className="contact-button" onClick={submit}>
                  SEND NOW
                </BootstrapButton>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={0} md={2}></Grid>
        </Grid>
      </Box>
    </Container>
  );
}

const BootstrapButton = styled(Button)({
  boxShadow: "none",
  textTransform: "none",
  fontSize: 16,
  width: "100%",
  padding: "12px 12px",
  border: "1px solid",
  color: "#F2E7D3",
  lineHeight: 1.5,
  backgroundColor: "#DDA376",
  borderColor: "#DDA376",
  fontFamily: ["Cinzel", "-apple-system"].join(","),
  "&:hover": {
    backgroundColor: "#F2E7D3",
    borderColor: "#DDA376",
    boxShadow: "none",
    color: "#DDA376",
  },
  "&:active": {
    boxShadow: "none",
    backgroundColor: "#F2E7D3",
    borderColor: "#DDA376",
    color: "#DDA376",
  },
});
