import React, { Component } from 'react';
import './VideoDetail.css'

class VideoDetail extends Component {
  render() {
    return (
      <div className="ant-card">
        <div
          style={{ padding: 0 }}
          className="ant-card-body"
          dangerouslySetInnerHTML={{ __html: this.props.selectedVideo.embed.html }} />
        <h3>{this.props.selectedVideo.name}</h3>
        <p>{this.props.selectedVideo.description}</p>
      </div>
    );
  }
}

export default VideoDetail;