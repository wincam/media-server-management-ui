import sonarrReducer, * as sonarr from './sonarr';
import tautulliSeriesReducer from './tautulliSeries';

export default {
    sonarr: sonarrReducer,
    tautulliSeries: tautulliSeriesReducer,
};

export const isSonarrLoaded = state => sonarr.isLoaded(state.sonarr);

export const getAllSeries = state => sonarr.getAllSeries(state.sonarr);
