import React from "react";
import { useState } from "react";
import {
  Alert,
  Autocomplete,
  Button,
  Container,
  Snackbar,
  TextField,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { AutocompleteSx, BoxSx, ButtonSx } from "./Styles";
import { stateList, cityList } from "../../utils/SearchLocation";
import { propertyTypes } from "../../utils/PropertyTypes";

const Search = () => {
  const [state, setState] = useState(null);
  const [city, setCity] = useState(null);
  const [type, setType] = useState(null);
  const [error, setError] = useState(false);

  //Validate search and search for properties when clicked
  const handleSearch = () => {
    if (!state || !city || !type) {
      setError(true);
    }
    
  };

  //close error popup after given time or on close by user
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setError(false);
  };

  return (
    <Container sx={BoxSx}>
      <Snackbar open={error} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
          Please select all options!
        </Alert>
      </Snackbar>
      <Autocomplete
        disablePortal
        id="state"
        options={stateList()}
        sx={AutocompleteSx}
        value={state}
        onChange={(e, value) => setState(value)}
        renderInput={(params) => (
          <TextField {...params} label="State" size="small" />
        )}
      />
      <Autocomplete
        disablePortal
        id="city"
        options={cityList(state)}
        sx={AutocompleteSx}
        value={city}
        onChange={(e, value) => setCity(value)}
        renderInput={(params) => (
          <TextField {...params} label="City" size="small" />
        )}
      />
      <Autocomplete
        disablePortal
        id="type"
        options={propertyTypes}
        sx={AutocompleteSx}
        value={type}
        onChange={(e, value) => setType(value)}
        renderInput={(params) => (
          <TextField {...params} label="Type" size="small" />
        )}
      />
      <Button
        variant="contained"
        sx={ButtonSx}
        startIcon={<SearchIcon />}
        onClick={handleSearch}
      >
        Search
      </Button>
    </Container>
  );
};

export default Search;
