import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { ProfileDetails } from './actions';
import { StoreState } from './reducers';

import { ThemeProvider } from 'styled-components';
import Container from './styles/Container.styles';
import GlobalStyle from './styles/Global.styles';
import { darkTheme } from './styles/Theme.styles';

import Login from './components/Auth/Login.component';
import Auth from './components/Auth/Auth.Component';

import AppRouter from './AppRouter';
import { ActionTypes } from './actions/types';
import { retainSession } from './actions/authActions';

interface AppProps {
  profile?: {};
  retainSession: (userData: any) => void;
}

const App: React.FC<AppProps> = ({ profile, retainSession }) => {
  let userExist = localStorage.getItem('user');
  let isAuthenticated = profile || userExist ? true : false;

  useEffect(() => {
    if (userExist) {
      retainSession(JSON.parse(userExist));
    }
  }, []);

  // console.log(localStorage.getItem('user'));

  // useEffect(() => {
  //   fetchData();
  // }, []);

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

export default connect(mapStateToProps, { retainSession })(App);
