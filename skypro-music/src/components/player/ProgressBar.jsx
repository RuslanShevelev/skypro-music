import { timePresent } from '../../utils/utils'
import * as S from './Player.styles'

export const ProgressBar = ({ audioRef, timeProgress, duration }) => (
  <>
    {/* <svg width="62" height="50" viewBox="0 0 62 50" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d_1_3323)">
<mask id="path-1-inside-1_1_3323" fill="white">
<path fillRule="evenodd" clipRule="evenodd" d="M13 3C9.68629 3 7 5.68629 7 9V25C7 28.3137 9.68629 31 13 31H23.8579L31 38.1421L38.1421 31H49C52.3137 31 55 28.3137 55 25V9C55 5.68629 52.3137 3 49 3H13Z"/>
</mask>
<path fillRule="evenodd" clipRule="evenodd" d="M13 3C9.68629 3 7 5.68629 7 9V25C7 28.3137 9.68629 31 13 31H23.8579L31 38.1421L38.1421 31H49C52.3137 31 55 28.3137 55 25V9C55 5.68629 52.3137 3 49 3H13Z" fill="white"/>
<path d="M23.8579 31L24.565 30.2929L24.2721 30H23.8579V31ZM31 38.1421L30.2929 38.8492L31 39.5564L31.7071 38.8492L31 38.1421ZM38.1421 31V30H37.7279L37.435 30.2929L38.1421 31ZM8 9C8 6.23858 10.2386 4 13 4V2C9.13401 2 6 5.13401 6 9H8ZM8 25V9H6V25H8ZM13 30C10.2386 30 8 27.7614 8 25H6C6 28.866 9.13401 32 13 32V30ZM23.8579 30H13V32H23.8579V30ZM31.7071 37.435L24.565 30.2929L23.1508 31.7071L30.2929 38.8492L31.7071 37.435ZM37.435 30.2929L30.2929 37.435L31.7071 38.8492L38.8492 31.7071L37.435 30.2929ZM49 30H38.1421V32H49V30ZM54 25C54 27.7614 51.7614 30 49 30V32C52.866 32 56 28.866 56 25H54ZM54 9V25H56V9H54ZM49 4C51.7614 4 54 6.23858 54 9H56C56 5.13401 52.866 2 49 2V4ZM13 4H49V2H13V4Z" fill="black" fillOpacity="0.15" mask="url(#path-1-inside-1_1_3323)"/>
</g>
<text x="18" y="23"  fill="black" fontSize="16" fontWeight="400">{timePresent(timeProgress)}</text> <defs>
<filter id="filter0_d_1_3323" x="0" y="0" width="62" height="49.1421" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="3.5"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_3323"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_3323" result="shape"/>
</filter>
</defs>
</svg> */}
    <S.currentSpan>
      {timePresent(timeProgress)} / {timePresent(duration)}
    </S.currentSpan>
    <S.barPlayerProgress
      type="range"
      onChange={(e) => {
        // eslint-disable-next-line no-param-reassign
        audioRef.current.currentTime = e.target.value
      }}
      min={0}
      max={duration}
      value={timeProgress}
      step={0.1}
    />
  </>
)
