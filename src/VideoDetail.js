import React, { Component } from 'react';
import './VideoDetail.css'

class VideoDetail extends Component {
  render() {
    return (
      <div>
        <div
          dangerouslySetInnerHTML={{ __html: this.props.selectedVideo.embed.html }} />
        <h3>{this.props.selectedVideo.name}</h3>
        <p>{this.props.selectedVideo.description}</p>
      </div>
    );
  }
}

export default VideoDetail;