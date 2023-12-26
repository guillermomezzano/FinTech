import { useState } from "react";
import Pagination from "./Pagination";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import { Link } from "react-router-dom";

const styles = {
  table: "font-sans text-sm border-collapse w-full",
  td: "border-2 border-transparent border-b-gray-200 text-left p-4",
  th: "border-2 border-transparent border-b-gray-200 text-left p-4 bg-white",
};

const Table = ({ data, ...restProps }) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const { cols, rows } = data;
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
          {cols?.map((col, index) => (
            <th key={index} className={styles.th}>
              {col}
            </th>
          ))}
          {restProps.edit && <th className={styles.th}>Editar</th>}
        </tr>
      </thead>
      <tbody>
        {(rowsPerPage > 0
          ? rows?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
          : rows
        )?.map((row, index) => (
          <tr key={row.name}>
            {cols?.map((col) => (
              <td className={styles.td}>{row[col]}</td>
            ))}
            {restProps?.edit && (
              <td className={styles.td}>
                <Link to={`/compras/${row.ID}`} className="bg-[#8F9FB2] flex py-1 px-4">
                  <EditOutlinedIcon sx={{ color: "white" }} />
                </Link>
              </td>
            )}
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
            rows={rows?.length}
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
