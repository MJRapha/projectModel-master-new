import { Route, Routes } from "react-router-dom";
import "./App.css";
import TopNav from "./components/top-nav/TopNav";
import About from "./routes/about/About";
import Games from "./routes/games/Games";
import Contact from "./routes/contact/Contact";
import NintendoGames from "./components/nintendo-games/NintendoGames";
import XboxGames from "./components/xbox-games/XboxGames";
import PS4And5Games from "./components/ps-games/PS4And5Games";
import HomePage from "./routes/home-page/HomePage";
import NewGames from "./components/new-games/NewGames";
import SoonGames from "./components/coming-soon-games/SoonGames";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";

function App() {
  return (
    <>
      <ShoppingCartProvider>
        <TopNav />
        <div className="my-component">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/games" element={<Games />}>
              <Route path="nintendo" element={<NintendoGames />} />
              <Route path="xbox" element={<XboxGames />} />
              <Route path="ps" element={<PS4And5Games />} />
              <Route path="new" element={<NewGames />} />
              <Route path="soon" element={<SoonGames />} />
            </Route>
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </ShoppingCartProvider>
    </>
  );
}

export default App;

