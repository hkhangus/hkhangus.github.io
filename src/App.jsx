import { BrowserRouter, Route, Routes } from "react-router-dom";

import AppLayout from "./ui/AppLayout";
import Home from "./pages/Home";
import Portfolios from "./pages/Portfolios";
import Resume from "./pages/Resume";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="/" element={<Home/>} />
            <Route path="/portfolios" element={<Portfolios/>} />            
            <Route path="/resume" element={<Resume/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
