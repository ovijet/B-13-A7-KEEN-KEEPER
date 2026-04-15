import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import Root from "./Root/Root";
import TimeLine from "./components/TimeLine";
import Stats from "./components/Stats";
import Home from "./Page/Home";
import AllFriendDetails from "./components/AllFriendsDetails/AllFriendDetails";
import FriendsContext, { Context } from "./components/context/FriendsContext";
import { ToastContainer } from "react-toastify";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "/timeLine",
        element: <TimeLine></TimeLine>,
      },
      {
        path: "/stats",
        element: <Stats></Stats>,
      },
      {
        path: "/allFriendDetails/:id",
        loader: () => fetch("/friends.json"),
        element: <AllFriendDetails></AllFriendDetails>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <FriendsContext>
      <ToastContainer position="top-center" />
      <RouterProvider router={router}></RouterProvider>
    </FriendsContext>
  </StrictMode>,
);
