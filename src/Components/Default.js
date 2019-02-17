import React, { Component } from 'react';

export default class Default extends Component {
  render() {
    return (
      <div>
        <div className="continer">
          <div className="row">
            <div className="col-10 mx-auto text-center text-title text-uppercase">
              <h1 className="display-3">404</h1>
              <h1>Error</h1>
              <h2>page not found</h2>
              <h3>
                teh requested URL{' '}
                <span className="text-denger">
                  {this.props.location.pathname}
                </span>{' '}
                was not found
              </h3>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
