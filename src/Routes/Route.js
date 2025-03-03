import React, { lazy } from "react";
import { useRoutes } from "react-router-dom";
import Home from "../pages/Home/Home.jsx";

// lazy import

const Cart = lazy(() => import("../pages/Cart/Cart.jsx"));
const ProductList = lazy(() =>
  import("../components/ProductList/ProductList.jsx")
);
const Menswear = lazy(() => import("../components/Mens/Menswear/Menswear.jsx"));
const MensFootwear = lazy(() =>
  import("../components/Mens/MensFootwear/MensFootwear.jsx")
);
const ProductDetail = lazy(() =>
  import("../pages/ProductDetail/ProductDetail.jsx")
);
const Womenwear = lazy(() =>
  import("../components/Women/Womenwear/Womenwear.jsx")
);
const WomenFootwear = lazy(() =>
  import("../components/Women/WomenFootwear/WomenFootwear.jsx")
);
const KidsAttire = lazy(() =>
  import("../components/Kids/Kidswear/KidsAttire.jsx")
);
const KidsFootwear = lazy(() =>
  import("../components/Kids/KidsFootwear/KidsFootwear.jsx")
);
const Laptop = lazy(() =>
  import("../components/Electronics/Laptops/Laptop.jsx")
);
const Mobile = lazy(() =>
  import("../components/Electronics/Mobiles/Mobile.jsx")
);
const Books = lazy(() => import("../components/Books/Books.jsx"));
const Watches = lazy(() =>
  import("../components/Electronics/watches/Watches.jsx")
);
const Wishlist = lazy(() => import("../pages/Wishlist/Wishlist.jsx"));
const ContactUs = lazy(() => import("../components/ContactUs/ContactUs.jsx"));
const Login = lazy(() => import("../pages/LoginSignUp/Login.jsx"));
const SignUp = lazy(() => import("../pages/SignUp/SignUp.jsx"));
// import Cart from "../pages/Cart/Cart.jsx";
// import ProductList from "../components/ProductList/ProductList.jsx";
// import Menswear from "../components/Mens/Menswear/Menswear.jsx";
// import MensFootwear from "../components/Mens/MensFootwear/MensFootwear.jsx";
// import ProductDetail from "../pages/ProductDetail/ProductDetail.jsx";
// import Womenwear from "../components/Women/Womenwear/Womenwear";
// import WomenFootwear from "../components/Women/WomenFootwear/WomenFootwear";
// import KidsAttire from "../components/Kids/Kidswear/KidsAttire.jsx";
// import KidsFootwear from "../components/Kids/KidsFootwear/KidsFootwear.jsx";
// import Laptop from "../components/Electronics/Laptops/Laptop.jsx";
// import Mobile from "../components/Electronics/Mobiles/Mobile.jsx";
// import Books from "../components/Books/Books.jsx";
// import Watches from "../components/Electronics/watches/Watches.jsx";
// import Wishlist from "../pages/Wishlist/Wishlist.jsx";
// import ContactUs from "../components/ContactUs/ContactUs.jsx";
// import Login from "../pages/LoginSignUp/Login.jsx";
// import SignUp from "../pages/SignUp/SignUp.jsx";

const Route = () => {
  const route = useRoutes([
    { index: true, element: <Home /> },
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/contact",
      element: <ContactUs />,
    },
    {
      path: "product/cart",
      element: <Cart />,
    },
    {
      path: "product/wishlist",
      element: <Wishlist />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/signup",
      element: <SignUp />,
    },

    {
      path: "shop/:category",
      element: <ProductList />,
      children: [
        {
          path: "menswear",
          element: <Menswear />,
        },
        {
          path: "malefootwear",
          element: <MensFootwear />,
        },
        {
          path: "womenswear",
          element: <Womenwear />,
        },
        {
          path: "femalefootwear",
          element: <WomenFootwear />,
        },
        {
          path: "kidswear",
          element: <KidsAttire />,
        },
        {
          path: "kidsfootwear",
          element: <KidsFootwear />,
        },
        {
          path: "laptops",
          element: <Laptop />,
        },
        {
          path: "mobiles",
          element: <Mobile />,
        },
        {
          path: "watches",
          element: <Watches />,
        },
        {
          path: "books",
          element: <Books />,
        },
      ],
    },
    {
      path: "product/:category/:productId",
      element: <ProductDetail />,
    },
  ]);
  return route;
};

export default Route;
