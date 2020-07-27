import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchData, ProfileDetails } from './actions';
import { StoreState } from './reducers';

import { ThemeProvider } from 'styled-components';
import Container from './styles/Container.styles';
import GlobalStyle from './styles/Global.styles';
import { darkTheme } from './styles/Theme.styles';

import Login from './components/Auth/Login.component';
import Auth from './components/Auth/Auth.Component';

import AppRouter from './AppRouter';

interface AppProps {
  profile?: {};
}

const App: React.FC<AppProps> = ({ profile }) => {
  let isAuthenticated = profile ? true : false;

  useEffect(() => {
    fetchData();
  }, []);

  console.log(isAuthenticated);

  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyle />

      {isAuthenticated ? <AppRouter /> : <Auth />}

      {/* <Login /> */}
    </ThemeProvider>
  );
};

const mapStateToProps = ({ profile }: StoreState) => {
  return {
    profile: profile.user,
  };
};

export default connect(mapStateToProps, null)(App);
