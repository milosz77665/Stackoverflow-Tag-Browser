import { TablePagination, TableRow } from "@mui/material";
import { ChangeEvent, FC } from "react";

interface DataTablePaginationRowProps {
  numberOfRows: number;
  numberOfColumns: number;
  page: number;
  rowsPerPage: number;
  onPageChange: (_event: unknown, newPage: number) => void;
  onRowsPerPageChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const DataTablePaginationRow: FC<DataTablePaginationRowProps> = ({
  numberOfRows,
  numberOfColumns,
  page,
  rowsPerPage,
  onPageChange,
  onRowsPerPageChange,
}) => {
  return (
    <TableRow>
      <TablePagination
        sx={{
          color: "#363434",
          backgroundColor: "#f2dcc3",
          borderBottomColor: "transparent",
          fontSize: "0.95rem",
          "& .MuiTablePagination-displayedRows": { fontSize: "0.95rem" },
          "& .MuiTablePagination-selectLabel": { fontSize: "0.95rem" },
        }}
        rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
        colSpan={numberOfColumns}
        count={numberOfRows}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={onPageChange}
        onRowsPerPageChange={onRowsPerPageChange}
      />
    </TableRow>
  );
};

export default DataTablePaginationRow;
