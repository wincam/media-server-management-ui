import actionTypes from './actionTypes';
import { fetchSonarrSeries } from '../service/sonarr';

// eslint-disable-next-line import/prefer-default-export
export const getSonarrSeries = () => (dispatch) => {
    dispatch({
        type: actionTypes.FETCH_SONARR_SERIES_STARTED,
    });

    return fetchSonarrSeries()
        .then((response) => {
            dispatch({
                type: actionTypes.FETCH_SONARR_SERIES_SUCCESS,
                payload: response,
            });
        })
        .catch((error) => {
            dispatch({
                type: actionTypes.FETCH_SONARR_SERIES_FAILURE,
                payload: error,
            });
        })
        .finally(() => {
            dispatch({
                type: actionTypes.FETCH_SONARR_SERIES_ENDED,
            });
        });
};
