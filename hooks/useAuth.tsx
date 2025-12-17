
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const useAuth = () => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isCheckingAuth, setIsCheckingAuth] = useState(true);

  useEffect(() => {
    const checkAuth = () => {
      const isAuth = localStorage.getItem("admin-authenticated") === "true";
      
      if (!isAuth) {
        navigate("/admin/login");
      } else {
        setIsAuthenticated(true);
      }
      
      setIsCheckingAuth(false);
    };
    
    checkAuth();
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("admin-authenticated");
    navigate("/admin/login");
  };

  return { 
    isAuthenticated, 
    isCheckingAuth, 
    handleLogout
  };
};
