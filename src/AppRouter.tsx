import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { ProfileDetails } from './actions';
import { StoreState } from './reducers';
import { Router, Route, Switch } from 'react-router-dom';
import history from './history';

import { ThemeProvider } from 'styled-components';
import Container from './styles/Container.styles';
import GlobalStyle from './styles/Global.styles';
import { darkTheme } from './styles/Theme.styles';

import Header from './components/Header';
import Login from './components/Auth/Login.component';
import Sidebar from './components/Sidebar';

import HomePage from './pages/HomePage';
import Trending from './pages/Trending';
import VideoView from './pages/VideoView';

const AppRouter: React.FC = () => (
  <Router history={history}>
    <Header />
    <Sidebar />
    <Container>
      <Switch>
        <Route path="/home" exact component={HomePage} />
        <Route path="/trending" exact component={Trending} />
        <Route path="/watch/:id" exact component={VideoView} />
        {/* <Login /> */}
      </Switch>
    </Container>
  </Router>
);

export default AppRouter;
