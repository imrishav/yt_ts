import React, { useEffect } from 'react';
import styled, { css } from 'styled-components';

import { connect } from 'react-redux';
import { Link, useParams, RouteComponentProps } from 'react-router-dom';
import VideoBlock, { VideoTypes } from '../components/VideoBlock';
import Player from '../components/Player/Player.component';
import { DUMMY_VIDEO } from './data';
import Comment from '../components/Comment/Comment.component';
import { StoreState } from '../reducers/index';
import { Dispatch } from 'redux';
import { fetchVideoById } from '../actions/singleVideoActions';
import { timeConversion } from '../utils/utilsFunction';
import { FaThumbsDown, FaThumbsUp } from '../components/Icons';

interface VideoViewStyleProps {
  filledLike?: any;
  filledDislike?: any;
}

const Wrapper = styled.div<VideoViewStyleProps>`
  display: grid;
  grid-template-columns: 70% 1fr;
  grid-gap: 2rem;
  padding: 1.3rem;
  padding-bottom: 7rem;

  .video-container .video-info {
    margin-top: 1rem;
    margin-bottom: 1rem;
  }

  .video-info span {
    color: ${(props) => props.theme.secondaryColor};
  }

  .channel-info-flex {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .video-info-stats {
    display: flex;
    align-items: center;
  }

  .video-info-stats div {
    margin-left: 6rem;
    position: relative;
    top: -2px;
  }

  .channel-info-flex button {
    font-size: 0.9rem;
  }

  .channel-info-description {
    padding-top: 1rem;
    border-bottom: 1px solid ${(props) => props.theme.darkGrey};
    border-top: 1px solid ${(props) => props.theme.darkGrey};
  }

  .channel-info-description p {
    font-size: 0.9rem;
    padding: 1rem 0;
  }

  .related-videos img {
    height: 140px;
  }

  .related-videos div {
    margin-bottom: 1rem;
  }

  svg {
    fill: ${(props) => props.theme.darkGrey};
  }

  ${(props) =>
    props.filledLike &&
    css`
      .like svg {
        fill: ${(props) => props.theme.blue};
      }
    `}

  ${(props) =>
    props.filledDislike &&
    css`
      .dislike svg {
        fill: ${(props) => props.theme.blue};
      }
    `}

	@media screen and (max-width: 930px) {
    grid-template-columns: 90%;
    .related-videos {
      display: none;
    }
  }

  @media screen and (max-width: 930px) {
    grid-template-columns: 1fr;
  }

  @media screen and (max-width: 425px) {
    .video-info-stats div {
      margin-left: 1rem;
    }
  }
`;

interface VideoProperties {
  User: any;
  title: string;
  views: number;
  createdAt: Date;
  likesCount: number;
  dislikesCount: number;
  userId: string;
  subscribersCount: number;
  description: string;
  comments: any[];
  isLiked: Boolean;
  isDisliked: Boolean;
}

interface VideoBlockProps {
  // video: VideoTypes;
  fetchVideoById?: (id: string) => void;
  video: VideoProperties;
  isLoading: Boolean;
}

const VideoView: React.FC<VideoBlockProps> = ({
  fetchVideoById,
  video,
  isLoading,
}) => {
  let { id } = useParams();
  console.log(video);

  useEffect(() => {
    fetchVideoById(id);
  }, []);

  return (
    <Wrapper
      filledLike={video && video?.isLiked}
      // filledDislike={video && video?.isDisliked}
      filledDislike={false}
    >
      <div className="video-container">
        <div className="video">{!isLoading && <Player />}</div>

        <div className="video-info">
          <h3>{video.title}</h3>

          <div className="video-info-stats">
            <p>
              <span>{video.views} views</span> <span>•</span>{' '}
              <span> {timeConversion(video.createdAt)} ago</span>
            </p>

            <div className="likes-dislikes flex-row">
              <p className="flex-row like">
                {/* <LikeIcon onClick={handleLike} />{" "} */}
                <FaThumbsUp size={30} style={{ fill: 'black' }} />
                <span>{video.likesCount}</span>
              </p>
              <p className="flex-row dislike" style={{ marginLeft: '1rem' }}>
                {/* <DislikeIcon onClick={handleDislike} />{" "} */}
                <FaThumbsDown size={30} style={{ fill: 'black' }} />

                <span>{video.dislikesCount}</span>
              </p>
            </div>
          </div>
        </div>

        <div className="channel-info-description">
          <div className="channel-info-flex">
            <div className="channel-info flex-row">
              <img className="avatar md" src={video.User?.avatar} />
              <div className="channel-info-meta">
                <h4>
                  <Link to={`/channel/${video.userId}`}>
                    {video.User?.username}
                  </Link>
                </h4>
                <span className="secondary small">
                  {video.subscribersCount} subscribers
                </span>
              </div>
            </div>
            {/* { {!video.isVideoMine && !video.isSubscribed && (
          <Button
            onClick={() =>
              subscribeChannel({
                channel: {
                  id: video.User.id,
                  avatar: video.User.avatar,
                  username: video.User.username,
                },
                type: SUBSCRIBE_FROM_VIDEO,
              })
            }
          >
            Subscribe
          </Button> 
        )} */}
            {/* {!video.isVideoMine && video.isSubscribed && (
          <Button
            grey
            onClick={() =>
              unsubscribeChannel({
                type: UNSUBSCRIBE_FROM_VIDEO,
                channelId: video.userId,
              })
            }
          >
            Subscribed
          </Button>
        )} */}
          </div>

          <p>{video.description}</p>
        </div>
        <Comment />
      </div>

      <div className="related-videos">
        <h3 style={{ marginBottom: '1rem' }}>Up Next</h3>
        {/* {!isFetching &&
      next
        .filter((vid) => vid.id !== video.id)
        .slice(0, 3)
        .map((video) => (
          <Link key={video.id} to={`/watch/${video.id}`}>
            <VideoCard key={video.id} hideavatar={true} video={video} />
          </Link>
        ))} */}
        {/* {DUMMY_VIDEO.map((video: VideoTypes) =>  {
          return (

          )
          return (
          <Link key={video.id} to={`watchs/${video.id}`}>
            <VideoBlock video={video} />
          </Link>
        ))}  */}
        {DUMMY_VIDEO.map((video: VideoTypes) => {
          return (
            <Link key={video.id} to={`/watch/${video.id}`}>
              <VideoBlock video={video} />
            </Link>
          );
        })}
      </div>
    </Wrapper>
  );
};

const mapStateToProps = (state: StoreState) => {
  return {
    video: state.video.video,
    isLoading: state.video.isLoading,
  };
};

const mapDispatch = (dispatch: Dispatch) => {
  return {
    fetchVideoById: (id) => dispatch<any>(fetchVideoById(id)),
  };
};

export default connect(mapStateToProps, mapDispatch)(VideoView);
