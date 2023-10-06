import TrackList from '../../components/traklist/Tracklist'
import { useFetchAllTrucksQuery } from '../../services/AuthorizedRequestService'

function Main() {
  const { data, error, isLoading } = useFetchAllTrucksQuery()
  return <TrackList tracks={data} error={error} isLoading={isLoading} />
}

export default Main
