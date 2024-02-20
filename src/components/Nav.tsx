"use client";

import React, { useState } from "react";
import { useTheme } from "@mui/material/styles";
import colors from "@src/styles/colors";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Link from "next/link";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import Image from "next/image";

const pages = ["La Boda", "¿Cómo llegar?", "Confirma tu asistencia"];
const sectionId = ["la-boda", "como-llegar", "confirmar-asistencia"];

function ResponsiveNav() {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const theme = useTheme();

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position="static"
      sx={{
        height: "min-content",
        backgroundColor: theme.palette.secondary.main,
        boxShadow: "none",
      }}
    >
      <Container
        sx={{
          width: "100%",
          maxWidth: "100% !important",
          padding: 0,
        }}
      >
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
              sx={{
                padding: 0,
              }}
            >
              <MenuIcon
                sx={{
                  color: colors.singleText,
                }}
              />
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
              {pages.map((page, index) => {
                const sectionLink = `#${sectionId[index]}`;
                return (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Link href={sectionLink}>{page}</Link>
                  </MenuItem>
                );
              })}
            </Menu>
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              gap: theme.spacings.md,
              alignItems: "center",
              marginBottom: "14px",
              display: { xs: "none", md: "flex" },
            }}
          >
            <Link
              href={"https://araylalo.vercel.app/home"}
              style={{
                marginRight: theme.spacings.lg,
              }}
            >
              <Image
                src={"/images/ara-lalo-logo.png"}
                alt="logo"
                width={256}
                height={200}
                style={{
                  width: "100%",
                  height: "auto",
                }}
              />
            </Link>
            {pages.map((page, index) => {
              const sectionLink = `#${sectionId[index]}`;
              return (
                <Link
                  href={sectionLink}
                  key={`link-${index}-page`}
                  style={{
                    color: colors.primary,
                    padding: "8px 16px",
                  }}
                >
                  {page}
                </Link>
              );
            })}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveNav;
