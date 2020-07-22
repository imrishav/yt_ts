import React, { useEffect } from 'react';
import styled, { css } from 'styled-components';

import { connect } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import VideoBlock, { VideoTypes } from '../components/VideoBlock';
import Player from '../components/Player/Player.component';
import { DUMMY_VIDEO } from './data';
import Comment from '../components/Comment/Comment.component';

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

const VideoView = () => {
  return (
    <Wrapper
      // filledLike={video && video.isLiked}
      // filledDislike={video && video.isDisliked}
      filledLike={true}
      filledDislike={true}
    >
      <div className="video-container">
        {/* <div className="video">{!isFetching && <Player />}</div> */}
        <div className="video">
          <Player />
        </div>

        <div className="video-info">
          <h3>Video Title</h3>

          <div className="video-info-stats">
            <p>
              {/* <span>{video.views} views</span> <span>•</span>{" "} */}
              <span>Video VIews views</span> <span>•</span>{' '}
              {/* <span>{timeSince(video.createdAt)} ago</span> */}
            </p>

            <div className="likes-dislikes flex-row">
              <p className="flex-row like">
                {/* <LikeIcon onClick={handleLike} />{" "} */}
                {/* <span>Likes Count {video.likesCount}</span> */}
                <span>Likes Count </span>
              </p>
              <p className="flex-row dislike" style={{ marginLeft: '1rem' }}>
                {/* <DislikeIcon onClick={handleDislike} />{" "} */}
                {/* <span>{video.dislikesCount}</span> */}
                <span>Dislike Count </span>
              </p>
            </div>
          </div>
        </div>

        <div className="channel-info-description">
          <div className="channel-info-flex">
            <div className="channel-info flex-row">
              <img
                className="avatar md"
                // src={video.User?.avatar}
                src="abc.jpg"
                alt="channel avatar"
              />
              <div className="channel-info-meta">
                <h4>
                  {/* <Link to={`/channel/${video.userId}`}>
                {video.User?.username}
              </Link> */}
                  <h4>Link to user</h4>
                </h4>
                <span className="secondary small">
                  {/* {video.subscribersCount} subscribers */}
                  Subs count subscribers
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

          {/* <p>{video.description}</p> */}
          <p>description</p>
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
          console.log(video);
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

export default VideoView;
