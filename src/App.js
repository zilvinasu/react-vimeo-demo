import React, { Component } from 'react';
import _ from 'lodash';
import { queryString } from './Utils';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import 'antd/dist/antd.css'

class App extends Component {
  constructor() {
    super();
    this.state = {
      videos: [],
      selectedVideo: null
    }

    this.searchForTerm('skiing');
  }

  searchForTerm(term) {
    const q = queryString({
      access_token: process.env.REACT_APP_VIMEO_ACCESS_TOKEN,
      page: 1,
      per_page: 10,
      query: term
    });

    fetch(`/videos?${q}`)
      .then((resp) => resp.json())
      .then((json) => this.setState({ videos: json.data, selectedVideo: json.data[0] }));
  }
  render() {
    const debounceSearchVideos = _.debounce((term) => this.searchForTerm(term), 300);
    return (
      <div>
        <div className="ant-row">
          <div className="ant-col-12 ant-col-offset-6">
            <SearchBar onSearchTermChange={debounceSearchVideos} />
          </div>
        </div>
        <div className="ant-row">
          <div className="ant-col-12 ant-col-offset-2">
            {this.state.selectedVideo ? <VideoDetail selectedVideo={this.state.selectedVideo} /> : null }
          </div>
          <div className="ant-col-6">
            <VideoList
              videos={this.state.videos}
              onVideoSelect={selectedVideo => this.setState({ selectedVideo })} />
          </div>
        </div>
      </div>
    );
  }
}


export default App;
