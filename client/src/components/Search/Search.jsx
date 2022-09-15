import React from "react";
import { useState } from "react";
import { Autocomplete, Button, Container, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { AutocompleteSx, BoxSx, ButtonSx } from "./Styles";
import { stateList, cityList } from "../../Utils/SearchLocation";
import { propertyTypes } from "../../Utils/PropertyTypes";

const Search = () => {
  const [state, setState] = useState(null);
  const [city, setCity] = useState(null);
  const [type, setType] = useState(null);

  return (
    <Container sx={BoxSx}>
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
      <Button variant="contained" sx={ButtonSx} startIcon={<SearchIcon />}>
        Search
      </Button>
    </Container>
  );
};

export default Search;
