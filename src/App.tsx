//import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
//import { useAppDispatch } from "./app/hooks";
import TopNav from "./components/top-nav/TopNav";
import About from "./routes/about/About";
import Games from "./routes/games/Games";
// import { fetchGames } from "./features/games/gameSlice";
import Contact from "./routes/contact/Contact";
import BuyingBasket from "./routes/buying-basket/BuyingBasket";
import NintendoGames from "./components/nintendo-games/NintendoGames";
import NintendoGamesD from "./components/nintendo-games/NintendoGamesD";
import XboxGames from "./components/xbox-games/XboxGames";
import XboxGamesD from "./components/xbox-games/XboxGamesD";
import PS4And5Games from "./components/ps-games/PS4And5Games";
import PS4And5GamesD from "./components/ps-games/PS4And5GamesD";


function App() {
  return (
    <>
      <TopNav />
      <Routes>
        <Route path="/" element={<Games />} />
        <Route path="/games" element={<Games />}>
          <Route path="nintendo" element={<NintendoGames />} />
          <Route path="nintendo/:id" element={<NintendoGamesD />} />
          <Route path="xbox" element={<XboxGames />} />
          <Route path="xbox/:id" element={<XboxGamesD />} />
          <Route path="ps" element={<PS4And5Games />} />
          <Route path="ps/:id" element={<PS4And5GamesD />} />
        </Route>

        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/buying-basket" element={<BuyingBasket />} />

      </Routes>

    </>
  );
}

export default App;

