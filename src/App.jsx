import { Routes, Route } from 'react-router-dom';

import { NewGameMenuPage } from "./pages/NewGameMenuPage";
import { GameStartPage } from "./pages/GameStartPage";

import { PickPlayerProvider } from "./сontext/pickPlayerContext";
import { SquarePrivider } from './сontext/SquareContenxt';

const App = () => {
  return (
    <div className="App">
      <PickPlayerProvider>
        <SquarePrivider>
          <Routes>
            <Route path="/"
              element={<NewGameMenuPage />} />
            <Route path="/start"
              element={<GameStartPage />} />
          </Routes>
        </SquarePrivider>
      </PickPlayerProvider>
    </div>
  );
}

export default App;
