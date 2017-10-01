import React, { Component } from 'react';
import style from '../style.js';

export default class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      largeScreen: true,
    };
  }

  componentDidMount() {
    // Add listener to change main profile image size and location on page load
    this.checkScreenWidth();
    // Add listener to change main profile image size and location when screen size changes
    window.addEventListener("resize", this.checkScreenWidth);
  }

  // Check screen width and see if it is large screen or medium/small
  checkScreenWidth = () => {
    console.log(document.body.scrollWidth);
    // Screen width
    let width = document.body.scrollWidth;

    if (!this.state.largeScreen && width >= 978) {
      this.setState({
        largeScreen: true,
      });
    } else if (width < 978) {
      this.setState({
        largeScreen: false,
      });
    }
  }

  render() {
    return (
      <div className="row section scrollspy" id="portfolio" style={style.noMarginPadding}>
        <div className="col s12" style={style.noMarginPadding}>
          <h1 className="center-align" style={style.sectionHeaderText}>Portfolio</h1>
          <div className="row" style={style.noMarginPadding}>
            <div className="col s12 l6" style={style.noMarginPadding}>
              <a href="https://pollsta.herokuapp.com/polls">
                <img
                  src="https://gist.githubusercontent.com/tshin7/89d6aa5b55016ba8a8a9b6e77e498485/raw/7355dabc9199ba1dc3a0646f7362cee5fdab7fed/pollsta.png"
                  alt="Pollsta"
                  title="Pollsta"
                  style={this.state.largeScreen ? (style.projectImageLeft) : (style.projectImageSmallerScreen)}
                />
              </a>
            </div>
            <div className="col s12 l6" style={style.noMarginPadding}>
              <a href="https://poppin-bars.herokuapp.com/search">
                <img
                  src="https://gist.githubusercontent.com/tshin7/89d6aa5b55016ba8a8a9b6e77e498485/raw/7355dabc9199ba1dc3a0646f7362cee5fdab7fed/poppin-bars.png"
                  alt="Poppin Bars"
                  title="Poppin Bars"
                  style={this.state.largeScreen ? (style.projectImageRight) : (style.projectImageSmallerScreen)}
                />
              </a>
            </div>
          </div>
          <div className="row" style={style.noMarginPadding}>
            <div className="col s12 l6" style={style.noMarginPadding}>
              <a href="https://tshin7.github.io/meteorite-landings-with-d3/">
                <img
                  src="https://gist.githubusercontent.com/tshin7/89d6aa5b55016ba8a8a9b6e77e498485/raw/7355dabc9199ba1dc3a0646f7362cee5fdab7fed/meteorite.png"
                  alt="Meteorite Landings With D3"
                  title="Meteorite Landings With D3"
                  style={this.state.largeScreen ? (style.projectImageLeft) : (style.projectImageSmallerScreen)}
                />
              </a>
            </div>
            <div className="col s12 l6" style={style.noMarginPadding}>
              <a href="https://tshin7.github.io/roguelike-cave-crawler/">
                <img
                  src="https://gist.githubusercontent.com/tshin7/89d6aa5b55016ba8a8a9b6e77e498485/raw/7355dabc9199ba1dc3a0646f7362cee5fdab7fed/roguelike.png"
                  alt="Roguelike Cave Crawler"
                  title="Roguelike Cave Crawler"
                  style={this.state.largeScreen ? (style.projectImageRight) : (style.projectImageSmallerScreen)}
                />
              </a>
            </div>
          </div>
          <div className="row" style={style.noMarginPadding}>
            <div className="col s12 l6" style={style.noMarginPadding}>
              <a href="https://monitor-stocks.herokuapp.com/">
                  <img
                    src="https://gist.githubusercontent.com/tshin7/89d6aa5b55016ba8a8a9b6e77e498485/raw/7355dabc9199ba1dc3a0646f7362cee5fdab7fed/stocks.png"
                    alt="Stocks Monitor"
                    title="Stocks Monitor"
                    style={this.state.largeScreen ? (style.projectImageLeft) : (style.projectImageSmallerScreen)}
                  />
                </a>
            </div>
            <div className="col s12 l6" style={style.noMarginPadding}>
              <a href="https://tshin7.github.io/simon-game-clone/">
                <img
                  src="https://gist.githubusercontent.com/tshin7/89d6aa5b55016ba8a8a9b6e77e498485/raw/7355dabc9199ba1dc3a0646f7362cee5fdab7fed/simon.png"
                  alt="Simon Game Clone"
                  title="Simon Game Clone"
                  style={this.state.largeScreen ? (style.projectImageRight) : (style.projectImageSmallerScreen)}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
