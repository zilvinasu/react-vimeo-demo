import React, { Component } from 'react';
import './SearchBar.css';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { term: '' };
  }

  render() {
    return (
      <input
        className="search-bar ant-input ant-input-lg"
        onChange={event => this.onInputChange(event.target.value)}
        placeholder="Enter the video name"
        value={this.state.term} />
    )
  }

  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
}

export default SearchBar;
