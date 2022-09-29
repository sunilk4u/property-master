import React, { Fragment } from "react";
import Header from "../../components/Header/Header";
import Search from "../../components/Search/Search";
import { Box, Typography } from "@mui/material";
import { HomeSearchSx, HomeTypoSx } from "./Styles";

const Home = () => {
  return (
    <Fragment>
      <Header />
      <Typography
        variant="h1"
        component="h1"
        className="call_text"
        sx={HomeTypoSx}
      >
        Find Your Dream Place.
      </Typography>
      <Box className="homeSearch" sx={HomeSearchSx}>
        <Search />
      </Box>
    </Fragment>
  );
};

export default Home;
