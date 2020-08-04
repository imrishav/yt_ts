import React, { useEffect } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  .thumb {
    width: 100%;
    height: 180px;
    object-fit: cover;
    box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.2);
    border-radius: 4px;
  }

  .video-info-container {
    display: flex;
    margin-top: 0.3rem;
  }

  .channel-avatar img {
    position: relative;
    top: 5px;
  }

  .video-info span {
    font-size: 0.9rem;
    padding-right: 0.1rem;
  }

  @media screen and (max-width: 600px) {
    .thumb {
      height: 250px;
    }
  }

  @media screen and (max-width: 420px) {
    .thumb {
      height: 200px;
    }
  }
`;

export interface VideoTypes {
  id: number;
  thumbnail: string;
  title: string;
  User: {
    id: string;
    username: string;
  };
  views: number;
}

interface VideoBlockProps {
  video: VideoTypes;
  // fetchVideoById?: (id: string) => void;
  // currentVideo: [];
  // history?: History;
}

const VideoBlock = ({ video }) => {
  return (
    <Wrapper>
      <img className="thumb" src={video.thumbnail} alt="thumbnail" />
      <div className="video-info-container">
        {/* <div className="channel-avatar">
        {!hideavatar && (
          <Avatar
            style={{ marginRight: "0.8rem" }}
            src={video.User.avatar}
            alt="channel avatar"
          />
        )}
      </div> */}
        <div className="video-info">
          {/* <h4>
          {video.title.length > 40
            ? video.title.substring(0, 40) + "..."
            : video.title}
        </h4> */}
          <h4>{video.title}</h4>
          {/* {!nousername && (
          <span className="secondary">{video.User.username}</span>
        )} */}
          <span className="secondary">{video.User.username}</span>

          <p className="secondary">
            <span>{video.views || 0} views</span> <span>•</span>{' '}
          </p>
        </div>
      </div>
    </Wrapper>
  );
};

// const mapStateToProps = (state: StoreState) => {
//   return {
//     currentVideo: state.video.video,
//   };
// };

// const mapDispatch = (dispatch: Dispatch) => {
//   return {
//     fetchVideoById: (id) => dispatch<any>(fetchVideoById(id)),
//   };
// };

// export default connect(mapStateToProps, mapDispatch)(VideoBlock);

export default VideoBlock;
