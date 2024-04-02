import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  TableSortLabel,
} from "@mui/material";
import { ChangeEvent, useMemo, useState } from "react";

interface DataTableProps<T> {
  data: T[];
  keyNames: (keyof T)[];
  columnNames: string[];
}

const DataTable = <T,>({ data, keyNames, columnNames }: DataTableProps<T>) => {
  type Order = "asc" | "desc";
  const [order, setOrder] = useState<Order>("asc");
  const [orderBy, setOrderBy] = useState<keyof T>(keyNames[0]);
  const [page, setPage] = useState<number>(0);
  const [rowsPerPage, setRowsPerPage] = useState<number>(5);

  const handleSortClick = (keyName: keyof T) => {
    const isSelectedAndAsc = orderBy === keyName && order === "asc";
    setOrder(isSelectedAndAsc ? "desc" : "asc");
    setOrderBy(keyName);
  };

  const getOrderedData = (data: T[]) => {
    return data.sort((a, b) => {
      const areStrings = typeof a[orderBy] === "string" && typeof b[orderBy] === "string";
      if (order === "asc") {
        if (areStrings) {
          return String(a[orderBy]).localeCompare(String(b[orderBy]));
        } else {
          return Number(a[orderBy]) - Number(b[orderBy]);
        }
      } else if (order === "desc") {
        if (areStrings) {
          return String(b[orderBy]).localeCompare(String(a[orderBy]));
        } else {
          return Number(b[orderBy]) - Number(a[orderBy]);
        }
      } else {
        return 0;
      }
    });
  };

  const handlePageChange = (_event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleRowsPerPageChange = (event: ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const visibleData: T[] = useMemo(() => {
    return rowsPerPage > 0
      ? getOrderedData(data).slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
      : getOrderedData(data);
  }, [order, orderBy, page, rowsPerPage]);

  return (
    <TableContainer
      sx={{
        color: "#363434",
        backgroundColor: "#f2dcc3",
      }}
      elevation={1}
      component={Paper}
    >
      <Table>
        <TableHead>
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
              colSpan={3}
              count={data.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handlePageChange}
              onRowsPerPageChange={handleRowsPerPageChange}
            />
          </TableRow>
          <TableRow sx={{ borderColor: "white" }}>
            {columnNames.map((columnName, index) => (
              <TableCell
                sx={{
                  color: "#fffbf6",
                  fontWeight: "600",
                  fontSize: "1.1rem",
                  backgroundColor: "#d9954a",
                  borderBottomColor: "transparent",
                }}
                key={columnName}
                sortDirection={order}
              >
                <TableSortLabel
                  sx={{
                    "&.Mui-active .MuiTableSortLabel-icon": {
                      color: "#fffbf6",
                      width: "18px",
                      height: "18px",
                    },
                    "&.MuiTableSortLabel-root": {
                      color: "#fffbf6",
                    },
                  }}
                  active={orderBy === keyNames[index]}
                  direction={orderBy === keyNames[index] ? order : "asc"}
                  onClick={() => {
                    handleSortClick(keyNames[index]);
                  }}
                >
                  {columnName}
                </TableSortLabel>
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {visibleData.map((rowData) => (
            <TableRow key={`${keyNames.map((keyName) => rowData[keyName]).join()}row`}>
              {keyNames.map((keyName, index) => (
                <TableCell
                  sx={{ color: "#363434", fontSize: "1.1rem", borderBottomColor: "#fffbf6" }}
                  key={`${index}${keyNames.map((keyName) => rowData[keyName]).join()}cell`}
                >{`${rowData[keyName]}`}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default DataTable;
