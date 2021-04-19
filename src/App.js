import React from 'react';
import {
  BrowserRouter as Router, Route, Switch, Redirect,
} from 'react-router-dom';
import { ThemeProvider } from './context/themeContext';
import Background from './components/Background';
import Home from './pages/Home';
import About from './pages/About';

const routes = [
  {
    path: '/',
    component: Home,
    exact: true,
  },
  {
    path: '/about',
    component: About,
    exact: true,
  },
].map(({ path, component: Component, exact }) => (
  <Route path={path} key={path} exact={exact}>
    <Component />
  </Route>
));

function App() {
  return (
    <div className="font-redhat">
      <ThemeProvider>
        <Background>
          <Router>
            <Switch>
              {routes}
              <Redirect to="/" />
            </Switch>
          </Router>
        </Background>
      </ThemeProvider>
    </div>
  );
}

export default App;
