import { TablePagination } from "@mui/base/TablePagination";

// const className = {
//   root: "px-4 py-3 flex sm:flex-row sm:items-center sm:justify-between",
//   toolbar: "flex flex-col items-start gap-2.5 sm:flex-row sm:items-center",
//   selectLabel: "m-0",
//   displayedRows: "m-0 sm:ml-auto",
//   spacer: "hidden",
//   actions: "flex gap-1",
// };

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
    count={rows.length}
    rowsPerPage={rowsPerPage}
    page={page}
    slotProps={{
      select: {
        "aria-label": "rows per page",
      },
      actions: {
        showFirstButton: true,
        showLastButton: true,
        className: "flex gap-1"
      },

      root: {
        className:
          "px-4 py-3 flex sm:flex-row sm:items-center sm:justify-between",
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
  />
);

export default Pagination;
