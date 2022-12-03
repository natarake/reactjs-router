import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Home, Features, Pricing } from "./pages";
import { Header, Footer } from "./components";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/reactjs-router" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/features" element={<Features />}></Route>
        <Route path="/pricing" element={<Pricing />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
