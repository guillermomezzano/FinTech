import React, { useState } from "react";
import { Link } from "react-router-dom";

// material
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TextField from "@mui/material/TextField";
import PlagiarismIcon from "@mui/icons-material/Plagiarism";
import TaskIcon from "@mui/icons-material/Task";
import NoteAddIcon from "@mui/icons-material/NoteAdd";
import { green } from "@mui/material/colors";
import { blue } from "@mui/material/colors";
import { yellow } from "@mui/material/colors";
import Tooltip from "@mui/material/Tooltip";

const TableJsonCompleteDouble = ({ textoCabeza, sqlDatos }) => {
  const [filterNombreEmpresa, setFilterNombreEmpresa] = useState("");

  const handleFilterIdChange = (e) => {
    setFilterNombreEmpresa(e.target.value);
  };

  return (
    <div>
      <TextField
        color="secondary"
        label="Buscar empresa"
        value={filterNombreEmpresa}
        onChange={handleFilterIdChange}
        style={{ marginBottom: "20px" }}
      />
      <TableContainer
        sx={{ maxHeight: 440, backgroundColor: "rgba(255, 255, 255, 0.5)" }}
      >
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              {textoCabeza?.map((item) => (
                <TableCell style={{ fontWeight: "bold" }}>{item}</TableCell>
              ))}
              <TableCell style={{ fontWeight: "bold" }}>Documento</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {sqlDatos?.map((cliente, i) =>
              cliente.map((val) => (
                <TableRow key={i}>
                  {val.map((colm) => (
                    <TableCell style={{ padding: "20px" }}>{colm}</TableCell>
                  ))}
                  <TableCell style={{ padding: "20px" }}>
                    <Tooltip title="Aceptado en SII" arrow>
                      <TaskIcon style={{ color: green[500] }} />
                    </Tooltip>
                    <Tooltip title="Ver Documento en pdf" arrow>
                      <PlagiarismIcon style={{ color: blue[500] }} />
                    </Tooltip>
                    <Tooltip title="Editar Documento" arrow>
                      <Link to="/IncomeUpdateForm">
                        <NoteAddIcon style={{ color: yellow[800] }} />
                      </Link>
                    </Tooltip>
                  </TableCell>
                  {/* <td>{val[i]}</td> */}
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default TableJsonCompleteDouble;
