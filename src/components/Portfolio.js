import React, { Component } from 'react';
import style from '../style.js';

export default class Portfolio extends Component {
  render() {
    return (
      <div className="row" style={style.noMarginPadding}>
        <div className="col s12" style={style.noMarginPadding}>
          <h1 className="center-align">Portfolio</h1>
          <div className="row" style={style.noMarginPadding}>
            <div className="col s6" style={style.noMarginPadding}>
              <a href="https://pollsta.herokuapp.com/polls">
                <img
                  alt="Pollsta"
                  src="https://gist.githubusercontent.com/tshin7/89d6aa5b55016ba8a8a9b6e77e498485/raw/7355dabc9199ba1dc3a0646f7362cee5fdab7fed/pollsta.png"
                  style={style.projectImageLeft}
                />
              </a>
            </div>
            <div className="col s6" style={style.noMarginPadding}>
              <a href="https://poppin-bars.herokuapp.com/search">
                <img
                  alt=" Poppin Bars"
                  src="https://gist.githubusercontent.com/tshin7/89d6aa5b55016ba8a8a9b6e77e498485/raw/7355dabc9199ba1dc3a0646f7362cee5fdab7fed/poppin-bars.png"
                  style={style.projectImageRight}
                />
              </a>
            </div>
          </div>
          <div className="row" style={style.noMarginPadding}>
            <div className="col s6" style={style.noMarginPadding}>
              <a href="https://tshin7.github.io/meteorite-landings-with-d3/">
                <img
                  alt="Meteorite Landings With D3"
                  src="https://gist.githubusercontent.com/tshin7/89d6aa5b55016ba8a8a9b6e77e498485/raw/7355dabc9199ba1dc3a0646f7362cee5fdab7fed/meteorite.png"
                  style={style.projectImageLeft}
                />
              </a>
            </div>
            <div className="col s6" style={style.noMarginPadding}>
              <a href="https://tshin7.github.io/roguelike-cave-crawler/">
                <img
                  alt="Roguelike Cave Crawler"
                  src="https://gist.githubusercontent.com/tshin7/89d6aa5b55016ba8a8a9b6e77e498485/raw/7355dabc9199ba1dc3a0646f7362cee5fdab7fed/roguelike.png"
                  style={style.projectImageRight}
                />
              </a>
            </div>
          </div>
          <div className="row" style={style.noMarginPadding}>
            <div className="col s6" style={style.noMarginPadding}>
              <a href="https://monitor-stocks.herokuapp.com/">
                  <img
                    alt="Stocks Monitor"
                    src="https://gist.githubusercontent.com/tshin7/89d6aa5b55016ba8a8a9b6e77e498485/raw/7355dabc9199ba1dc3a0646f7362cee5fdab7fed/stocks.png"
                    style={style.projectImageLeft}
                  />
                </a>
            </div>
            <div className="col s6" style={style.noMarginPadding}>
              <a href="https://tshin7.github.io/simon-game-clone/">
                <img
                  alt="Simon Game Clone"
                  src="https://gist.githubusercontent.com/tshin7/89d6aa5b55016ba8a8a9b6e77e498485/raw/7355dabc9199ba1dc3a0646f7362cee5fdab7fed/simon.png"
                  style={style.projectImageRight}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
