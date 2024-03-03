import { createBrowserRouter } from "react-router-dom";
import LogIn from "./LogIn";
import Browse from "./Browse";
import { RouterProvider } from "react-router-dom";
import MoviePlay from "./MoviePlay";

const Body = () => {

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <LogIn />,
    },
    {
      path: "/browse",
      element: <Browse />,
    }, 
    {
      path: "/movie/:id",
      element: <MoviePlay />,
    },
  ]);


  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
