import React, { Component } from 'react';
import { Vimeo } from 'vimeo';
import SearchBar from './SearchBar';
import 'antd/dist/antd.css'
import './App.css';


class App extends Component {
  constructor() {
    super();

    let vimeo = new Vimeo(
      process.env.REACT_APP_VIMEO_CLIENT_ID,
      process.env.REACT_APP_VIMEO_CLIENT_SECRET,
      process.env.REACT_APP_VIMEO_ACCESS_TOKEN
    );

    vimeo.request({
      path: '/channels/staffpicks/videos',
      query: {
        page: 1
      }
    }, (error, body, statusCode, headers) => {
      if (error) {
        console.log(error);
      } else {
        console.log(body);
      }
    });
  }

  render() {
    return (
      <SearchBar />
    );
  }
}

export default App;
