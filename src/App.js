import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import heros from './heros';
import * as actions from './actions';
import { connect } from 'react-redux';

class App extends Component {

  componentDidMount(){
    
    let arr = this.shuffle(Object.keys(heros));

    console.log(arr);
      
    this.props.shuffleMovies(arr);
  }

  shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

  renderShuffled(){

    let arr = this.props.ShuffledMovies;
    return arr.map(hero => {
      return(       
          <div className="col s4" key={hero}>
            <img src={heros[hero]['img']} height={300} onClick={() => {
              this.props.selectedMovies(hero);
              this.props.removeShuffledMovie(hero);
            }}/>
          </div>        
      )
    })
  }

  renderSelectedMovies(){
    if(this.props.SelectedMovies){
      
      let arr = this.props.SelectedMovies;

      return arr.map(hero => {
        return(       
            <div className="col s4" key={hero}>
              <img src={heros[hero]['img']} height={300} onClick={() => {
                this.props.removeSelectedMovie(hero);
                this.props.addMovie(hero);
              }}/>
            </div>        
        )
      })
    }
  }

  render() {
    if(this.props.ShuffledMovies){
      return (
        <div className="App">
        <div className="row">
          <div className="shuffle col s6">
          <div className="row">
            {this.renderShuffled()}
            </div>
          </div>
          <div className="ordered col s6"> 
            {this.renderSelectedMovies()}
          </div>
        </div>
      </div>
      );
    }else{
      return(
        <div>Loading...</div>
      )
    }
  }
}

function mapStateToProps({ ShuffledMovies, SelectedMovies }){
  return{
    ShuffledMovies, SelectedMovies
  }
}

export default connect(mapStateToProps,actions)(App);
