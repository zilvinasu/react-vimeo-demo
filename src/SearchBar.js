import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: 'runnin' };
  }

  render() {
    return (
      <div className="ant-row search-bar">
        <div className="ant-col-18 ant-col-offset-3">
          <input
            className="ant-input ant-input-lg"
            value={this.state.term}
            onChange={event => this.onInputChange(event.target.value)} />
        </div>
      </div>
    )
  }

  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
}

export default SearchBar;
