import { Box } from "@mui/system";
import React from "react";
import PropertyCard from "../../components/Card/ProeprtyCard";
import Header from "../../components/Header/Header";
import { Listings, Sidebar } from "./Styles";

const Listing = () => {
  return (
    <>
      <Header />
      <Box className="listings" sx={Listings}>
        <Box className="sidebar" sx={Sidebar}>
          <p>Sidebar</p>
        </Box>
        <Box className="listing_cards">
          <PropertyCard />
        </Box>
      </Box>
    </>
  );
};

export default Listing;
