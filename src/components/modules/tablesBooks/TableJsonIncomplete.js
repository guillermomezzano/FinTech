import React, { useEffect, useState } from "react";

// material
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";

export function TableJsonIncomplete({ textoCabeza, sqlDatos }) {
  return (
    <div>
      <TableContainer
        sx={{ maxHeight: 440, backgroundColor: "rgba(255, 255, 255, 0.5)" }}
      >
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              {textoCabeza?.map((item) => (
                <TableCell style={{ fontWeight: "bold" }}>{item}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {sqlDatos?.map((val, i) => (
              <TableRow key={i}>
                {val.map((colm) => (
                  <TableCell style={{ padding: "20px" }}>{colm}</TableCell>
                ))}
                {/* <td>{val[i]}</td> */}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
export default TableJsonIncomplete;
