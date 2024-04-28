import React from "react";
import CultureScene from "../Scenes/CultureScene";
import LeadershipScene from "../Scenes/Leadership";
import LandingPage from "../Scenes/LandingPage";
const Home = () => {
  return (
    <div>
      <LandingPage />
      <CultureScene />
      <LeadershipScene />
    </div>
  );
};

export default Home;
