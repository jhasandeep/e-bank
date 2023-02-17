import {Switch, Route} from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login'
import './App.css'
import NotFound from './components/NotFound'
import ProtectedRoute from './components/ProtectedRoute'

// Replace your code here
const App = () => (
  <>
    <Switch>
      <ProtectedRoute exact path="/" component={Home} />
      <Route path="/ebank/login" component={Login} />
      <Route component={NotFound} />
    </Switch>
  </>
)

export default App
