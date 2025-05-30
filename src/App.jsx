import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import BalancePage from "./pages/balance page/BalancePage";
import RegisterPage from "./pages/register page/RegisterPage";

export default function App() {
  return (
    <div className="App d-flex flex-column gap-5">
      <NavBar/>
      <BrowserRouter>
        <Routes>
          <Route path="/balance" element={<BalancePage/>}/>
          <Route path="/" element={<RegisterPage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
