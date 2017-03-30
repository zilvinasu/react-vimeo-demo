import React from 'react';
import _ from 'lodash';
import './VideoItem.css';

const VideoItem = (props) => {
    const { name, pictures } = props.video;

    return (
      <div
        onClick={() => props.onVideoSelect(props.video)}
        className="card ant-card ant-card-bordered">
        <div className="card-body ant-card-body">
          <img alt={name} src={_.last(pictures.sizes).link} width="100%" />
          <p className="description">{name}</p>
        </div>
      </div>
    );
}

export default VideoItem;
