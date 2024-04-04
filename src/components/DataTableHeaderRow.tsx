import { TableCell, TableRow, TableSortLabel } from "@mui/material";
import Order from "../models/Order";

interface DataTableHeaderRowProps<T> {
  keyNames: (keyof T)[];
  columnNames: string[];
  order: Order;
  orderBy: keyof T;
  onSortClick: (keyName: keyof T) => void;
}

const DataTableHeaderRow = <T,>({ keyNames, columnNames, order, orderBy, onSortClick }: DataTableHeaderRowProps<T>) => {
  return (
    <TableRow>
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
              onSortClick(keyNames[index]);
            }}
          >
            {columnName}
          </TableSortLabel>
        </TableCell>
      ))}
    </TableRow>
  );
};

export default DataTableHeaderRow;
