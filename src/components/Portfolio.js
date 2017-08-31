import React, { Component } from 'react';

export default class Portfolio extends Component {
  render() {
    return (
      <div className="row">
        <div className="col s12">
          <h1 className="center-align">Portfolio</h1>
          <div className="row">
            <div className="col s6">
            <a href="https://pollsta.herokuapp.com/polls">
              <img
                alt="Pollsta"
                src="https://gist.githubusercontent.com/tshin7/89d6aa5b55016ba8a8a9b6e77e498485/raw/7355dabc9199ba1dc3a0646f7362cee5fdab7fed/pollsta.png"
                style={{ width: '100%', height: 'auto' }}
              />
            </a>
            </div>
            <div className="col s6">
            <a href="https://poppin-bars.herokuapp.com/search">
              <img
                alt="Pollsta"
                src="https://gist.githubusercontent.com/tshin7/89d6aa5b55016ba8a8a9b6e77e498485/raw/7355dabc9199ba1dc3a0646f7362cee5fdab7fed/poppin-bars.png"
                style={{ width: '100%', height: 'auto' }}
              />
            </a>
            </div>
          </div>
          <div className="row">
            <div className="col s6">
            <a href="https://tshin7.github.io/meteorite-landings-with-d3/">
              <img
                alt="Pollsta"
                src="https://gist.githubusercontent.com/tshin7/89d6aa5b55016ba8a8a9b6e77e498485/raw/7355dabc9199ba1dc3a0646f7362cee5fdab7fed/meteorite.png"
                style={{ width: '100%', height: 'auto' }}
              />
            </a>
            </div>
            <div className="col s6">
            <a href="https://tshin7.github.io/roguelike-cave-crawler/">
              <img
                alt="Pollsta"
                src="https://gist.githubusercontent.com/tshin7/89d6aa5b55016ba8a8a9b6e77e498485/raw/7355dabc9199ba1dc3a0646f7362cee5fdab7fed/roguelike.png"
                style={{ width: '100%', height: 'auto' }}
              />
            </a>
            </div>
          </div>
          <div className="row">
            <div className="col s6">
            <a href="https://monitor-stocks.herokuapp.com/">
              <img
                alt="Pollsta"
                src="https://gist.githubusercontent.com/tshin7/89d6aa5b55016ba8a8a9b6e77e498485/raw/7355dabc9199ba1dc3a0646f7362cee5fdab7fed/stocks.png"
                style={{ width: '100%', height: 'auto' }}
              />
            </a>
            </div>
            <div className="col s6">
            <a href="https://tshin7.github.io/simon-game-clone/">
              <img
                alt="Pollsta"
                src="https://gist.githubusercontent.com/tshin7/89d6aa5b55016ba8a8a9b6e77e498485/raw/7355dabc9199ba1dc3a0646f7362cee5fdab7fed/simon.png"
                style={{ width: '100%', height: 'auto' }}
              />
            </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
