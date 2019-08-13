import React from 'react';
import PropTypes from 'prop-types';
import MediaItem from './MediaItem';

const MediaList = ({ mediaInfo }) => (
    <div>
        {mediaInfo.map(info => (<MediaItem key={info.sortTitle} mediaInfo={info} />))}
    </div>
);

MediaList.propTypes = {
    mediaInfo: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
            sortTitle: PropTypes.string.isRequired,
        }),
    ).isRequired,
};

export default MediaList;
