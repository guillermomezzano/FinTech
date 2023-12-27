import { TablePagination } from "@mui/base/TablePagination";

const Pagination = ({
  rows,
  rowsPerPage,
  page,
  onPageChange,
  onRowsPerPageChange,
}) => (
  <TablePagination
    rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
    colSpan={3}
    count={rows}
    rowsPerPage={rowsPerPage}
    page={page}
    slotProps={{
      select: {
        "aria-label": "filas por pagina",
      },
      actions: {
        showFirstButton: true,
        showLastButton: true,
        className: "flex gap-4 font-normal text-2xl"
      },
      
      root: {
        className:
        "px-4 py-2 my-4 flex sm:flex-row sm:items-center sm:justify-between",
      },
      toolbar: {
        className:
        "flex flex-col items-start gap-2.5 sm:flex-row sm:items-center",
      },
      selectLabel: { className: "m-0" },
      displayedRows: { className: "m-0 sm:ml-auto" },
      spacer: "hidden",
    }}
    onPageChange={onPageChange}
    onRowsPerPageChange={onRowsPerPageChange}
    labelRowsPerPage="Filas por página:"
    labelDisplayedRows={({ from, to, count }) => `${from} - ${to} de ${count}`}
  />
);

export default Pagination;
