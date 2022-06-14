import Head from "next/head";
import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div>
      <Head>
        <title>Phanox</title>
      </Head>
      <header>
        <main className="main-container">
          <Navbar />
          {children}
          <Footer />
        </main>
      </header>
    </div>
  );
};

export default Layout;
