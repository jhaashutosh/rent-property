import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/NavbarHeader";
import SpiceCard from "./components/SpiceCard";

function App() {
  return (
    <div className="App">
      <Navbar />
      <SpiceCard />
    </div>
  );
}

export default App;
