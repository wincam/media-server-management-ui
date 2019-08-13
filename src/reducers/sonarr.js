import actionTypes from '../actions/actionTypes';

const DEFAULT_STATE = {
    loading: false,
    loaded: false,
    data:    {},
    errors:  null,
};

const buildSonarrSeriesMap = (responseJson) => {
    const seriesMap = {};
    responseJson.forEach((series) => {
        const { tvdbId } = series;
        seriesMap[tvdbId] = series;
    });
    return seriesMap;
};

export default (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case actionTypes.FETCH_SONARR_SERIES_STARTED:
            return { ...state, loading: true };
        case actionTypes.FETCH_SONARR_SERIES_SUCCESS:
            return {
                ...state,
                loading: false,
                loaded: true,
                data: buildSonarrSeriesMap(action.payload),
                errors: null,
            };
        case actionTypes.FETCH_SONARR_SERIES_ENDED:
            return { ...state, loading: false, errors: action.payload };
        default:
            return state;
    }
};

export const isLoaded = (state) => {
    if (!state) {
        throw new Error('no store');
    }
    if (state.loaded === null) {
        throw new Error('no store');
    }
    return state.loaded;
};

export const getAllSeries = (state) => {
    if (!state) {
        throw new Error('no store');
    }
    if (!(state.data instanceof Object)) {
        throw new Error('no store');
    }
    return Object.values(state.data);
};
