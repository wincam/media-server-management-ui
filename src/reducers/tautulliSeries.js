import actionTypes from '../actions/actionTypes';
import { getTVDBID } from '../service/tautulli';

const DEFAULT_STATE = {
    loading: false,
    loaded: false,
    data:    {},
    errors:  null,
};

export default (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case actionTypes.FETCH_TAUTULLI_SERIES_LIST_STARTED:
            return { ...state, loading: true };
        case actionTypes.FETCH_TAUTULLI_SERIES_LIST_SUCCESS:
            return {
                ...state,
                loading: false,
                loaded: true,
            };
        case actionTypes.FETCH_SONARR_SERIES_FAILURE:
            return { ...state, loading: false, errors: action.payload };
        case actionTypes.FETCH_TAUTULLI_SERIES_METADATA_SUCCESS:
            return {
                ...state,
                loading: false,
                loaded: true,
                data: {
                    ...state.data,
                    [getTVDBID(action.payload)]: action.payload,
                },
            };
        default:
            return state;
    }
};
