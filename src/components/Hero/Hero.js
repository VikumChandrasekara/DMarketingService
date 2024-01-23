import React from 'react'
import { Form, Link } from 'react-router-dom'
import { Button , Container , MainHeading } from '../../globalStyles'
import {HeroVideo , HeroSection , HeroText, ButtonWrapper , HeroButton} from './HeroStyle';

const Hero = () => {
  return (
    <HeroSection>
        <HeroVideo src="./assets/DMarketingServiceIntroVideo.mp4" autoPlay muted loop/>
        <Container>
            <MainHeading>We provide the best digital solutions for you !!</MainHeading>
            <HeroText>
                Bring your business to the next level with us
            </HeroText>
            <ButtonWrapper>
                <Link to='signup'>
                    <Button>Get In Touch</Button>
                </Link>
                <Link to='/pricing'>
                <HeroButton>More Info</HeroButton>
                </Link>
            </ButtonWrapper>
        </Container>
    </HeroSection>
  )
}

export default Hero