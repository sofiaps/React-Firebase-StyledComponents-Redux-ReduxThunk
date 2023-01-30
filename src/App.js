import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./routes/home/home.component";
import Authentication from "./routes/authentication/authentication.component";
import Checkout from "./routes/checkout/checkout.component";
import RootLayout from "./routes/dashboard/dashboard.component";
import ErrorPage from "./routes/error-page/error-page.component";
import CategoriesPreview from "./routes/categories-preview/categories-preview.component";
import Category from "./routes/category/category.component";
import { setCurrentUser } from './store/user/user.action';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import {
  onAuthStateChangedListener,
  createUserDocumentFromAuth,
} from './utils/firebase/firebase.utils';
import Shop from "./routes/shop/shop.component";


const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      dispatch(setCurrentUser(user));
    });

    return unsubscribe;
  }, [dispatch]);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <ErrorPage/>,
      children: [
        { index: true, element: <Home /> },
        {
          path: "shop",
          element: <Shop />,
          children: [
            { index: true, element: <CategoriesPreview /> },
            {path: ':category', element: <Category/>}
          ],
        },
        { path: "auth", element: <Authentication /> },
        { path: "checkout", element: <Checkout /> },
      ],
    },
  ]);
  return <RouterProvider router={router}/>
};

export default App;
