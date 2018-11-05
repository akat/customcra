import React, { Component } from 'react';
import { connect } from "react-redux";

const withLoader = (WrappedComponent) => {
    class withLoaderComponent extends Component {
        render() {
            return (<WrappedComponent {...this.props} />)
        }
    }
    const mapStateToProps = state => ({
        isLoading: state.app.isLoading
    });

    return connect(mapStateToProps)(withLoaderComponent)
}

export default withLoader
