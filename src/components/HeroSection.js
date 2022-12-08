import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div>
      <div className="hero-container">
        <image src={process.env.REACT_APP_AWS_S3_URI + '/bg.png'} />
        <h1>FMC Weekend goes online</h1>
        <p>
          After weeks of speculation, uncertainty and postponement, the FMC Weekend is back with a
          bang. After 6 hugely successful editions, this year's edition is going to be just as
          majestic as ever. What's even better this time around is the fact that you can have the
          same surreal experience in its entirety from the comfort of your own homes. Participate in
          various events to put your mettle to test, attend various workshops conducted by masters
          of their respective craft to refine your skills, all without getting out of your PJs.
          Check out the different sections on the website and once you do, we guarantee that you'll
          want to experience all the facets of FMC Weekend 2022.
        </p>
        <div className="hero-btns">
          <Button
            className="btns"
            buttonStyle="btn--outline"
            buttonSize="btn--large"
            isInternalLink={true}
            toLink="/sign-up">
            GET STARTED
          </Button>
          <Button
            className="btns"
            buttonStyle="btn--primary"
            buttonSize="btn--large"
            onClick={console.log('hey')}
            toLink="https://www.youtube.com/watch?v=fS05V0QqQfQ"
            isInternalLink={false}>
            WATCH AFTERMOVIE <i className="far fa-play-circle" />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
