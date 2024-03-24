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
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import "./index.css";
import Image from "next/image";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import MenuScrollToChange from "../MenuScrollToChange/MenuScrollToChange";
import Link from "next/link";

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
];

import { usePathname } from 'next/navigation'


function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const pathname = usePathname()

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
    <MenuScrollToChange>
      <AppBar
        position={pathname === '/' ? "fixed" : "sticky"}
        className="transparent-background-color no-padding padding-appbar"
      >
        
          <Toolbar disableGutters>
          
            <Box
              sx={{
                display: { xs: "flex", md: "flex" },
              }}
              flexGrow={{xs: 1, md: 1}}
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
                  onClick={() => console.log("cenas")}
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
                justifyContent: "center"
              }}
              flexGrow={3}
            >
            <Link href="/">
              <Image
                src="/images/logo.png"
                width={125}
                height={75}
                alt="Wilson Soares Film Logo"
                priority
                className="margin-left-50"
              />
              </Link>
            </Box>

            <Box sx={{  display: { xs: "flex", md: "none" }, justifyContent:"flex-end", flexGrow: "1" }}>
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
            <Box sx={{ display: { xs: "none", md: "flex" }, justifyContent:"flex-end", flexGrow: "1" }}>
              {pages.map((page) => (
                <Button
                  key={page.name}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  <Link href={page.link} className="menu-items-color">{page.name}</Link>
                </Button>
              ))}
            </Box>
            
          </Toolbar>
        
      </AppBar>
    </MenuScrollToChange>
  );
}
export default ResponsiveAppBar;
