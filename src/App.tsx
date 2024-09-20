import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Rewriter from "./pages/rewritter";

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/apple-app-site-association" element={<Rewriter/>}></Route>
      <Route path="/.well-known/apple-app-site-association" element={<Rewriter/>}></Route>
    </Routes>
  )
}

export default App
