import { Typography } from "@mui/material";
import { FC, ReactNode } from "react";

interface ErrorInfoProps {
  children: ReactNode;
}

const ErrorInfo: FC<ErrorInfoProps> = ({ children }) => {
  return <Typography sx={{ fontSize: "1.5rem" }}>{children}</Typography>;
};

export default ErrorInfo;
