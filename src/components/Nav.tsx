import React, {useState} from "react";
import AppBar from '@mui/material/AppBar';
import Container from "@mui/material/Container";
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import Link from "next/link";
import IconButton from "@mui/material/IconButton";
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';


const pages = ['La Boda', 'Agenda', '¿Cómo llegar?'];

function ResponsiveNav() {
    const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

    return (
        <AppBar position="static" className="h-min bg-secondary-2 shadow-none">
            <Container className="w-full max-w-full">
                <Toolbar disableGutters>
                    <Box sx={{flexGrow: 1, display: {xs: 'flex', md: 'none'}}}>
                        <IconButton
                        size="large"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleOpenNavMenu}
                        color="inherit"
                        >
                            <MenuIcon className="text-text"/>
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                            >
                            {pages.map((page) => (
                                <MenuItem key={page} onClick={handleCloseNavMenu}>
                                <Typography textAlign="center">{page}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <Box sx={{flexGrow: 1, display: {xs: 'none', md: 'flex'}}} className="gap-m">
                        <Link href={"#"} className="text-primary-1">Ara y Lalo</Link>
                        {
                            pages.map((page, index) => (
                                <Link href={"#"} key={`link-${index}-page`} className="text-text">{page}</Link>
                            ))
                        }
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default ResponsiveNav;