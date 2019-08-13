import {
    getTautulliUrl, handleRequestError, pullOutJson, tautulliCommands,
} from '../index';

export const tvdbIDRegex = '^com.plexapp.agents.thetvdb:\\/\\/(?<tvdbID>\\d+)\\?';

export const getTVDBID = ({ guid }) => guid.match(tvdbIDRegex).groups.tvdbID;

export const getResponseData = response => response.response.data;

export const getRatingKeys = response => response.data.map(media => media.rating_key);

// eslint-disable-next-line import/prefer-default-export
export const fetchLibrary = (libraryId, count) => {
    const headers = new Headers({
        'content-type': 'application/json',
    });

    return fetch(
        getTautulliUrl(tautulliCommands.GET_LIBRARY_MEDIA_INFO, {
            section_id: libraryId,
            length: count,
        }),
        {
            method: 'GET',
            headers,
        },
    )
        .then(handleRequestError)
        .then(pullOutJson)
        .then(getResponseData)
        .then(getRatingKeys);
};

export const fetchMetaData = (ratingKey) => {
    const headers = new Headers({
        'content-type': 'application/json',
    });

    return fetch(
        getTautulliUrl(tautulliCommands.GET_METADATA, {
            rating_key: ratingKey,
        }),
        {
            method: 'GET',
            headers,
        },
    )
        .then(handleRequestError)
        .then(pullOutJson)
        .then(getResponseData);
};

export const fetchLibraryDetails = (libraryId) => {
    const headers = new Headers({
        'content-type': 'application/json',
    });

    return fetch(
        getTautulliUrl(tautulliCommands.GET_LIBRARY, {
            section_id: libraryId,
        }),
        {
            method: 'GET',
            headers,
        },
    )
        .then(handleRequestError)
        .then(pullOutJson)
        .then(getResponseData);
};
