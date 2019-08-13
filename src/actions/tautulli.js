// eslint-disable-next-line import/prefer-default-export
import actionTypes from './actionTypes';
import { fetchLibrary, fetchLibraryDetails, fetchMetaData } from '../service/tautulli';
import { getTautulliSeriesLibraryId } from '../service';


export const getTautulliMetaData = (ratingKey, {
    startAction, successAction, failAction, endAction,
}) => (dispatch) => {
    dispatch({
        type: startAction,
        payload: ratingKey,
    });
    return fetchMetaData(ratingKey)
        .then((response) => {
            dispatch({
                type: successAction,
                payload: response,
            });
        })
        .catch((error) => {
            dispatch({
                type: failAction,
                payload: error,
            });
        })
        .finally(() => {
            dispatch({
                type: endAction,
                payload: ratingKey,
            });
        });
};

export const getAllTautulliMetaData = (ratingKeys, actions) => dispatch => ratingKeys.map(
    ratingKey => getTautulliMetaData(ratingKey, actions)(dispatch),
);

export const getAllTautulliMedia = (libraryActions, count) => (dispatch) => {
    const {
        id,
        list: {
            startAction, successAction, failAction, endAction,
        },
        metaData: metaDataActions,
    } = libraryActions;
    dispatch({
        type: startAction,
    });

    return fetchLibrary(id, count)
        .then((response) => {
            dispatch({
                type: successAction,
                payload: response,
            });
            getAllTautulliMetaData(response, metaDataActions)(dispatch);
        })
        .catch((error) => {
            dispatch({
                type: failAction,
                payload: error,
            });
        })
        .finally(() => {
            dispatch({
                type: endAction,
            });
        });
};

// eslint-disable-next-line import/prefer-default-export
export const getAllTautulli = library => (dispatch) => {
    const {
        id,
        count: {
            startAction, successAction, failAction, endAction,
        },
    } = library;
    dispatch({
        type: startAction,
        payload: id,
    });

    return fetchLibraryDetails(id)
        .then((response) => {
            dispatch({
                type: successAction,
                payload: response,
            });
            getAllTautulliMedia(library, response.count)(dispatch);
        })
        .catch((error) => {
            dispatch({
                type: failAction,
                payload: error,
            });
        })
        .finally(() => {
            dispatch({
                type: endAction,
                payload: id,
            });
        });
};

export const series = () => ({
    id: getTautulliSeriesLibraryId(),
    count: {
        startAction: actionTypes.FETCH_TAUTULLI_SERIES_COUNT_STARTED,
        successAction: actionTypes.FETCH_TAUTULLI_SERIES_COUNT_SUCCESS,
        failAction: actionTypes.FETCH_TAUTULLI_SERIES_COUNT_FAILURE,
        endAction: actionTypes.FETCH_TAUTULLI_SERIES_COUNT_ENDED,
    },
    list: {
        startAction: actionTypes.FETCH_TAUTULLI_SERIES_LIST_STARTED,
        successAction: actionTypes.FETCH_TAUTULLI_SERIES_LIST_SUCCESS,
        failAction: actionTypes.FETCH_TAUTULLI_SERIES_LIST_FAILURE,
        endAction: actionTypes.FETCH_TAUTULLI_SERIES_LIST_ENDED,
    },
    metaData: {
        startAction: actionTypes.FETCH_TAUTULLI_SERIES_METADATA_STARTED,
        successAction: actionTypes.FETCH_TAUTULLI_SERIES_METADATA_SUCCESS,
        failAction: actionTypes.FETCH_TAUTULLI_SERIES_METADATA_FAILURE,
        endAction: actionTypes.FETCH_TAUTULLI_SERIES_METADATA_ENDED,
    },
});
