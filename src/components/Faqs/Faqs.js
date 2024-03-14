"use client";

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import "./index.css";
import Image from "next/image";
import Grid from "@mui/material/Unstable_Grid2";
import PhoneTwoToneIcon from "@mui/icons-material/PhoneTwoTone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import Link from "next/link";

function Faqs({ faq, index }) {
  return (
      
        <Grid
          xs={12}
          md={4}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <div id={index} className="w-100 text-align-center faq-container">
            <div className="faq-question faq-title-height faq-container-title">
              <span className="faq-question-title">{faq.question}</span>
            </div>
            <div className="text-align-center">
              <p className="faq-question-answer">{faq.answer}</p>
            </div>
          </div>
        </Grid>
  );
}
export default Faqs;
