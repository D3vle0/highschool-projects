import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, Stats } from './pages';

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/stats" element={<Stats />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}