import React, { Component } from 'react';
import _ from 'lodash';

class VideoItem extends Component {
  render() {
    const { name, pictures } = this.props.video;
    return (
      <div
        onClick={() => this.props.onVideoSelect(this.props.video)}
        className="ant-card ant-card-bordered" style={{ marginBottom: 4 }}>
        <div className="ant-card-body" style={{ padding: 0 }}>
          <img alt={name} src={_.last(pictures.sizes).link} width="100%" />
          <p style={{ padding: 10 }}>{name}</p>
        </div>
      </div>
    );
  }
}

export default VideoItem;