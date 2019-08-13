import { connect } from 'react-redux';
import { getAllSeries } from '../../reducers';
import MediaList from '../../components/media/MediaList';


export const mapStateToProps = state => ({
    mediaInfo: getAllSeries(state),
});

export default connect(mapStateToProps)(MediaList);
