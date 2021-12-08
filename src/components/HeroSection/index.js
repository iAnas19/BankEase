import React, { useState } from 'react'

import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroBtnWrapper, Heroh1, HeroP, ArrowForward, ArrowRight } from './HeroElements'
import video from '../../videos/front.mp4'
import { Button } from '../ButtonElements'

const HeroSection = () => {
  const [hover, setHover] = useState(false)

  const onHover = () => {
    setHover(!hover)
  }


  return (
    <HeroContainer id='home'>
      <HeroBg>
        <VideoBg autoPlay loop muted src={video} type='video/mp4' />
      </HeroBg>
      <HeroContent>
        <Heroh1>Virtual Banking Made Easy</Heroh1>
        <HeroP>Sign up for a new account today and receive $250 in credit towards your next payment</HeroP>
        <HeroBtnWrapper>
          <Button to='signup' onMouseEnter = {onHover} onMouseLeave= {onHover}
          primary = 'true' style={{color:'#fff'}} 
          smooth={true}
          duration={1000}>Get started {hover ? <ArrowForward /> : <ArrowRight />}</Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection
