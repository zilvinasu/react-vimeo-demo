import React, { Component } from 'react';

class VideoList extends Component {
  render() {
    return (
      <div className="ant-row">
        <div className="ant-col-18 ant-col-offset-3">
          {this.props.videos.map((video) => {
            return (
              <div
                key={video.resource_key}
                onClick={() => this.props.onVideoSelect(video)}
                className="ant-card ant-card-bordered">
                <div className="ant-card-head">
                  <h3 className="ant-card-head-title">{video.name}</h3>
                </div>
                <div className="ant-card-body">{video.description}</div>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

export default VideoList;