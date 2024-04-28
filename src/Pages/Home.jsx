import React from 'react';
import './Home.css';
import CultureScene from '../Scenes/CultureScene';
import LeadershipScene from '../Scenes/Leadership';
import MacGroup from '../assets/macgroup.jpg';
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
          MID-ATLANTIC UNION OF VIETNAMESE STUDENT ASSOCIATION
        </a>
      </header>
      <CultureScene />
      <LeadershipScene />
    </div>
  );
};

export default Home;
