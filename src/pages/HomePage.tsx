import React, { useEffect } from 'react';
import styled from 'styled-components';
import { DUMMY_VIDEO } from './data';
import GridVideo from '../styles/Grid.styles';
import VideoBlock, { VideoTypes } from '../components/VideoBlock';
import { Link } from 'react-router-dom';
import {
  fetchVideos,
  fetchVideoStart,
  fetchVideoSuccess,
  fetchVideoFailure,
} from '../actions/videoActions';
import { StoreState } from '../reducers';
import { connect } from 'react-redux';

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

interface HomePageProps {
  isLoading: boolean;
  allVideos: string[];
  errorFetching: string;
  fetchVideos?: () => void;
}

const HomePage: React.FC<HomePageProps> = ({
  isLoading,
  allVideos,
  errorFetching,
  fetchVideos,
}) => {
  console.log({ isLoading, allVideos, errorFetching });

  useEffect(() => {
    fetchVideos!();
  }, []);

  return (
    <StyledHome>
      <h2>Recommended</h2>
      {!isLoading ? (
        <GridVideo>
          {allVideos.map((video: any) => (
            <Link key={video.id} to={`watch/${video.id}`}>
              <VideoBlock video={video} />
            </Link>
          ))}
        </GridVideo>
      ) : (
        <p>Loading...</p>
      )}
    </StyledHome>
  );
};

const mapStateToprops = (state: StoreState) => {
  return {
    isLoading: state.fetchVideo.isLoading,
    allVideos: state.fetchVideo.allVideos,
    errorFetching: state.fetchVideo.errorFetching,
  };
};

export default connect(mapStateToprops, { fetchVideos })(HomePage);
