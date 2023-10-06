// import { useEffect, useState } from 'react'
import TrackList from '../../components/traklist/Tracklist'
import { useGetFavoritesQuery } from '../../services/AuthorizedRequestService'

function Favorites() {
  const { data, error, isLoading } = useGetFavoritesQuery()

  return (
    <>
      <TrackList
        title="Мои треки"
        tracks={data}
        error={error}
        isLoading={isLoading}
      />
      {isLoading && <div>Загрузка...</div>}
      {error && <div>Ошибка...{error}</div>}
    </>
  )
}

export default Favorites
