import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';

const Player: React.FC = () => {
  let videoRef: any;
  useEffect(() => {
    const player = videojs(videoRef);
    // if (!previewUrl) {
    //   player.poster(poster);
    //   player.src(src);
    // } else {
    //   player.src({ type: "video/mp4", src: previewUrl });
    // }

    // player.on("ended", function () {
    //   if (!isViewed && !previewUrl) {
    //     addToHistory(video);
    //   }
    // });

    return () => {
      player.dispose();
    };
  }, []);

  return (
    <div>
      <div data-vjs-player>
        <video
          controls
          ref={(node) => (videoRef = node)}
          className="video-js vjs-fluid vjs-big-play-centered"
        ></video>
      </div>
    </div>
  );
};

export default Player;
