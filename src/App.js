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

    let newArr = arr.map(val => {
      return heros[val]
    });
      
    this.props.shuffleMovies(newArr);

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

    if(arr.length < 1){
      return(
        <h6 className="center white-text">No Movies in this list</h6>
      )
    }

    return arr.map(hero => {
      return(       
          <div className="col s4" key={hero.title}>
            <img src={hero.img} height={300} onClick={() => {
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

      if(arr.length < 1){
        return(
          <h6 className="center white-text">No Movies in this list</h6>
        )
      }

      return arr.map(hero => {
        return(       
            <div className="col s4" key={hero.title}>
              <img src={hero.img} height={300} onClick={() => {
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
          <div className="shuffle col s12 m12 l6 container">
          <div className="row">
            <h3 className="center white-text">Shuffled Movies</h3>
            <br/>
            <br/>
            {this.renderShuffled()}
            </div>
          </div>
          <div className="ordered col s12 m12 l6 container">
            <div className="row">
            <h3 className="center white-text">Selected Movies</h3>
            <br/>
            <br/>
            {this.renderSelectedMovies()}
            </div>
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
