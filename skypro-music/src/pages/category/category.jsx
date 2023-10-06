import { useParams } from 'react-router-dom'
import { playLists } from '../../data'
import TrackList from '../../components/traklist/Tracklist'

function Categories() {
    const params = useParams()
    const currentPlayList = playLists.find((playlist) => playlist.id === Number(params.id))
  return (
          <TrackList title={currentPlayList.name} />
  )
}

export default Categories
