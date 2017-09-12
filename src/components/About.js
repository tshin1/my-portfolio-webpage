import React, { Component } from 'react';
import style from '../style.js';

export default class About extends Component {
  render() {
    return (
      <div className="row" style={style.aboutBackground}>
        <div className="col s8" style={{paddingLeft: '70px', paddingRight: '0'}}>
          <p style={{fontSize: '18px'}}>Full stack developer and CS student. Experience with React, React Native, ES6, Express, MongoDB, Sass, Webpack, Git, Django, Javascript, Python</p>
        </div>
        <div className="col s4">
          <img
            src="https://gist.githubusercontent.com/tshin7/89d6aa5b55016ba8a8a9b6e77e498485/raw/01e42c782c0cdc515c78a4b506892482a66d9839/profile_png.png"
            alt="Ted's Profile"
            height="250"
            width="250"
            style={style.circleImg}
          />
        </div>
      </div>
    );
  }
}
