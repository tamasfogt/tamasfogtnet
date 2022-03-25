import React from "react";
import Footer from "./footer.component";
import HeaderComponent from "./header.component";

function Layout(props) {
  return (
    <div className=" bg-gray-800 ">
      <HeaderComponent></HeaderComponent>
      <main className="max-w-7xl mx-auto px-2 text-white">
        {props.children}
      </main>
      <Footer></Footer>
    </div>
  );
}
export default Layout;
