
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './configureStore';
import { getSonarrSeries } from './actions/sonarr';
import { getAllTautulli, series } from './actions/tautulli';
import LoadableLayout from './containers/LoadableLayout';

const app = (renderTo) => {
    const store = configureStore();
    store.dispatch(getSonarrSeries());
    store.dispatch(getAllTautulli(series()));
    ReactDOM.render(
        <Provider store={store}>
            <LoadableLayout />
        </Provider>, renderTo,
    );
};

export default app;
