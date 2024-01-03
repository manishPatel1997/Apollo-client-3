import React from "react";
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import App from "./App"

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route>
            <Route path="/" element={<App />} />
        </Route>
    )
);
function RouteMain() {
    return <RouterProvider router={router} />;
}

export default RouteMain;
