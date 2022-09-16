import React from "react";
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

const SignUpForm = () => {
  return (
    <Paper elevation={6} sx={PaperSx}>
      <Box className="login_modal">
        <Box className="login_hero">
          <PersonOutlineIcon fontSize="large" />
          <Typography variant="h6" component="a">
            Sign Up
          </Typography>
        </Box>
        <TextField fullWidth label="Name" color="light" />
        <TextField fullWidth label="Email" color="light" />
        <TextField fullWidth label="Password" color="light" />
        <FormControl fullWidth>
          <InputLabel id="select-role">Sign Up As</InputLabel>
          <Select labelId="select-role" id="select-role" label="Sign up as" value="Buyer" color="light">
            <MenuItem value="Buyer">Buyer</MenuItem>
            <MenuItem value="Seller">Seller</MenuItem>
          </Select>
        </FormControl>
        <Button fullWidth variant="contained" sx={ButtonSx}>
          Sign Up
        </Button>
      </Box>
    </Paper>
  );
};

export default SignUpForm;
