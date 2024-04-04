import Home, { tagsDataLoader } from "./pages/Home";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import Error from "./pages/Error";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <Error />,
      children: [{ index: true, element: <Home />, loader: tagsDataLoader }],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
