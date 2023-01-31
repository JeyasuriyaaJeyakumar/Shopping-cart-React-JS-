import "./App.css";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"; 
import {Navbar} from "./components/navbar";
import {Home} from "./pages/home/home";
import {Cart} from "./pages/cart/cart";
import { HomeContextProvider } from "./context/home-context";

function App() {
  return (
    <div className="App">
      <HomeContextProvider>
      <Router>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/cart" element={<Cart/>}></Route>
        </Routes>
      </Router>
      </HomeContextProvider>
    </div>
  );
}

export default App;
