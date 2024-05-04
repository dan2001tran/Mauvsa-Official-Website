import React from 'react';
import './Home.css';
import CultureScene from '../Scenes/CultureScene';
import LeadershipScene from '../Scenes/Leadership';
import MacGroup from '../assets/macgroup.jpg';
import SocialJustice from '../Scenes/SocialJustice';
const Home = () => {
  return (
    <div className="parralax-wrapper">
      <header>
        <img
          src={MacGroup}
          alt="An Image of all Attendees to MAC XII"
          className="landing-image"
        />
        <a className="landing-image-title">
          MID-ATLANTIC UNION OF VIETNAMESE STUDENT ASSOCIATIONS
        </a>
      </header>
      <div className="wrapper-scene">
        <CultureScene />
        <LeadershipScene />
        <SocialJustice />
      </div>
    </div>
  );
};

export default Home;
