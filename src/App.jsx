import axios from "axios";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { CartedPhotosIndexPage } from "./CartedPhotosIndexPage";

import { Header } from "./Header";
import { HomePage } from "./HomePage";
import { SignupPage } from "./SignupPage";
import { LoginPage } from "./LoginPage";
import { PhotosIndexPage } from "./PhotosIndexPage";
import { PhotosNewPage } from "./PhotosNewPage";
import { PhotosShowPage } from "./PhotosShowPage";
import { Footer } from "./Footer";

// Read the API host from the environment rather than hardcoding it: the
// deployed API's hostname has changed once already, which left this pointing at
// a service that no longer exists. Falls back to the local Rails server.
axios.defaults.baseURL =
  import.meta.env.VITE_API_URL ?? "http://localhost:3000";
axios.defaults.withCredentials = true;

const router = createBrowserRouter([
  {
    element: (
      <div className="container">
        <Header />
        <Outlet />
        <Footer year={2024} />
      </div>
    ),
    children: [
      { path: "/", element: <HomePage /> },
      {
        path: "/photos",
        element: <PhotosIndexPage />,
        loader: () => axios.get("/products.json").then((response) => response.data),
      },
      {
        path: "/carted_photos",
        element: <CartedPhotosIndexPage />,
        loader: () => axios.get("/carted_products.json").then((response) => response.data),
      },
      { path: "/photos/new", element: <PhotosNewPage /> },
      {
        path: "/photos/:id",
        element: <PhotosShowPage />,
        loader: ({ params }) => axios.get(`/products/${params.id}.json`).then((response) => response.data),
      },
      { path: "/signup", element: <SignupPage /> },
      { path: "/login", element: <LoginPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
