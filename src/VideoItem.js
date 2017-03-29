import React, { Component } from 'react';
import _ from 'lodash';

class VideoItem extends Component {
  render() {
    const { resource_key: resourceKey, name, pictures, description } = this.props.video;
    return (
      <div
        key={resourceKey}
        onClick={() => this.props.onVideoSelect(this.props.video)}
        className="ant-card ant-card-bordered">
        <div className="ant-card-head">
          <h3 className="ant-card-head-title">{name}</h3>
        </div>
        <div className="ant-card-body">
          <img alt={name} src={_.last(pictures.sizes).link_with_play_button} width="100%" />
          {description}
        </div>
      </div>
    );
  }
}

export default VideoItem;