import React, { useState, useEffect } from "react";

// material
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { styled, lighten, darken } from "@mui/system";

const AutoCompleteHeader = ({ initialData }) => {
  console.log(initialData);
  const [empresa, setEmpresa] = useState();

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

  const options = initialData?.map((option) => {
    const firstLetter = option.data[0].toUpperCase();
    return {
      firstLetter: /[0-9]/.test(firstLetter) ? "0-9" : firstLetter,
      ...option,
    };
  });

  const handleInputChange = (event, newValue) => {
    setEmpresa(newValue);
  };

  useEffect(() => {
    console.log(empresa);
  }, [empresa]);
  debugger;
  return (
    <>
      <Autocomplete
        id="grouped-demo"
        options={options.sort(
          (a, b) => -b.firstLetter.localeCompare(a.firstLetter)
        )}
        groupBy={(option) => option.firstLetter}
        getOptionLabel={(option) => option.data}
        value={empresa}
        onChange={handleInputChange}
        sx={{ width: 300 }}
        renderInput={(params) => (
          <TextField {...params} label="Empresas" variant="outlined" />
        )}
        renderGroup={(params) => (
          <li key={params.key}>
            <GroupHeader>{params.group}</GroupHeader>
            <ul className="p-0">{params.children}</ul>
          </li>
        )}
      />
    </>
  );
};

export default AutoCompleteHeader;
