
import { Route, Switch } from "react-router-dom";
import Layout from './UI/Layout';
import Default from './components/Default'
import Menu1 from './components/Menu1'
import Menu2 from './components/Menu2'


function App() {
  return (
    <Layout>
      <Switch>
      <Route path="/" exact>
        <Default />
      </Route>
      <Route path="/menu1">
        <Menu1 />
      </Route>
      <Route path="/menu2">
        <Menu2 />
      </Route>
      </Switch>
    </Layout>
  );
}

export default App;
