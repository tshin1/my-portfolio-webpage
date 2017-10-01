import React, { Component } from 'react';
import style from '../style.js';

export default class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profileImageOnTop: false,
      smallerProfileImage: false,
    };
  }

  componentDidMount() {
    // Add listener to change main profile image size and location on page load
    this.updateProfileImage();
    // Add listener to change main profile image size and location when screen size changes
    window.addEventListener("resize", this.updateProfileImage);
  }

  // Change main profile image size and location depending on screen width
  updateProfileImage = () => {
    console.log(document.body.scrollWidth);
    // Screen width
    let width = document.body.scrollWidth;

    if (this.state.profileImageOnTop && width >= 1250) {
      this.setState({
        profileImageOnTop: false,
      });
    } else if (width < 1250) {
      this.setState({
        profileImageOnTop: true,
      });
    }

    if (this.state.smallerProfileImage && width >= 450) {
      this.setState({
        smallerProfileImage: false,
      });
    } else if (width < 450) {
      this.setState({
        smallerProfileImage: true,
      });
    }
  }

  render() {
    return (
      <div className="row section scrollspy" style={style.aboutBackground} id="about">
        {
          this.state.profileImageOnTop
          ?
            <div style={style.noMarginPadding}>
              <div className="col s12 center-align" style={{}}>
              {
                this.state.smallerProfileImage
                  ?
                    <img
                      src="https://gist.githubusercontent.com/tshin7/89d6aa5b55016ba8a8a9b6e77e498485/raw/01e42c782c0cdc515c78a4b506892482a66d9839/profile_png.png"
                      alt="Ted's Profile"
                      title="Ted Shin"
                      width="150"
                      height="150"
                      style={style.circleImg}
                    />
                  :
                    <img
                      src="https://gist.githubusercontent.com/tshin7/89d6aa5b55016ba8a8a9b6e77e498485/raw/01e42c782c0cdc515c78a4b506892482a66d9839/profile_png.png"
                      alt="Ted's Profile"
                      title="Ted Shin"
                      width="250"
                      height="250"
                      style={style.circleImg}
                    />
              }
              </div>
              <div className="col s12" style={{paddingLeft: '0px', paddingRight: '0'}}>
                <p style={{fontSize: '18px'}}>Full stack developer and CS student. Experience with React, React Native, ES6, Express, MongoDB, Sass, Webpack, Git, Django, Javascript, Python</p>
              </div>
            </div>
          :
            <div style={style.noMarginPadding}>
              <div className="col s12 l8" style={{paddingLeft: '0px', paddingRight: '0'}}>
                <p style={{fontSize: '18px'}}>Full stack developer and CS student. Experience with React, React Native, ES6, Express, MongoDB, Sass, Webpack, Git, Django, Javascript, Python</p>
              </div>
              <div className="col s12 l4 center-align" style={{}}>
                <img
                  src="https://gist.githubusercontent.com/tshin7/89d6aa5b55016ba8a8a9b6e77e498485/raw/01e42c782c0cdc515c78a4b506892482a66d9839/profile_png.png"
                  alt="Ted's Profile"
                  title="Ted Shin"
                  width="250"
                  height="250"
                  style={this.state.smallerProfileImage ? (style.circleImgSmall) : (style.circleImg)}
                />
              </div>
            </div>
        }
      </div>
    );
  }
}
