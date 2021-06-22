import { Switch, Route } from 'react-router-dom';
import NavBar from './components/shared/NavBar';
import Home from './components/shared/Home';
import NoMatch from './components/shared/NoMatch';
import Profile from './components/user/Profile';
import { Container } from 'semantic-ui-react';

const App = () => (
  <>
  <NavBar />
  <Container>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/profile" component={Profile} />
      <Route component={NoMatch} />
    </Switch>
  </Container>
  </>
)

export default App;
