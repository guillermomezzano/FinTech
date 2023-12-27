import { useState } from "react";
import Pagination from "./Pagination";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import { Link } from "react-router-dom";
import clsx from "clsx";
import { formatCurrency, formatRut } from "../../utils/formatter";

const styles = {
  table: "font-sans text-sm border-collapse",
  tr: "border-b border-gray-200 hover:bg-gray-100/50",
  td: "text-left p-4 whitespace-nowrap ",
  th: "border-2 border-transparent border-b-gray-200 text-left p-4 whitespace-nowrap ",
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

  const columnHeaders = Object.values(cols);
  const columnKeys = Object.keys(cols);

  const isRUT = (value) => value?.includes("RUT")
  const isMoney = (value) =>
    value?.includes("Monto") ||
    value?.includes("IVA") ||
    value?.includes("Neto");

  return (
    <div className="">
      <div className="overflow-x-auto">
        <table className={styles.table} aria-label="custom pagination table">
          <thead className="">
            <tr>
              {columnHeaders?.map((col, index) => (
                <th key={index} className={styles.th}>
                  {col}
                </th>
              ))}
              {restProps.edit && <th className={styles.th}>Editar</th>}
            </tr>
          </thead>
          <tbody className="">
            {(rowsPerPage > 0
              ? rows?.slice(
                  page * rowsPerPage,
                  page * rowsPerPage + rowsPerPage
                )
              : rows
            )?.map((row, index) => (
              <tr className={styles.tr} key={row.name}>
                {columnKeys?.map((col) => (
                  <td
                    className={clsx(styles.td, { "text-right": isMoney(col) })}
                  >
                    {isMoney(col) ? formatCurrency(row?.[col]) : isRUT(col) ? formatRut(row?.[col]) : row?.[col]}
                  </td>
                ))}
                {restProps?.edit && (
                  <td className={styles.td}>
                    <Link
                      to={`${restProps?.path}/${row.ID}`}
                      className="bg-[#8F9FB2] flex items-center justify-center py-1 px-4"
                    >
                      <EditOutlinedIcon sx={{ color: "white" }} />
                    </Link>
                  </td>
                )}
              </tr>
            ))}
            {emptyRows > 0 && (
              <tr className={styles.tr} style={{ height: 65 * emptyRows }}>
                <td
                  className={styles.td}
                  colSpan={columnKeys?.length + (restProps?.edit && 1)}
                  aria-hidden
                />
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <Pagination
        rows={rows?.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </div>
  );
};

export default Table;
