import NavBar from "./components/NavBar";
import BalancePage from "./pages/balance page/BalancePage";

export default function App() {
  return (
    <div className="App d-flex flex-column gap-5">
      <NavBar/>
      <BalancePage/>
    </div>
  )
}
