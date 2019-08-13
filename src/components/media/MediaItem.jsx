import { Card } from 'react-bootstrap';
import React from 'react';
import PropTypes from 'prop-types';

const MediaItem = ({ mediaInfo }) => (
    <Card>
        <Card.Body>
            <Card.Title>{mediaInfo.title}</Card.Title>
        </Card.Body>
    </Card>
);

MediaItem.propTypes = {
    mediaInfo: PropTypes.shape({
        title: PropTypes.string.isRequired,
        sortTitle: PropTypes.string.isRequired,
    }).isRequired,
};

export default MediaItem;
