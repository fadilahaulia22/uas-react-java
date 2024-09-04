import { createContext } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./component/common/Navbar";
import Footer from "./component/common/Footer";
import "./index.css";

export const KrjContext = createContext();

export default function App() {

  return (
    <KrjContext.Provider>
      <div className="App">
        <Navbar />
          <div className="content">
            <Outlet />
          </div>
        <Footer />
      </div>
    </KrjContext.Provider>
  );
}