import React, { Fragment } from "react";
import AppBar from "@mui/material/AppBar";
import { Link, useLocation } from "react-router-dom";
import { Container, Typography, Button, Toolbar } from "@mui/material";
import {
  AppBarSx,
  ContainerSx,
  LogInButtonSx,
  SignUpButtonSx,
  TypographySx,
} from "./Styles";

const Header = () => {
  return (
    <div className="header">
      <AppBar position="static" sx={AppBarSx}>
        <Container maxWidth="xl" sx={ContainerSx}>
          <Toolbar>
            <Typography
              className="text-link"
              variant="h4"
              sx={TypographySx}
              component={Link}
              to="/"
            >
              Property Master
            </Typography>
            <AuthButtons />
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
};

//Header buttons changes on home, login and signup pages
const AuthButtons = () => {
  const currPath = useLocation();
  switch (currPath.pathname) {
    case "/login":
      return (
        <Button
          variant="outlined"
          sx={SignUpButtonSx}
          component={Link}
          to="/signup"
        >
          Sign Up
        </Button>
      );
    case "/signup":
      return (
        <Button
          variant="contained"
          sx={LogInButtonSx}
          component={Link}
          to="/login"
        >
          Log in
        </Button>
      );
    default:
      return (
        <Fragment>
          <Button
            variant="contained"
            sx={LogInButtonSx}
            component={Link}
            to="/login"
          >
            Log in
          </Button>

          <Button
            variant="outlined"
            sx={SignUpButtonSx}
            component={Link}
            to="/signup"
          >
            Sign Up
          </Button>
        </Fragment>
      );
  }
};

export default Header;
