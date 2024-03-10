import { Link } from "react-router-dom"
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import { Signup } from "./pages/Signup";
import { Signin } from "./pages/Signin";
import { Dashboard } from "./pages/Dashboard";
import { SendMoney } from "./pages/SendMoney";

function App() {
  return (
    <>
       <BrowserRouter>
        <Routes>
           <Route path="/" element={<LandingPage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/send" element={<SendMoney />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
function LandingPage() {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-200">
      <h1 className="text-4xl font-bold mb-8">Welcome to Your App</h1>
      <div className="space-x-4">
        <Link to="/signup" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md">
          Sign Up
        </Link>
        <Link to="/signin" className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md">
          Sign In
        </Link>
      </div>
    </div>
  );
}
export default App