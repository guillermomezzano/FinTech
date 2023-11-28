import React, { useState } from "react";

// material
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { styled, lighten, darken } from "@mui/system";

const AutoCompleteHeader = ({ initialData }) => {
  const [empresa, setEmpresas] = useState();

  const handleInputChange = (event) => {
    setEmpresas(event.target.value);
  };

  const GroupHeader = styled("div")(({ theme }) => ({
    position: "sticky",
    top: "-8px",
    padding: "4px 10px",
    color: theme.palette.primary.main,
    backgroundColor:
      theme.palette.mode === "light"
        ? lighten(theme.palette.primary.light, 0.85)
        : darken(theme.palette.primary.main, 0.8),
  }));

  const options = initialData.map((option) => ({
    firstLetter: option.nombre.charAt(0).toUpperCase(),
    ...option,
  }));

  return (
    <>
      <Autocomplete
        id="grouped-demo"
        value={empresa}
        onSelect={handleInputChange}
        options={options.sort((a, b) =>
          a.firstLetter.localeCompare(b.firstLetter)
        )}
        groupBy={(option) => option.firstLetter}
        getOptionLabel={(option) => option.nombre}
        sx={{ width: 300, background: "#ffffff", borderRadius: "8px" }}
        renderInput={(params) => (
          <TextField
            onChange={handleInputChange}
            value={empresa}
            {...params}
            label={empresa ? "" : "Empresas"}
            InputLabelProps={{
              shrink: false,
            }}
          />
        )}
        renderGroup={(params) => (
          <li key={params.key}>
            <GroupHeader>{params.group}</GroupHeader>
            <lu classname="p-0">{params.children}</lu>
          </li>
        )}
      />
    </>
  );
};

export default AutoCompleteHeader;
