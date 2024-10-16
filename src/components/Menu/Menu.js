"use client";

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import "./index.css";
import Image from "next/image";
import MenuScrollToChange from "../MenuScrollToChange/MenuScrollToChange";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Logo from "../../../public/images/logo.png";
import Modal from "@mui/material/Modal";
import Contact from "../../components/Contact/Contact";
import CancelIcon from "@mui/icons-material/Cancel";
import { useEffect } from "react";
import { useMediaQuery } from "@mui/material";

const pages = [
  {
    name: "Testimonials",
    link: "/testimonials",
  },
  {
    name: "FAQ's",
    link: "/faqs",
  },
  {
    name: "Contact",
    link: "/contact",
  },
  {
    name: "Projects",
    link: "/projects",
  },
];

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "#FEFBF0",
  borderRadius: "25px",
  p: 4,
};

function ResponsiveAppBar() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const pathname = usePathname();

  const isSmallScreen = useMediaQuery("(max-width:800px)");
  const isPhoneScreen = useMediaQuery("(max-width:600px)");
  useEffect(() => {
    let width = null;
    let height = null;
    if (window.innerWidth <= 600) {
      width = "100vw";
    } else {
      width = "auto";
    }

    if (window.innerWidth <= 600) {
      height = "100vh";
    } else {
      height = "auto";
    }

    style.height = height;
    style.width = width;
  }, []);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <React.Fragment>
      <MenuScrollToChange>
      <AppBar
          position={pathname === "/" ? "fixed" : "sticky"}
          className="transparent-background-color no-padding padding-appbar"
          style={{margin: -2}}
        >
          <Toolbar
            disableGutters
            sx={{
              display: "flex",
              justifyContent: "space-evenly",
            }}
            style={{margin: -2}}
          >
            <Box
              onClick={handleOpen}
              //onMouseEnter={handleOpen}
              style={{cursor: "pointer"}}
              sx={{
                display: { xs: "none", md: "flex" },
              }}
              flexGrow={{ xs: 1, md: 1 }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="200"
                height="90"
                viewBox="0 0 358 162"
                fill="none"
              >
                <path
                  d="M241.332 73.7707C135.307 170.669 16.4652 161.787 0 161.787V0L192.407 3.05258L358 2.54382L347.18 5.5964C314.393 16.5139 282.222 39.6293 259.209 57.9274C251.976 63.678 246.092 69.4209 241.332 73.7707Z"
                  fill="#AB7D2A"
                />
              </svg>
              <div className="text-absoulte-inquiry">
                <Typography
                  variant="span"
                  noWrap
                  sx={{
                    fontFamily: "Cinzel",
                    fontWeight: 600,
                    color: "#F2E7D3",
                    textDecoration: "none",
                  }}
                >
                  INQUIRY
                </Typography>
              </div>
            </Box>
            <Box
              sx={{
                display: { xs: "flex", md: "flex" },
                justifyContent: "center",
              }}
              flexGrow={{ xs: 2, md: 1 }}
            >
              <Link href="/">
                <Image
                  src={Logo}
                  width={125}
                  height={75}
                  alt="Wilson Soares Film Logo"
                  priority
                  className="margin-left-50"
                  unoptimized
                />
              </Link>
            </Box>

            <Box
              sx={{
                display: { xs: "flex", md: "none" },
                justifyContent: "flex-end",
                flexGrow: 0,
              }}
            >
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center" className="menu-items-color">
                      <Link href={page.link}>{page.name}</Link>
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                justifyContent: "flex-end",
                flexGrow: 0.7,
              }}
            >
              {pages.map((page) => (
                <Button
                  key={page.name}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 1, color: "white", display: "block" }}
                  className="hover-menu-items"
                >
                  <Link href={page.link} className="menu-items-color">
                    {page.name}
                  </Link>
                </Button>
              ))}
            </Box>
          </Toolbar>
        </AppBar>
      </MenuScrollToChange>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div
            style={{
              display: "flex",
              padding: "20px",
              justifyContent: "flex-end",
            }}
            onClick={handleClose}
          >
            <CancelIcon sx={{ color: "#DDA376" }} />
          </div>
          <div style={{ textAlign: "center" }}>
            <span>
              For a full price list or to place a sample order please fill out
              form below
            </span>
          </div>
          <div style={{ textAlign: "center" }}>
            <span>
              Allow a few moments for form to send and receive confirmation
            </span>
          </div>
          <Contact />
        </Box>
      </Modal>
    </React.Fragment>
  );
}
export default ResponsiveAppBar;
