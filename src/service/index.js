import URI from 'urijs';

// eslint-disable-next-line import/prefer-default-export
export const getSonarUrl = endpoint => new URI({
    protocol: 'http',
    hostname: process.env.REACT_APP_SONARR_HOST,
    port: process.env.REACT_APP_SONARR_PORT,
    path: process.env.REACT_APP_SONARR_URL_BASE,
})
    .segment('api')
    .segment(endpoint)
    .search({
        apikey: process.env.REACT_APP_SONARR_API_KEY,
    })
    .toString();

export const tautulliCommands = {
    GET_LIBRARY_MEDIA_INFO: 'get_library_media_info',
    GET_METADATA: 'get_metadata',
    GET_LIBRARY: 'get_library',
};

export const getTautulliUrl = (command, commandParams) => new URI({
    protocol: 'http',
    hostname: process.env.REACT_APP_TAUTULLI_HOST,
    port: process.env.REACT_APP_TAUTULLI_PORT,
    path: process.env.REACT_APP_TAUTULLI_URL_BASE,
})
    .segment('api')
    .search({
        ...commandParams,
        apikey: process.env.REACT_APP_TAUTULLI_API_KEY,
        cmd: command,
    })
    .toString();

export const getTautulliSeriesLibraryId = () => process.env.REACT_APP_TAUTULLI_SHOW_LIBRARY_ID;

export const handleRequestError = (response) => {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
};

export const pullOutJson = response => response.json();
