import React, { Component } from 'react';
import _ from 'lodash';
import { queryString } from './Utils';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import 'antd/dist/antd.css'
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      videos: []
    }
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
      .then((json) => this.setState({ videos: json.data }));
  }
  render() {
    const debounceSearchVideos = _.debounce((term) => this.searchForTerm(term), 300);
    return (
      <div>
        <SearchBar onSearchTermChange={debounceSearchVideos} />
        <VideoList
          videos={this.state.videos}
          onVideoSelect={selectedVideo => this.setState({ selectedVideo })} />
        <div
          style={{ width: '200px' }}
          dangerouslySetInnerHTML={{ __html: this.state.selectedVideo ? this.state.selectedVideo.embed.html : null }} />;
      </div>
    );
  }
}


export default App;
