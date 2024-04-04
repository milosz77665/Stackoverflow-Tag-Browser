import { Button, Container, Typography } from "@mui/material";
import { useNavigate, useRouteError } from "react-router-dom";

interface RouteError {
  status: number;
}

const Error = () => {
  const navigate = useNavigate();
  const error = useRouteError() as RouteError;
  const { status } = error;

  const errorMessage = status === 404 ? "Page not found" : "Something went wrong";

  return (
    <Container
      sx={{
        marginTop: "6rem",
        marginLeft: "6rem",
        display: "flex",
        flexDirection: "column",
        gap: "0.7rem",
        alignItems: "flex-start",
        justifyContent: "center",
      }}
      component={"section"}
    >
      <Typography variant={"h4"} component={"h1"}>
        Error {status}
      </Typography>
      <Typography variant={"h5"} component={"p"}>
        {errorMessage}
      </Typography>
      {status === 404 && (
        <Button
          sx={{
            color: "#fffbf6",
            backgroundColor: "#d9954a",
            "&:hover": { color: "#fffbf6", backgroundColor: "#ae773b" },
          }}
          onClick={() => {
            navigate("/");
          }}
        >
          Home page
        </Button>
      )}
    </Container>
  );
};

export default Error;
