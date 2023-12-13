import { useState } from "react";
import Pagination from "./Pagination";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";

const styles = {
  table: "font-sans text-sm border-collapse w-full",
  td: "border-2 border-transparent border-b-gray-200 text-left p-4",
  th: "border-2 border-transparent border-b-gray-200 text-left p-4 bg-white",
};

const createData = (Fecha, Tipo, Cliente, Monto, Status, Factura, Editar) => {
  return { Fecha, Tipo, Cliente, Monto, Status, Factura, Editar };
};

const data = [
  "03-12-2023",
  "Factura",
  "Nombre cliente",
  "$49.901",
  "Pagado",
  "#00012",
  <button className="bg-[#8F9FB2] py-1 px-4">
    <EditOutlinedIcon sx={{ color: "white" }} />
  </button>,
];
const rows = [
  createData(data[0], data[1], data[2], data[3], data[4], data[5], data[6]),
  createData(data[0], data[1], data[2], data[3], data[4], data[5], data[6]),
  createData(data[0], data[1], data[2], data[3], data[4], data[5], data[6]),
  createData(data[0], data[1], data[2], data[3], data[4], data[5], data[6]),
  createData(data[0], data[1], data[2], data[3], data[4], data[5], data[6]),
  createData(data[0], data[1], data[2], data[3], data[4], data[5], data[6]),
  createData(data[0], data[1], data[2], data[3], data[4], data[5], data[6]),
  createData(data[0], data[1], data[2], data[3], data[4], data[5], data[6]),
  createData(data[0], data[1], data[2], data[3], data[4], data[5], data[6]),
  createData(data[0], data[1], data[2], data[3], data[4], data[5], data[6]),
  createData(data[0], data[1], data[2], data[3], data[4], data[5], data[6]),
  createData(data[0], data[1], data[2], data[3], data[4], data[5], data[6]),
].sort((a, b) => (a.Fecha < b.Fecha ? -1 : 1));

const Table = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const handleChangePage = (event, newPage) => {
    event.preventDefault();
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <table className={styles.table} aria-label="custom pagination table">
      <thead>
        <tr>
          <th className={styles.th}>Fecha</th>
          <th className={styles.th}>Tipo</th>
          <th className={styles.th}>Cliente</th>
          <th className={styles.th}>Monto</th>
          <th className={styles.th}>Status</th>
          <th className={styles.th}>Boleta/Factura</th>
          <th className={styles.th}>Editar</th>
        </tr>
      </thead>
      <tbody>
        {(rowsPerPage > 0
          ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
          : rows
        ).map((row) => (
          <tr key={row.name}>
            <td className={styles.td}>{row.Fecha}</td>
            <td className={styles.td}>{row.Tipo}</td>
            <td className={styles.td}>{row.Cliente}</td>
            <td className={styles.td}>{row.Monto}</td>
            <td className={styles.td}>{row.Status}</td>
            <td className={styles.td}>{row.Factura}</td>
            <td className={styles.td}>{row.Editar}</td>
          </tr>
        ))}
        {emptyRows > 0 && (
          <tr style={{ height: 41 * emptyRows }}>
            <td className={styles.td} colSpan={3} aria-hidden />
          </tr>
        )}
      </tbody>
      <tfoot>
        <tr>
          <Pagination
            rows={rows}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </tr>
      </tfoot>
    </table>
  );
};

export default Table;
