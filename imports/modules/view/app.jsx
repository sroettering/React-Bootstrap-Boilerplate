import React, { Component } from 'react';

import AuthenticatedNavigation from '/imports/modules/navigation/authenticated-navigation';

export default class App extends Component {
  render() {
    return (
      <div>
        <AuthenticatedNavigation user={ null } />
        { this.props.children }
      </div>
    );
  }
}
