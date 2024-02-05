import WelcomePage from "@pages/WelcomePage/WelcomePage";
import SignupPage from '@pages/SignupPage/SignupPage'
import LoginPage from '@pages/LoginPage/LoginPage'
import MainPage from '@pages/MainPage/MainPage'
import {
  createBrowserRouter,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <WelcomePage />,
  },
  {
    path: "/signup",
    element: <SignupPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/main",
    element: <MainPage />,
  },
]);

export default router;
