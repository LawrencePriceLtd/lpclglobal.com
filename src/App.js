import React from 'react';
import {
  BrowserRouter as Router, Route, Switch, Redirect,
} from 'react-router-dom';
import { ThemeProvider } from './context/themeContext';
import Background from './components/Background';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Team from './pages/Team';
import Bio from './pages/Bio';
import Report from './pages/Report';
import Blog from './pages/Blog';
import ArticleOne from './pages/ArticleOne';
import ArticleTwo from './pages/ArticleTwo';

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
  {
    path: '/team',
    component: Team,
    exact: true,
  },
  {
    path: '/contact',
    component: Contact,
    exact: true,
  },
  {
    path: '/report',
    component: Report,
    exact: true,
  },
  {
    path: '/blog',
    component: Blog,
    exact: true,
  },
  {
    path: '/blog/article/1',
    component: ArticleOne,
    exact: true,
  },
  {
    path: '/blog/article/2',
    component: ArticleTwo,
    exact: true,
  },
  {
    path: '/bio/:id',
    component: Bio,
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
