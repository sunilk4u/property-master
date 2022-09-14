import React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import { Autocomplete, Button, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { BoxSx, ButtonSx } from "./Styles";
import { stateList, cityList } from "../../Utils/SearchLocation";
import { propertyTypes } from "../../Utils/PropertyTypes";

const Search = () => {
  const [state, setState] = useState(null);
  const [city, setCity] = useState(null);
  const [type, setType] = useState(null);

  return (
    <Box sx={BoxSx}>
      <Autocomplete
        disablePortal
        id="state"
        options={stateList()}
        sx={{ width: 200 }}
        value={state}
        onChange={(e, value) => setState(value)}
        renderInput={(params) => <TextField {...params} label="State" />}
      />
      <Autocomplete
        disablePortal
        id="city"
        options={cityList(state)}
        sx={{ width: 200 }}
        value={city}
        onChange={(e, value) => setCity(value)}
        renderInput={(params) => <TextField {...params} label="City" />}
      />
      <Autocomplete
        disablePortal
        id="type"
        options={propertyTypes}
        sx={{ width: 200 }}
        value={type}
        onChange={(e, value) => setType(value)}
        renderInput={(params) => <TextField {...params} label="Type" />}
      />
      <Button variant="contained" sx={ButtonSx} startIcon={<SearchIcon />}>
        Search
      </Button>
    </Box>
  );
};

export default Search;
