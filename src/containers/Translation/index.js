import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { actions } from './store';
import { Redirect } from 'react-router-dom';

const Translation = props => {
  useEffect(() => {
    props.getTranslation();
  }, []);

  return props.login ? (
    <div>
      {props.list.map(item => (
        <div key={item}>{item}</div>
      ))}
    </div>
  ) : (
    <Redirect to="/" />
  );
};

const mapStateToProps = state => ({
  list: state.translation.list,
  login: state.header.login
});

const mapDispatchToProps = dispatch => ({
  getTranslation() {
    dispatch(actions.getTranslation());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Translation);
