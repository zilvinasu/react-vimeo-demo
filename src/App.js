import React, { Component } from 'react';
import _ from 'lodash';
import { Vimeo } from 'vimeo';
import SearchBar from './SearchBar';
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
      path: `/videos?query=${term}`
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
      <SearchBar onSearchTermChange={debounceSearchVideos} />
    );
  }
}

export default App;
