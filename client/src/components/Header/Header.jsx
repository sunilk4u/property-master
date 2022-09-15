import React from "react";
import AppBar from "@mui/material/AppBar";
import { Link } from "react-router-dom";
import { Container, Typography, Button, Toolbar } from "@mui/material";
import { AppBarSx, ContainerSx, LogInButtonSx, SignUpButtonSx, TypographySx } from "./Styles";

const Header = () => {
  return (
    <div className="header">
      <AppBar position="static" sx={AppBarSx}>
        <Container maxWidth="xl" sx={ContainerSx}>
          <Toolbar>
            <Typography variant="h4" sx={TypographySx} component="a">
              <Link className="text-link" to="/">Property Master</Link>
            </Typography>
            <Button variant="contained" sx={LogInButtonSx}>Log in</Button>
            <Button variant="outlined" sx={SignUpButtonSx}>Sign Up</Button>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
};

export default Header;
