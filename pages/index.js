import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { MainLayout } from '../src/layouts';
import { actions as commonActions } from '../src/sagaDucks/common/common';

class Index extends Component {
  componentDidMount() {
    const { init } = this.props;
    init();
  }

  render() {
    return (
      <MainLayout>
        <span>Hello people</span>
        <p>This is the home page</p>
      </MainLayout>
    );
  }
}

const mapStateToProps = state => (
  {
    init: state.common.init,
  }
);


const mapDispatchToProps = dispatch => ({
  ...bindActionCreators({
    ...commonActions,
  }, dispatch),
});

Index.propTypes = {
  init: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Index);
