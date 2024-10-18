import { useState } from "react";
import Header from "../header";
//import Footer from "../footer";
import { Outlet } from "react-router-dom";

function Layout() {
  const [quantity, setQuantity] = useState();
  return (
    <div className="main">
      <div className="header">
        {" "}
        <Header quantity={quantity} setQuantity={setQuantity} />
        <Outlet />
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default Layout;
