import React, { useEffect } from 'react';
import Header from '../../components/Header';
import { connect } from 'react-redux';
import { getList } from './store/actions';

function Home(props) {
  useEffect(() => {
    if (!props.newsList.length) {
      props.getList();
    }
  }, []);
  return (
    <div>
      {props.newsList.map(item => {
        return <div key={item}>{item}</div>;
      })}
    </div>
  );
}

Home.loadData = store => {
  return store.dispatch(getList());
};

const mapStateToProps = state => ({
  name: state.home.name,
  newsList: state.home.newsList
});

const mapDispatchToProps = dispatch => ({
  getList() {
    dispatch(getList());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
