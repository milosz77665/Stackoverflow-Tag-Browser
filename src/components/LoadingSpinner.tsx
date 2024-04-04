import { FC } from "react";
import LoopIcon from "@mui/icons-material/Loop";

interface LoadingSpinnerProps {
  size: number;
}

const LoadingSpinner: FC<LoadingSpinnerProps> = ({ size }) => {
  return (
    <LoopIcon
      sx={{
        fontSize: `${size}px`,
        animation: "spin 1s linear infinite",
      }}
    />
  );
};

export default LoadingSpinner;
