import { getSonarUrl, handleRequestError, pullOutJson } from '../index';

// eslint-disable-next-line import/prefer-default-export
export const fetchSonarrSeries = () => {
    const headers = new Headers({
        'content-type': 'application/json',
    });

    return fetch(
        getSonarUrl('/series'),
        {
            method: 'GET',
            headers,
        },
    )
        .then(handleRequestError)
        .then(pullOutJson);
};
