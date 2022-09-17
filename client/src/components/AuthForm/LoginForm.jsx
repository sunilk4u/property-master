import React from "react";
import { useState } from "react";
import { Button, Paper, TextField, Typography } from "@mui/material";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import { PaperSx } from "./Styles";
import { Box } from "@mui/system";
import { ButtonSx } from "./Styles";
import { ValidateEmail, ValidatePassword } from "./Validator";

const LoginForm = () => {
  //form values use state
  const [formValues, setFormValues] = useState({
    email: {
      value: "",
      error: false,
      msg: "Enter a valid email",
    },
    password: {
      value: "",
      error: false,
      msg: "Password must be 8 characters long and must contain a number",
    },
    button: true,
  });

  //handle email field changes
  const emailHandler = (e) => {
    if (ValidateEmail(e.currentTarget.value)) {
      formValues.email.error = false;
    } else {
      formValues.email.error = true;
    }
    setFormValues({
      ...formValues,
      email: { ...formValues.email, value: e.currentTarget.value },
    });
  };

  //handle password field changes
  const passwordHandler = (e) => {
    if (ValidatePassword(e.currentTarget.value)) {
      formValues.password.error = false;
    } else {
      formValues.password.error = true;
    }

    //if both email and password does not have error then enable button
    if (formValues.email.error || formValues.password.error) {
      formValues.button = true;
    } else {
      formValues.button = false;
    }

    setFormValues({
      ...formValues,
      password: { ...formValues.password, value: e.currentTarget.value },
    });
  };

  return (
    <Paper elevation={6} sx={PaperSx}>
      <Box className="login_modal">
        <Box className="login_hero">
          <LockOpenIcon fontSize="large" />
          <Typography variant="h6" component="a">
            Log In
          </Typography>
        </Box>
        <TextField
          fullWidth
          label="Email"
          color="light"
          type="email"
          required
          value={formValues.email.value}
          onChange={emailHandler}
          error={formValues.email.error}
          helperText={formValues.email.msg}
        />
        <TextField
          fullWidth
          type="password"
          label="Password"
          color="light"
          required
          value={formValues.password.value}
          onChange={passwordHandler}
          error={formValues.password.error}
          helperText={formValues.password.msg}
        />
        <Button
          fullWidth
          type="submit"
          variant="contained"
          sx={ButtonSx}
          disabled={formValues.button}
        >
          Log In
        </Button>
      </Box>
    </Paper>
  );
};

export default LoginForm;
