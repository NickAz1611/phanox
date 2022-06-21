import Head from "next/head";
import React from "react";
import Footer from "./Footer";
import NavBar from "./NavBar";

const Layout = ({ children }) => {
  return (
    <div>
      <Head>
        <title>Phanox</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
      </Head>
      <header>
        <main className="main-container">
          <NavBar />
          {children}
          <Footer />
        </main>
      </header>
    </div>
  );
};

export default Layout;
