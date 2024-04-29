import "./Leadership.css";
import LineGradient from "../Common/LineGradient";
import { motion } from "framer-motion";
import React from "react";


const LeadershipScene = () => {
    return (
      <div className="values-wrapper">
        <div className="leadershipt-title-container">
          <a className="leadership-title">LEADERSHIP</a>
        </div>
        <div className="leadershipt-title-container">
          <LineGradient width="50%" height="3px" />
        </div>
        <div className="leadership-contents">
        <div className="leadership-panel-container">
          
          <div className="leadership-panel">
            <motion.div
              className="leadership-image-container"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: -200 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <img src={require('../assets/tyler.jpg')} />
            </motion.div>
            <div className="leadership-words">
              <a className="leadership-image-title"> Tyler Sammay</a>
              <a className="leadership-image-title-caption">
                Executive Director of MAC XI
              </a>
              
            </div>
          </div>
          <div className="leadership-panel">
            <motion.div
              className="leadership-image-container"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: -200 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <img src={require('../assets/annie.jpg')} />
            </motion.div>
            <div className="leadership-words">
              <a className="leadership-image-title"> Annie Tran</a>
              <a className="leadership-image-title-caption">
                Registration Director of MAC XI
              </a>
              
            </div>
          </div>
          <div className="leadership-panel">
            <motion.div
              className="leadership-image-container"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: 1 }}
              variants={{
                hidden: { opacity: 0, x: -200 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <img src={require('../assets/christine.jpg')} />
            </motion.div>
            <div className="leadership-words">
              <a className="leadership-image-title"> Christine Chang</a>
              <a className="leadership-image-title-caption">
                Executive Director of MAC X
              </a>
             
            </div>
          </div>
        </div>
        </div>
      </div>
    );

};

export default LeadershipScene;