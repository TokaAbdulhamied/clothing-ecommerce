import logo from "./logo.svg";
import "./App.css";
import categories from "./constants/categories";
import Directory from "./components/Directory";
import "./Sass/main.scss";
function App() {
  return (
    <>
      <Directory categories={categories} />
    </>
  );
}

export default App;
