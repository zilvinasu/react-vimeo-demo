import React, { Component } from 'react';
import VideoItem from './VideoItem';

class VideoList extends Component {
  render() {
    return (
      <div className="ant-row-flex">
        {this.props.videos.map(video =>
          <div
            className="ant-col-6"
            key={video.resource_key}>
            <VideoItem
              video={video}
              onVideoSelect={this.props.onVideoSelect} />
          </div>
        )}
      </div>
    )
  }
}

export default VideoList;