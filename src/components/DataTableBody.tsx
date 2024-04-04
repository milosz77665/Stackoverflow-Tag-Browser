import { TableBody, TableCell, TableRow } from "@mui/material";

interface DataTableBodyProps<T> {
  visibleData: T[];
  keyNames: (keyof T)[];
}

const DataTableBody = <T,>({ visibleData, keyNames }: DataTableBodyProps<T>) => {
  return (
    <TableBody>
      {visibleData.map((rowData) => (
        <TableRow key={`${keyNames.map((keyName) => rowData[keyName]).join("")}row`}>
          {keyNames.map((keyName, index) => (
            <TableCell
              sx={{ color: "#363434", fontSize: "1.1rem", borderBottomColor: "#fffbf6" }}
              key={`${index}${keyNames.map((keyName) => rowData[keyName]).join("")}cell`}
            >{`${rowData[keyName]}`}</TableCell>
          ))}
        </TableRow>
      ))}
    </TableBody>
  );
};

export default DataTableBody;
