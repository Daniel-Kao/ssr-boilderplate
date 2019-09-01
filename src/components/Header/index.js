import React, { useState, useEffect, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { actions } from './store';

const Header = props => {
  return (
    <div>
      <Link to="/">home</Link>
      <br />
      {props.login ? (
        <Fragment>
          <Link to="/translation">translate</Link>
          <br />
          <div onClick={() => props.tryLogout()}>logout</div> <br />
        </Fragment>
      ) : (
        <div onClick={() => props.tryLogin()}>Login</div>
      )}
    </div>
  );
};

const mapStateToProps = state => ({
  login: state.header.login
});
const mapDispatchToProps = dispatch => ({
  tryLogin() {
    dispatch(actions.tryLogin());
  },
  tryLogout() {
    dispatch(actions.tryLogout());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
