import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components";
import "./App.css";
import "./index.css";
import { routes } from "./routes";

const App = () => {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Router>
        <Routes>
          {routes.map((route) => {
            const Page = route.page;
            return (
              <Route key={route.path} path={route.path} element={<Page />}></Route>
            )})}

        </Routes>
      </Router>
    </div>
  );
};
export default App;

