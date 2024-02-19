import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setAuth } from '../../store/slices/authSlice'
import * as S from '../../App.styles'
import Navigation from '../../components/navmenu/NavMenu'
import Player from '../../components/player/AudioPlayer'
import Err404 from '../../components/404/404'
import Sidebar from '../../components/sidebar/Sidebar'

export const NotFound = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const logout = () => {
    dispatch(setAuth(null))
    navigate('/skypro-music/login', { replace: false })
    localStorage.removeItem('auth')
  }

  return (
    <S.wrapper>
      <S.container>
        <S.main>
          <Navigation logout={logout} />
          <Err404 />
          <Sidebar logout={logout} />

          <Player loading />
        </S.main>
      </S.container>
    </S.wrapper>
  )
}
