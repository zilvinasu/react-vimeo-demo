import React, { Component } from 'react';
import _ from 'lodash';
import { Vimeo } from 'vimeo';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import 'antd/dist/antd.css'
import './App.css';

const vimeo =  new Vimeo(
  process.env.REACT_APP_VIMEO_CLIENT_ID,
  process.env.REACT_APP_VIMEO_CLIENT_SECRET,
  process.env.REACT_APP_VIMEO_ACCESS_TOKEN
);

class App extends Component {

  constructor() {
    super();
    this.state = {
      videos: []
    }
  }

  searchForTerm(term) {
    vimeo.request({
      path: `/videos?query=${term}`,
      query: {
        page: 1,
        per_page: 10
      }
    }, (error, body, statusCode, headers) => {
      if (error) {
        console.log(error);
      } else {
        this.setState({videos: body.data});
      }
    });
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
