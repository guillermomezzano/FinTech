// react
import { Link } from "react-router-dom";
import React, { useState } from "react";

// material
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import PlagiarismIcon from "@mui/icons-material/Plagiarism";
import TaskIcon from "@mui/icons-material/Task";
import NoteAddIcon from "@mui/icons-material/NoteAdd";
import { green } from "@mui/material/colors";
import { blue } from "@mui/material/colors";
import { yellow } from "@mui/material/colors";
import Tooltip from "@mui/material/Tooltip";

const TableSimpleAuxiliaryBooks = ({ data, page, rowsPerPage }) => {
  const [filterNombreEmpresa, setFilterNombreEmpresa] = useState("");

  const handleFilterIdChange = (e) => {
    setFilterNombreEmpresa(e.target.value);
  };

  const filteredData = data
    .filter((row) => {
      const filter = filterNombreEmpresa.trim().toLowerCase();
      if (filter === "") {
        return true;
      }
      const nombre = row.nombre.toLowerCase();
      return nombre.startsWith(filter);
    })
    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

  return (
    <div>
      <input
        type="text"
        placeholder="Filtrar por nombre de empresa"
        value={filterNombreEmpresa}
        onChange={handleFilterIdChange}
      />
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader>
          <TableHead>
            <TableRow className="uppercase">
              <TableCell style={{ fontWeight: "bold" }}>Clientes</TableCell>
              <TableCell style={{ fontWeight: "bold" }}>Fecha</TableCell>
              <TableCell style={{ fontWeight: "bold" }}>Folio</TableCell>
              <TableCell style={{ fontWeight: "bold" }}>Comprobante</TableCell>
              <TableCell style={{ fontWeight: "bold" }}>Monto</TableCell>
              <TableCell style={{ fontWeight: "bold" }}>Cuenta</TableCell>
              <TableCell style={{ fontWeight: "bold" }}>
                Conciliación Bancaria
              </TableCell>
              <TableCell style={{ fontWeight: "bold" }}>Documento</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredData.map((row) => (
              <TableRow key={row.id}>
                <TableCell style={{ padding: "20px" }}>{row.nombre}</TableCell>
                <TableCell style={{ padding: "20px" }}>
                  {row.fecha.toLocaleDateString()}
                </TableCell>
                <TableCell style={{ padding: "20px" }}>{row.cuenta}</TableCell>
                <TableCell style={{ padding: "20px" }}>{row.debe}</TableCell>
                <TableCell style={{ padding: "20px" }}>{row.haber}</TableCell>
                <TableCell style={{ padding: "20px" }}>{row.glosa}</TableCell>
                <TableCell style={{ padding: "20px" }}>{row.tipo}</TableCell>
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
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default TableSimpleAuxiliaryBooks;
