import React from 'react';
import styled from 'styled-components';
import { DUMMY_VIDEO } from './data';
import GridVideo from '../styles/Grid.styles';
import VideoBlock, { VideoTypes } from '../components/VideoBlock';
import { Link } from 'react-router-dom';

export const StyledHome = styled.div`
  padding: 1.3rem;
  width: 90%;
  margin: 0 auto;
  padding-bottom: 7rem;

  h2 {
    margin-bottom: 1rem;
  }

  @media screen and (max-width: 1093px) {
    width: 95%;
  }

  @media screen and (max-width: 1090px) {
    width: 99%;
  }

  @media screen and (max-width: 870px) {
    width: 90%;
  }

  @media screen and (max-width: 670px) {
    width: 99%;
  }

  @media screen and (max-width: 600px) {
    width: 90%;
  }

  @media screen and (max-width: 530px) {
    width: 100%;
  }
`;

const HomePage: React.FC = () => {
  console.log(DUMMY_VIDEO);
  return (
    <StyledHome>
      <h2>Recommended</h2>
      <GridVideo>
        {DUMMY_VIDEO.map((video: VideoTypes) => (
          <Link key={video.id} to={`watch/${video.id}`}>
            <VideoBlock video={video} />
          </Link>
        ))}
      </GridVideo>
    </StyledHome>
  );
};

export default HomePage;
