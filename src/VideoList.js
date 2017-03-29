import React, { Component } from 'react';
import VideoItem from './VideoItem';

class VideoList extends Component {
  render() {
    return (
      <div>
        {this.props.videos.map(video =>
          <VideoItem
            key={video.resource_key}
            video={video}
            onVideoSelect={this.props.onVideoSelect} />
        )}
      </div>
    )
  }
}

export default VideoList;