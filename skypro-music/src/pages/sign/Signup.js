import { useState, useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { useFetching } from '../../utils/hooks'
import { LoginRegistrationForm } from '../../components/loginForm/loginForm'
import * as S from './signin.styles'
import { getRegistration } from '../../api/userapi'
import { AuthContext } from '../../components/context/context'

export const SignUp = () => {
  const {setIsAuth} = useContext(AuthContext)
  const [registrationData, setRegistrationData] = useState(null)
  const [apiErrors, setApiErrors] = useState(false)
  const [errors, setErrors] = useState(false)
  const navigate = useNavigate()


  const [fetchNewUser, loading, error] = useFetching(async (regData) => {
    const resp = await getRegistration(regData, setApiErrors)
    if (apiErrors) {
      setErrors(resp)
    } else {
      setIsAuth(resp)
      localStorage.setItem('auth', JSON.stringify(resp))
     navigate('/', { replace: true })
    }
    setApiErrors(false)
  })

  // console.log(user)

  useEffect(() => {
    if (registrationData) fetchNewUser(registrationData)
  }, [registrationData])


  return (
    <S.wrapper>
      <S.containerEnter>
        <S.modalBlock>
          <LoginRegistrationForm
            regForm
            setData={setRegistrationData}
            apiErrors={errors}
            loading={loading}

          />
          {loading && <div>Выполняется загрузка</div>}
          {error && (
            <div style={{ color: 'red', textAlign: 'center' }}>
              Произошла ошибка: {error}, попробуйте позже
            </div>
          )}
        </S.modalBlock>
      </S.containerEnter>
    </S.wrapper>
  )
}
