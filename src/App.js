import React from "react";
import "./style.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Page404 from "./pages/Page404";
import Home from "./pages/Home";
import CarDetails from "./pages/CarDetails";
import CarListPage from "./pages/CarListPage";
import { Favs } from "./pages/Favs";
import { useReducer } from "react";
import { favsInitialState, favsReducer } from "./store/Favourites/reducer";
import { FavsContext } from "./store/Favourites/context";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Home />,
      </>
    ),
    errorElement: <Page404 />,
  },
  {
    path: "/carlist",
    element: (
      <>
        <CarListPage />,
      </>
    ),
  },
  {
    path: "/car/:id",
    element: (
      <>
        <CarDetails />,
      </>
    ),
  },
  {
    path: "/favs",
    element: (
      <>
        <Favs />,
      </>
    ),
  },
]);

export default function App() {
  //initializam reducerul pentru favs
  const [favsState, favsDispatch] = useReducer(favsReducer, favsInitialState);

  //cream valoarea pe care o vom pasa lui FavsContext.Provider
  const favsContextValue = {
    favsState,
    favsDispatch,
  };
  return (
    <FavsContext.Provider value={favsContextValue}>
      <div className="App primary">
        <RouterProvider router={router} />
      </div>
    </FavsContext.Provider>
  );
}
