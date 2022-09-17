import React, { useState } from "react";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import { PaperSx } from "./Styles";
import { Box } from "@mui/system";
import { ButtonSx } from "./Styles";
import { ValidateEmail, ValidateName, ValidatePassword } from "./Validator";

const SignUpForm = () => {
  const [formValues, setFormValues] = useState({
    name: {
      value: "",
      error: false,
      msg: "Name must contain more than 3 characters",
    },
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

  //handle name field changes
  const nameHandler = (e) => {
    if (ValidateName(e.currentTarget.value)) {
      formValues.name.error = false;
    } else {
      formValues.name.error = true;
    }
    setFormValues({
      ...formValues,
      name: { ...formValues.name, value: e.currentTarget.value },
    });
  };

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
          <PersonOutlineIcon fontSize="large" />
          <Typography variant="h6" component="a">
            Sign Up
          </Typography>
        </Box>
        <TextField
          fullWidth
          required
          label="Name"
          color="light"
          value={formValues.name.value}
          onChange={nameHandler}
          error={formValues.name.error}
          helperText={formValues.name.msg}
        />
        <TextField
          fullWidth
          required
          label="Email"
          value={formValues.email.value}
          onChange={emailHandler}
          error={formValues.email.error}
          helperText={formValues.email.msg}
          color="light"
        />
        <TextField
          fullWidth
          required
          label="Password"
          value={formValues.password.value}
          onChange={passwordHandler}
          error={formValues.password.error}
          helperText={formValues.password.msg}
          color="light"
        />
        <FormControl fullWidth>
          <InputLabel id="select-role">Sign Up As</InputLabel>
          <Select
            labelId="select-role"
            id="select-role"
            label="Sign up as"
            value="Buyer"
            color="light"
          >
            <MenuItem value="Buyer">Buyer</MenuItem>
            <MenuItem value="Seller">Seller</MenuItem>
          </Select>
        </FormControl>
        <Button
          fullWidth
          variant="contained"
          sx={ButtonSx}
          disabled={formValues.button}
        >
          Sign Up
        </Button>
      </Box>
    </Paper>
  );
};

export default SignUpForm;
