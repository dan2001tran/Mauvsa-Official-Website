import './SocialJustice.css';
import LineGradient from '../Common/LineGradient';
import { motion } from 'framer-motion';
import SocialJusticePic from '../assets/icons/boss.png';
import React from 'react';

const SocialJustice = () => {
  return (
    <div className="SocialJustice-Container">
      <div className="SocialJustice-Title-Container">
        <a className="SocialJustice-Title">Social Justice</a>
      </div>
      <div className="SocialJustice-Gradient-Container">
        <LineGradient width="50%" height="2px" />
        </div>
      <div className="SocialJustice-Panel-Container">
        <div className="SocialJustice-Panel-Statistics">
          <div className="SocialJustice-Statistic-Box"></div>
          <div className="SocialJustice-Statistic-Box"></div>
          <div className="SocialJustice-Statistic-Box"></div>
        </div>
        
        <div className="SocialJustice-Info-Panel"></div>
        <div className="SocialJustice-Image-Panel"></div>
      </div>
    </div>
  );
};

export default SocialJustice;
