import './CultureScene.css';
import LineGradient from '../Common/LineGradient';
import GraduationCap from '../assets/icons/graduation-cap.svg';
import Learning from '../assets/icons/learning.png';
import Favorite from '../assets/icons/favorite.png';
import Microphone from '../assets/icons/microphone.png';

import { motion } from 'framer-motion';
import React from 'react';

const CultureScene = () => {
  return (
    <div className="wrapper">
      <div className="cultural-title-container">
        <a className="cultural-title-text">CULTURAL AWARENESS</a>
      </div>
      <LineGradient width="100%" height="3px" />
      <div className="cultural-container">
        <div className="cultural">
          <motion.div
            className="cultural-pic"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.9 }}
            variants={{
              hidden: { opacity: 0, x: -200 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <img src={require('../assets/JENN.jpg')} />
          </motion.div>
          <div className="cultural-info-container">
            <div className="cultural-info-section">
              <div className="icon-container">
                <img src={Learning} alt="Graduation Cap" />
              </div>
              <div className="cultural-text">
                Teaching the next generations Vietnamese culture
              </div>
            </div>
            <div className="cultural-info-section">
              <div className="icon-container">
                <img src={Favorite} alt="Graduation Cap" />
              </div>
              <div className="cultural-text">
                Giving students a platform to express their heritage
              </div>
            </div>
            <div className="cultural-info-section">
              <div className="icon-container">
                <img src={Microphone} alt="Graduation Cap" />
              </div>
              <div className="cultural-text">
                Giving students a platform, to show their culture
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CultureScene;
