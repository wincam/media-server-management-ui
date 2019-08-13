import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSyncAlt } from '@fortawesome/free-solid-svg-icons';


const LoadableComponent = ({ children, isLoading, isLoaded }) => {
    if ((isLoading !== null && !isLoading) || (isLoaded !== null && isLoaded)) {
        return (
            <div>{children}</div>
        );
    }
    return (<FontAwesomeIcon icon={faSyncAlt} spin />);
};

LoadableComponent.propTypes = {
    children: PropTypes.node.isRequired,
    isLoading: PropTypes.bool,
    isLoaded: PropTypes.bool,
};

LoadableComponent.defaultProps = {
    isLoading: null,
    isLoaded: null,
};

export default LoadableComponent;
