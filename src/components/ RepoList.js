import React, { Component } from 'react';
import RepoItem from './RepoItem'

class RepoList extends React.Component {

  render() {
    var rows = [];
    this.props.repos.map((repo, index) => rows.push(<RepoItem key={index} repo={repo} />))
    return (
      <div className="list-group">
        {rows}
      </div>
    )
  }
}
RepoList.defaultProps = {
  repos: []
};

export default RepoList;