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
  const [isSent, setIsSent] = useState(false);

  const submit = async () => {
    if (name === "" || email === "" || budget === "" || message === "") {
      alert("You need to fill all the required fields");
      return;
    }

    let formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("budget", budget);
    formData.append("message", message);
    const obj = {
      name: name,
      email: email,
      budget: budget,
      message: message,
    };

    try {
      const response = await fetch(
        "https://api.wilsonsoaresfilm.com/index.php",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          mode: "no-cors",
          body: JSON.stringify(obj),
        }
      );

      alert("Message successfully sent. We will contact you shortly!");
      setName("");
      setEmail("");
      setBudget("");
      setMessage("");
      setIsSent(true);
    } catch (err) {
      console.error(err);
      alert(err);
    }
  };

  return (
    
      <Box  m={5}>
        <Grid container spacing={3}>
          <Grid
            item
            xs={12}
            md={12}
            className="contact-container text-align-center"
          >
            <Grid>
              <Grid m={4} item xs={12} md={12}>
                <TextField
                  id="standard-basic"
                  label="Your Name"
                  variant="standard"
                  fullWidth
                  className="input-color label"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                />
              </Grid>
              <Grid m={4} item xs={12} md={12}>
                <TextField
                  id="standard-basic"
                  label="Your Email"
                  variant="standard"
                  fullWidth
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
              </Grid>
              <Grid m={4} item xs={12} md={12}>
                <TextField
                  id="standard-basic"
                  label="Your Budget (€)"
                  variant="standard"
                  fullWidth
                  onChange={(e) => setBudget(e.target.value)}
                  value={budget}
                />
              </Grid>
              <Grid m={4} item xs={12} md={12}>
                <TextField
                  id="standard-basic"
                  label="Your Message"
                  variant="standard"
                  fullWidth
                  multiline
                  maxRows={10}
                  style={{ color: "color: #000" }}
                  onChange={(e) => setMessage(e.target.value)}
                  value={message}
                />
              </Grid>
              {isSent === false && (
                <Grid m={4} marginLeft={8} marginRight={8} item xs={12} md={6}>
                  <BootstrapButton className="contact-button" onClick={submit}>
                    SEND NOW
                  </BootstrapButton>
                </Grid>
              )}
            </Grid>
          </Grid>
        </Grid>
      </Box>
    
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
