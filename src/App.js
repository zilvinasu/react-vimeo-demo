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
        {this.state.selectedVideo ? <VideoDetail selectedVideo={this.state.selectedVideo} /> : null }
      </div>
    );
  }
}


export default App;
