import "./App.css";
import "./Sass/main.scss";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import NoMatch from "./pages/NoMatch";
import Home from "./pages/Home";
import NavigationBar from "./components/NavigationBar";
function App() {
  return (
    <Routes>
      <Route path="/" element={<NavigationBar />}>
        <Route index element={<Home />} />
        {/* <Route path="about" element={<About />} />
        <Route path="dashboard" element={<Dashboard />} /> */}
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
  );
}

export default App;
