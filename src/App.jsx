import { BrowserRouter, Route, Routes } from "react-router-dom";

import AppLayout from "./ui/AppLayout";
import Home from "./pages/Home";
import Portfolios from "./pages/Portfolios";
import Resume from "./pages/Resume";
import Blogs from "./features/Blogs";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="/" element={<Home/>} />
            <Route path="/portfolios" element={<Portfolios/>} />            
            <Route path="/resume" element={<Resume/>} />
            <Route path="/blogs" element={<Blogs/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
