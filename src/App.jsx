import "./App.css";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import Application from "./Pages/Application";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard title="Dashboard" />} />
        <Route path="/dashboard" element={<Dashboard title="Dashboard" />} />
        <Route
          path="/application"
          element={<Application title="Application" />}
        />
      </Routes>
    </>
  );
}

export default App;
