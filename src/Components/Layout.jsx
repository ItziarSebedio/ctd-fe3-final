import { Outlet } from "react-router-dom";
import { ContextProvider } from "./utils/global.context";

import Navbar from "./Navbar";
import Footer from "./Footer";

function Layout() {
  return (
    <ContextProvider>
      <Navbar />
      <Outlet />
      <Footer />
    </ContextProvider>
  );
}
export default Layout;
