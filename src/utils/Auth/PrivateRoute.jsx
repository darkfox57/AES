import { Navigate, Route } from 'react-router'
import { isLoggedIn } from './isLoggedIn'

export default function PrivateRoute({ element: Component, ...rest }) {
  if (!isLoggedIn()) {
    return <Navigate to="/login" />
  }
  return <Route {...rest} element={<Component />} />
}
