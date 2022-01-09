// Packages
import React, { Component } from 'react';
import { Line } from 'rc-progress';
// Assets
import check from '../assets/check.svg';

class Option extends Component {

  render() {

    const { chosen, optionText, optionPerc, optionVotes, totalVotes } = this.props;

    if (chosen) {
      return (
        <div className='option-close option-chosen'>
          <div className='text-chosen'><strong>{optionText}?</strong></div>
          <Line percent={optionPerc} strokeColor='#00897B' className='percentage'/>
          <span>{optionPerc}%</span>
          <div>{optionVotes} out of {totalVotes} votes</div>
          <img alt='badge' src={check} className='badge'/>
        </div>
      );
    } else {
      return (
        <div className='option-close'>
          <div><strong>{optionText}?</strong></div>
          <Line percent={optionPerc} strokeColor='#00897B' className='percentage'/>
          <span>{optionPerc}%</span>
          <div>{optionVotes} out of {totalVotes} votes</div>
        </div>
      );
    }
  }
}

export default Option;
