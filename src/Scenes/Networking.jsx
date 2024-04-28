import './Networking.css';
import LineGradient from '../Common/LineGradient';
import { motion } from 'framer-motion';
import NetworkingPic from '../assets/icons/boss.png';
import React from 'react';

const Networking = () => {
  return (
    <div className="Networking-Container">
      <div className="Neworking-Title-Container">
        <a className="Networking-TItle"></a>
        <LineGradient width="20%" height="2px" />
      </div>
      <div className="Networking-Panel-Container">
        <div className="Networking-Image-Panel"></div>
        <div className="Networking-Info-Panel"></div>
        <div className="Networking-Image-Panel"></div>
      </div>
    </div>
  );
};

export default Networking;
