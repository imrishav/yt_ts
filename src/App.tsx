import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchData, ProfileDetails } from './actions';
import { StoreState } from './reducers';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { ThemeProvider } from 'styled-components';
import Container from './styles/Container.styles';
import GlobalStyle from './styles/Global.styles';
import { darkTheme } from './styles/Theme.styles';

import Header from './components/Header';
import Sidebar from './components/Sidebar';

import HomePage from './pages/HomePage';
import Trending from './pages/Trending';

interface AppProps {
  profile: ProfileDetails;
  fetchData(): any;
}

const App: React.FC<AppProps> = ({ fetchData, profile }) => {
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyle />
      <Router>
        <Header />
        <Sidebar />
        <Container>
          <Route path="/" exact component={HomePage} />
          <Route path="/trending" exact component={Trending} />
        </Container>
      </Router>
    </ThemeProvider>
  );
};

const mapStateToProps = ({ profile }: StoreState) => {
  return {
    profile: profile,
  };
};

export default connect(mapStateToProps, { fetchData })(App);
