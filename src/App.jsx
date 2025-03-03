import React from "react";
import Route from "./Routes/Route";
import Header from "./components/Header/Header";
import Subbanner from "./components/Subbanner/Subbanner";
import Footer from "./components/Footer/Footer";
import { ToastContainer, toast, Bounce } from "react-toastify";

const App = () => {
  return (
    <>
      <Header />
      <ToastContainer />
      <Route />
      <Subbanner />
      <Footer />
    </>
  );
};

export default App;
