import { useLocation, useNavigate } from 'react-router-dom';

const useNavigateToLogin = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { pathname } = location;

  return () => {
    if (pathname !== '/signup' && pathname !== '/login') {
      navigate('/login');
    }
  }
}

export { useNavigateToLogin };