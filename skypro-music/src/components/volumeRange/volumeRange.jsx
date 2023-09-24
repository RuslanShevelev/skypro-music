import { useState, useEffect } from 'react'
import * as S from './volumeRange.styles'

export const VolumeRange = ({ audioRef }) => {
  const [volume, setVolume] = useState(50)
  useEffect(() => {
    if (audioRef) {
      // eslint-disable-next-line no-param-reassign
      audioRef.current.volume = volume / 100
    }
  }, [volume, audioRef])

  return (
    <S.volumeProgressLine
      type="range"
      min={0}
      max={100}
      style={{
        background: `linear-gradient(to right, #FFFFFF ${volume}%, #797979 ${volume}%)`,
      }}
      value={volume}
      onChange={(e) => setVolume(e.target.value)}
    />
  )
}
