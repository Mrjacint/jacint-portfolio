import React,{ useState } from 'react';
import 'aos/dist/aos.css';
import { Route, Switch } from 'react-router-dom';

import HomePage from './components/HomePage/HomePage';
import Layout from './hoc/Layout';
import TermAndCond from './components/TermAndCond/TermAndCond';
import PrivacyPolicy from './components/PrivacyPolicy/PrivacyPolicy';
import NotMatch from './components/HomePage/404'

function App() {
  const [headerElmentClass, setHeaderElementClass] = useState({
    active: 'home'
  });
  const handleScroll = (s) => {
    setHeaderElementClass(s)
  }

  return (
    <Layout elmclass={headerElmentClass}>
      <Switch>
        <Route path="/privacypolicy" component={PrivacyPolicy} />
        <Route path="/termandcond" component={TermAndCond} />
        <Route path="/" exact render={() => <HomePage scrollTo={handleScroll} />} />
        <Route path="*" component={NotMatch} />
      </Switch>
    </Layout>
  );
}

export default App;
