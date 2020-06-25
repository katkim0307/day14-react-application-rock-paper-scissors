import React, {Component} from 'react';
import PlayerCard from './PlayerCard.js';

class Game extends Component {
  constructor() {
    super();
    this.signs = ['rock', 'paper', 'scissors'];
    this.state = {
      playerOne: 'rock',
      playerTwo: 'rock',
    };
  };

  randomHand = () => {
    this.setState({
      playerOne: this.signs[Math.floor(Math.random()*3)],
      playerTwo: this.signs[Math.floor(Math.random()*3)],
    });
  };

  whoWins = () => {
    let handOne = this.state.playerOne;
    let handTwo = this.state.playerTwo;

    if(handOne===handTwo) {
      return 'Tie. Try again!';
    }
    else if((handOne === 'rock' && handTwo === 'scissors') ||
      (handOne === 'paper' && handTwo === 'rock') ||
      (handOne === 'scissors' && handTwo === 'paper')){
      return 'Player 1 Wins!';
    }
    else{
      return 'Player 2 Wins!';
    }
  };

  render() {
    return (
      <div className="style">
        <div className="player-card">
          <PlayerCard sign={this.state.playerOne}/>
          <PlayerCard sign={this.state.playerTwo}/>
        </div>
        <div className="winner">{this.whoWins()}</div>
        <button type="button" onClick={() => this.randomHand()}>PLAY</button>
      </div>
    );
  };
};

export default Game;