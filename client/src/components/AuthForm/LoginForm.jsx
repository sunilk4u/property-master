import React from "react";
import { Button, Paper, TextField, Typography } from "@mui/material";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import { PaperSx } from "./Styles";
import { Box } from "@mui/system";
import { ButtonSx } from "./Styles";

const LoginForm = () => {
  return (
    <Paper elevation={6} sx={PaperSx}>
      <Box className="login_modal">
        <Box className="login_hero">
          <LockOpenIcon fontSize="large" />
          <Typography variant="h6" component="a">
            Log In
          </Typography>
        </Box>
        <TextField fullWidth label="Email" color="light" />
        <TextField fullWidth label="Password" color="light" />
        <Button fullWidth variant="contained" sx={ButtonSx}>
          Log In
        </Button>
      </Box>
    </Paper>
  );
};

export default LoginForm;
