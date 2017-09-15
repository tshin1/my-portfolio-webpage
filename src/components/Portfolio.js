import React, { Component } from 'react';
import style from '../style.js';

export default class Portfolio extends Component {
  render() {
    return (
      <div className="row" style={style.noMarginPadding}>
        <div className="col s12" style={style.noMarginPadding}>
          <h1 className="center-align" style={style.sectionHeaderText}>Portfolio</h1>
          <div className="row" style={style.noMarginPadding}>
            <div className="col s6" style={style.noMarginPadding}>
              <a href="https://pollsta.herokuapp.com/polls">
                <img
                  src="https://gist.githubusercontent.com/tshin7/89d6aa5b55016ba8a8a9b6e77e498485/raw/7355dabc9199ba1dc3a0646f7362cee5fdab7fed/pollsta.png"
                  alt="Pollsta"
                  title="Pollsta"
                  style={style.projectImageLeft}
                />
              </a>
            </div>
            <div className="col s6" style={style.noMarginPadding}>
              <a href="https://poppin-bars.herokuapp.com/search">
                <img
                  src="https://gist.githubusercontent.com/tshin7/89d6aa5b55016ba8a8a9b6e77e498485/raw/7355dabc9199ba1dc3a0646f7362cee5fdab7fed/poppin-bars.png"
                  alt="Poppin Bars"
                  title="Poppin Bars"
                  style={style.projectImageRight}
                />
              </a>
            </div>
          </div>
          <div className="row" style={style.noMarginPadding}>
            <div className="col s6" style={style.noMarginPadding}>
              <a href="https://tshin7.github.io/meteorite-landings-with-d3/">
                <img
                  src="https://gist.githubusercontent.com/tshin7/89d6aa5b55016ba8a8a9b6e77e498485/raw/7355dabc9199ba1dc3a0646f7362cee5fdab7fed/meteorite.png"
                  alt="Meteorite Landings With D3"
                  title="Meteorite Landings With D3"
                  style={style.projectImageLeft}
                />
              </a>
            </div>
            <div className="col s6" style={style.noMarginPadding}>
              <a href="https://tshin7.github.io/roguelike-cave-crawler/">
                <img
                  src="https://gist.githubusercontent.com/tshin7/89d6aa5b55016ba8a8a9b6e77e498485/raw/7355dabc9199ba1dc3a0646f7362cee5fdab7fed/roguelike.png"
                  alt="Roguelike Cave Crawler"
                  title="Roguelike Cave Crawler"
                  style={style.projectImageRight}
                />
              </a>
            </div>
          </div>
          <div className="row" style={style.noMarginPadding}>
            <div className="col s6" style={style.noMarginPadding}>
              <a href="https://monitor-stocks.herokuapp.com/">
                  <img
                    src="https://gist.githubusercontent.com/tshin7/89d6aa5b55016ba8a8a9b6e77e498485/raw/7355dabc9199ba1dc3a0646f7362cee5fdab7fed/stocks.png"
                    alt="Stocks Monitor"
                    title="Stocks Monitor"
                    style={style.projectImageLeft}
                  />
                </a>
            </div>
            <div className="col s6" style={style.noMarginPadding}>
              <a href="https://tshin7.github.io/simon-game-clone/">
                <img
                  src="https://gist.githubusercontent.com/tshin7/89d6aa5b55016ba8a8a9b6e77e498485/raw/7355dabc9199ba1dc3a0646f7362cee5fdab7fed/simon.png"
                  alt="Simon Game Clone"
                  title="Simon Game Clone"
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
