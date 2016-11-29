import React from 'react';
import App from './App';
import Home from './Home';
import Blog from './Blog';
import Work from './Work';
import About from './About';
import { Router, Route,hashHistory,IndexRoute} from 'react-router';
class Routers extends React.Component {
  render () {
    return(
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={Home} />
          <Route path="blog" component={Blog} />
          <Route path="work" component={Work} />
          <Route path="about" component={About} />
        </Route>
      </Router>
    )
  }
}
export default Routers;
