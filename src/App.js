import React, { useContext, useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from "./components/Sidebar";
import Main from "./pages/Main";
import Statistics from "./pages/Statistics";
import About from "./pages/About";
import Credits from "./pages/Credits";
import LoginPage from "./pages/login/LoginPage";
import { AuthContext } from "./context/AuthContext";
import CadastroPage from "./pages/cadastro/CadastroPage";
import {RegionProvider} from "./context/RegionContext";

function App() {
  const { currentUser } = useContext(AuthContext);
  const [render, setRender] = useState(false);

  useEffect(() => {
    setRender(!render);
  }, [currentUser]);

  const isLoginScreen = window.location.pathname === '/login';
  const shouldRenderSidebar = currentUser && !isLoginScreen;
  const RequireAuth = ({ children }) => {
    return currentUser ? children : <Navigate to="/login" replace />;
  };

  return (
      <RegionProvider>
        <Router>
          <React.Fragment>
            {shouldRenderSidebar && <Sidebar />}
            <Routes>
              <Route path='login' element={<LoginPage />} />
              <Route path='cadastro' element={<CadastroPage />} />
              <Route path='wsmaps' element={<RequireAuth><Main /></RequireAuth>} />
              <Route path='statistics' element={<RequireAuth><Statistics /></RequireAuth>} />
              <Route path='about' element={<RequireAuth><About /></RequireAuth>} />
              <Route path='credits' element={<RequireAuth><Credits /></RequireAuth>} />
            </Routes>
          </React.Fragment>
        </Router>
      </RegionProvider>
);
}

export default App;