import { Provider } from 'react-redux';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import './App.css';
import Films from './Components/Films';
import Ships from './Components/Ships';
import generateStore from './Redux/Store';

function App() {
  const store = generateStore();
  return (
    <Router>
        <div className='navbar'>
          <h1>API STARWARS</h1>
          <Link to='/' className='btn'>
            INICIO
          </Link>
          <Link to='/favorites' className='btn'>
            IR A MIS NAVES FAVORITAS
          </Link>
        </div>
      <div className='container'>
        <Provider store={store}>
          <Switch>
            <Route path='/favorites'>
              Favoritos
            </Route>
            <Route path='/:id'>
              <Ships/>
            </Route>
            <Route path='/'>
              <Films/>
            </Route>
          </Switch>
        </Provider>
      </div>
    </Router>
  );
}

export default App;
