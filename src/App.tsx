import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import Dashboard from "./pages/Dashboard";
import { Login } from "./pages/login";

function App() {
  const { isAuthenticated } = useContext(AuthContext);

  return isAuthenticated ? <Dashboard /> : <Login />;
}

export default App;