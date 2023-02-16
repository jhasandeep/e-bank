import cookie from 'js-cookie'
import {Route, Redirect} from 'react-router-dom'

const ProtectedRoute = props => {
  console.log(props)
  const jwtToken = cookie.get('jwtToken')
  if (jwtToken === undefined) {
    return <Redirect to="/login" />
  }

  return <Route {...props} />
}

export default ProtectedRoute
