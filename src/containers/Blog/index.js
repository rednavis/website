import React, { Component, Fragment } from 'react';
import {
  BlogHead,
  BlogContent,
} from '../../сomponents'

class Blog extends Component {
  render() {
    return (
      <Fragment>
        <div className="sect-animation">
          <BlogHead />
          <BlogContent />
        </div>
      </Fragment>
    );
  }
}

export default Blog