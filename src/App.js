import React, { lazy, Suspense } from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';

// Styles
import './css/tailwind.css';

// Helpers
import { history } from './helpers/history';

// Components/Containers
import PageLoader from './components/PageLoader';

// String constants
import ROUTES from './constants/routes';

// Components/Containers (LAZY)
const Home = lazy(() => import('./components/Home'));
const SearchContainer = lazy(() => import('./containers/SearchContainer'));
const ResultsContainer = lazy(() => import('./containers/ResultsContainer'));
const About = lazy(() => import('./components/About'));
const PageNotFound = lazy(() => import('./components/PageNotFound'));

export default props => {

  return (
    <Suspense fallback={<PageLoader />}>
      <Router history={history}>
        <Switch>
          <Route exact path={ROUTES.HOME} component={Home} />
          <Route path={ROUTES.ABOUT} component={About} />
          <Route path={ROUTES.SEARCH} component={SearchContainer} />
          <Route path={ROUTES.RESULTS} component={ResultsContainer} />
          <Route path={ROUTES.NOT_FOUND} component={PageNotFound} />
          <Redirect to={ROUTES.NOT_FOUND} />
        </Switch>
      </Router>
    </Suspense>
  )
};
