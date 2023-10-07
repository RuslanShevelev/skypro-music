import { useParams } from 'react-router-dom'
import { playLists } from '../../data'
import TrackList from '../../components/traklist/Tracklist'
import { useGetSelectionsQuery } from '../../services/AuthorizedRequestService'

function Categories() {
    const params = useParams()
    const currentPlayList = playLists.find((playlist) => playlist.id === Number(params.id))
    const { data, error, isLoading  } = useGetSelectionsQuery(Number(params.id))
    console.debug(data)
  return (
          <TrackList title={currentPlayList.name} tracks={data?.items} error={error} isLoading={isLoading} />
  )
}

export default Categories
