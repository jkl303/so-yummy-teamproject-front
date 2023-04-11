import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/auth/authSelectors';

export default function PublicRoute({
  component: Component,
  restricted = false,
  redirectTo = '/',
}) {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const shouldRedirect = isLoggedIn && restricted;
  return shouldRedirect ? <Navigate to={redirectTo} replace /> : Component;
}
