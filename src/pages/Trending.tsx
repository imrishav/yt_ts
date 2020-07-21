import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import styled from 'styled-components';

interface TitleProps {
  nopad?: boolean;
}

export const StyledTrending = styled.div<TitleProps>`
  padding: 1rem 1.3rem;
  width: 85%;
  margin: 0 auto;
  padding-top: 2rem;
  padding-bottom: 7rem;
  padding-bottom: ${(props) => (props.nopad! ? '0.5rem' : '7rem')};

  @media screen and (max-width: 930px) {
    width: 95%;
  }

  @media screen and (max-width: 800px) {
    width: 100%;
  }
`;

const Trending = () => {
  return <StyledTrending>Trendign...</StyledTrending>;
};

export default Trending;
