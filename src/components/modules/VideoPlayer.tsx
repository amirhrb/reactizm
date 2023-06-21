'use client';

import ReactPlayer, { ReactPlayerProps } from 'react-player';

const VideoPlayer = (props: ReactPlayerProps) => {
  return <ReactPlayer {...props} />;
};

export default VideoPlayer;
