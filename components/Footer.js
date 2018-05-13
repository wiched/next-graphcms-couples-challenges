import React, { Component, Fragment } from 'react'

export default class Footer extends Component {
  render() {
    return (
      <Fragment>
        <footer className="page-footer  blue-grey darken-3">
          <div className="footer-copyright">
            <div className="container">
              © 2018 Copyright Text
               <a className="grey-text text-lighten-4 right" href="https://devzone.bg">Created by DevZone.BG</a>
            </div>
          </div>
        </footer>
        <style jsx>{`
        .page-footer {
          margin-top: 100px;
          padding-top: 0;
        }
        `}
        </style>
      </Fragment>
    )

  }

}
