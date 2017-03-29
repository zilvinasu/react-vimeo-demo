import React, { Component } from 'react';
import VideoItem from './VideoItem';

class VideoList extends Component {
  render() {
    return (
      <div className="ant-row">
        <div className="ant-col-18 ant-col-offset-3">
          {this.props.videos.map(video =>
            <VideoItem
              video={video}
              onVideoSelect={this.props.onVideoSelect} />
          )}
        </div>
      </div>
    )
  }
}

export default VideoList;