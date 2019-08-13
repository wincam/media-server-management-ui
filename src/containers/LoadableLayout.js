import { connect } from 'react-redux';
import { isSonarrLoaded } from '../reducers';
import LoadableLayout from '../components/LoadableLayout';


export const mapStateToProps = state => ({
    isLoaded: isSonarrLoaded(state),
});


export default connect(mapStateToProps)(LoadableLayout);
