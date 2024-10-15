import { useState } from "react";
import Header from "../header";
import Footer from "../footer";

function Layout() {
  const [quantity, setQuantity] = useState();
  return (
    <div className="main">
      <div className="header">
        {" "}
        <Header quantity={quantity} setQuantity={setQuantity} />
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
