import React, { Component } from 'react';
import './VideoDetail.css'

class VideoDetail extends Component {
  render() {
    return (
      <div
        dangerouslySetInnerHTML={{ __html: this.props.selectedVideo.embed.html }} />
    );
  }
}

export default VideoDetail;