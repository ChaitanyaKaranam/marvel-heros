import React, { Component } from 'react';
import './App.css';
import * as actions from './actions';
import { connect } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class App extends Component {

  componentDidMount(){     
    this.props.shuffleMovies();
  }

  componentDidUpdate(prevProps, prevState){
    console.log(this.props.Lifes);
    if(this.props.Lifes !== prevProps.Lifes && (this.props.Lifes !== 0)){
      toast(this.getInfinityStones(this.props.Lifes));
    }
  }

  getInfinityStones(lifes){
    let stones = {
      0: "space",
      1: "mind",
      2: "reality",
      3: "power",
      4: "time",
      5: "soul"
    }
  
    return (
      <div className="infinity">
        {
          Array.from({length: lifes}, (v,i) => <span title={stones[i]} key={stones[i]} className={`stones ${stones[i]}`}><i className="fas fa-gem"></i></span> )
        }
      </div>
    )
  
  }

  renderShuffled(){

    let arr = this.props.ShuffledMovies;

    if(arr.length < 1){
      return(
        <h6 className="center white-text">No Movies in this list</h6>
      )
    }

    return arr.map(movie => {
      return(       
          <div className="col l4 m4 s12" key={movie.title}>
            <img src={movie.img} alt={movie.title} height={300} onClick={() => {
              this.props.selectedMovies(movie);
              this.props.removeShuffledMovie(movie);
              this.props.checkLifes({ index: this.props.SelectedMovies.length, movie});
            }}/>
          </div>        
      )
    })
  }

  renderSelectedMovies(){

    if(this.props.Lifes === 0){
      this.props.shuffleMovies();
      this.props.resetSelection();
    }

    if(this.props.SelectedMovies){
      
      let arr = this.props.SelectedMovies;

      if(arr.length < 1){
        return(
          <h6 className="center white-text">No Movies in this list</h6>
        )
      }

      return arr.map(movie => {
        return(       
            <div className="col l4 m4 s12" key={movie.title}>
              <img alt={movie.title} src={movie.img} height={300} onClick={() => {
                this.props.removeSelectedMovie(movie);
                this.props.addMovie(movie);
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
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnVisibilityChange
          draggable
          pauseOnHover
        />
      </div>
      );
    }else{
      return(
        <div>Loading...</div>
      )
    }
  }
}

function mapStateToProps({ ShuffledMovies, SelectedMovies, Lifes }){
  return{
    ShuffledMovies, SelectedMovies, Lifes
  }
}

export default connect(mapStateToProps,actions)(App);
