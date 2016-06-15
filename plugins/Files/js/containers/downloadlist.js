import TransferListView from '../components/transferlist.js'
import { connect } from 'react-redux'

const mapStateToProps = (state) => ({
	transfers: state.files.get('downloading'),
})

const DownloadList = connect(mapStateToProps)(TransferListView)
export default DownloadList
