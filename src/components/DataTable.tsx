import { Table, TableHead } from "@mui/material";
import DataTableContainer from "./DataTableContainer";
import DataTablePaginationRow from "./DataTablePaginationRow";
import DataTableHeaderRow from "./DataTableHeaderRow";
import DataTableBody from "./DataTableBody";
import { ChangeEvent, useMemo, useState } from "react";
import Order from "../models/Order";

interface DataTableProps<T> {
  data: T[];
  keyNames: (keyof T)[];
  columnNames: string[];
}

const DataTable = <T,>({ data, keyNames, columnNames }: DataTableProps<T>) => {
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
    <DataTableContainer>
      <Table>
        <TableHead>
          <DataTablePaginationRow
            numberOfRows={data.length}
            numberOfColumns={columnNames.length}
            page={page}
            rowsPerPage={rowsPerPage}
            onPageChange={handlePageChange}
            onRowsPerPageChange={handleRowsPerPageChange}
          />
          <DataTableHeaderRow
            keyNames={keyNames}
            columnNames={columnNames}
            order={order}
            orderBy={orderBy}
            onSortClick={handleSortClick}
          />
        </TableHead>
        <DataTableBody visibleData={visibleData} keyNames={keyNames} />
      </Table>
    </DataTableContainer>
  );
};

export default DataTable;
