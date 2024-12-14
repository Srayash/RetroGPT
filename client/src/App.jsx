import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import Home from "./pages/Home.jsx";
import { RecoilRoot } from "recoil";

function App() {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  )
}

export default App
