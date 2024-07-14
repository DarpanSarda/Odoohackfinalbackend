import AdminPanel from "./Pages/Admin-Panel/AdminPanel";
import LogIn from "./Pages/Admin-Panel/LogIn"
import { BrowserRouter, Router, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./Pages/AuthContext";

function App() {

  return (
    <>
      <AuthProvider>
        <BrowserRouter basename="">
          <Routes>
            <Route path='/' element={<LogIn />} />
            <Route path='/AdminPanel' element={<AdminPanel />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </>
  )
}

export default App
