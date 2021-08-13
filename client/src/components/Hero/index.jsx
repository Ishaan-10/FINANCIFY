import React, { useState } from "react";
import Video from "../..//videos/video.mp4";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
} from "./HeroElements";
import { Button } from "../ButtonElements";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";


const Hero = () => {
  const history = useHistory();
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };
  const redirectSignUp=()=>{
    history.push("/signup");
  }

  return (
    <HeroContainer id="home">
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </HeroBg>
      <HeroContent>
        <HeroH1>Managing Finances Made Easy</HeroH1>
        <HeroP>
          Create a new account and keep a track record of all your finances,
          transactions and subscriptions.
        </HeroP>
        <HeroBtnWrapper>
        <Button onMouseEnter={onHover}
                onMouseLeave={onHover} 
                primary='true' 
                dark='true' 
                smooth={true} 
                duration={500} 
                spy={true} 
                onClick={redirectSignUp}
                exact='true' 
                offset={-80}>
          Get Started
          {hover ? <ArrowForward /> : <ArrowRight/>}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
