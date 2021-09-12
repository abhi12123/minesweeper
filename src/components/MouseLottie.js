import React from 'react'
import Lottie from 'react-lottie';
import animationData from '../img/mouse.json'
 
export default class MouseLottie extends React.Component {
 
  constructor(props) {
    super(props);
    this.state = {isStopped: false, isPaused: false};
  }
 
  render() {
 
    const defaultOptions = {
      loop: true,
      autoplay: true, 
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    };
 
    return <div className="lottie-container">
      <Lottie options={defaultOptions}/>
    </div>
  }
}