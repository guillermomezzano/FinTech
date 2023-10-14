import React from "react";

// Material
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";

const TableDiaryBook = ({ data, page, rowsPerPage }) => {
  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow className="uppercase">
            <TableCell style={{ fontWeight: "bold" }}>ID</TableCell>
            <TableCell style={{ fontWeight: "bold" }}>Fecha</TableCell>
            <TableCell style={{ fontWeight: "bold" }}>Cuenta</TableCell>
            <TableCell style={{ fontWeight: "bold" }}>Debe</TableCell>
            <TableCell style={{ fontWeight: "bold" }}>Haber</TableCell>
            <TableCell style={{ fontWeight: "bold" }}>Glosa</TableCell>
            <TableCell style={{ fontWeight: "bold" }}>Tipo</TableCell>
            <TableCell style={{ fontWeight: "bold" }}>Comentario</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((row) => (
              <TableRow key={row.id}>
                <TableCell style={{ padding: "20px" }}>{row.id}</TableCell>
                <TableCell style={{ padding: "20px" }}>
                  {row.fecha.toLocaleDateString()}
                </TableCell>
                <TableCell style={{ padding: "20px" }}>{row.cuenta}</TableCell>
                <TableCell style={{ padding: "20px" }}>{row.debe}</TableCell>
                <TableCell style={{ padding: "20px" }}>{row.haber}</TableCell>
                <TableCell style={{ padding: "20px" }}>{row.glosa}</TableCell>
                <TableCell style={{ padding: "20px" }}>{row.tipo}</TableCell>
                <TableCell style={{ padding: "20px" }}>
                  {row.comentario}
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableDiaryBook;
