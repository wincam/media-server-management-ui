import React from 'react';
import PropTypes from 'prop-types';
import LoadableComponent from './LoadableComponent';
import Layout from './Layout';


const LoadableLayout = ({ isLoaded }) => (
    <LoadableComponent isLoaded={isLoaded}>
        <Layout />
    </LoadableComponent>
);

LoadableLayout.propTypes = {
    isLoaded: PropTypes.bool.isRequired,
};

export default LoadableLayout;
