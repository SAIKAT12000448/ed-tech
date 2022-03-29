
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';

function App() {
  return (
    <div>
         <BrowserRouter>
    <Switch>
      <Route exact path='/'>
        <Home></Home>
      </Route>

    
    </Switch>
    
    </BrowserRouter>
    </div>
  );
}

export default App;
