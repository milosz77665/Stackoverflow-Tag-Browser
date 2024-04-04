import { Paper, TableContainer } from "@mui/material";
import { FC, ReactNode } from "react";

interface DataTableContainerProps {
  children: ReactNode;
}

const DataTableContainer: FC<DataTableContainerProps> = ({ children }) => {
  return (
    <TableContainer
      sx={{
        color: "#363434",
        backgroundColor: "#f2dcc3",
      }}
      elevation={1}
      component={Paper}
    >
      {children}
    </TableContainer>
  );
};

export default DataTableContainer;
