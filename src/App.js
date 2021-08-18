import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ListEmployeeComponent from './components/ListEmployeeComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreateAndUpdateEmployeeComponent from './components/CreateAndUpdateEmployeeComponent';
import ViewEmployeeComponent from './components/ViewEmployeeComponent';

function App() {
  return (
    <div>
      <Router>
          <HeaderComponent/>
            <div className="container">
              <Switch>
                <Route path="/" exact component={ListEmployeeComponent}></Route>
                <Route path="/employees" component={ListEmployeeComponent}></Route>
                <Route path="/add-employee/:id" component={CreateAndUpdateEmployeeComponent}></Route>
                <Route path="/view-employee/:id" component={ViewEmployeeComponent}></Route>
              </Switch>
            </div>
          <FooterComponent/>
      </Router>
    </div>
  );
}

export default App;
