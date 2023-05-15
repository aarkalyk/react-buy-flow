import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import logo from './logo.svg'
import './App.css'

import Buyflow from './buyflow/Buyflow'
import { ProductIds } from './buyflow/types'

const App = () => {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <Switch>
          <Route path="/buy/insurance_dev">
            <Buyflow productId={ProductIds.devIns} />
          </Route>
          <Route path="/buy/insurance_designer">
            <Buyflow productId={ProductIds.designerIns} />
          </Route>
          <Route path="/">
            <p>Welcome to Getsafe</p>
            <div>
              <Link to="/buy/insurance_dev">Buy developer insurance</Link>
            </div>
            <div>
              <Link to="/buy/insurance_designer">Buy designer insurance</Link>
            </div>
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
