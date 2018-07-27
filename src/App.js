import React, { Component } from 'react';
import './App.css';
import ravioli from './Images/ravioli.jpg';
import smoothie from './Images/smoothie.jpg';
import salad from './Images/salad.jpg';
import FoodItem from './Components/FoodItem';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Cook</h1>
          <h1 className="App-subtitle">Your favorite dishes before you even try them.</h1>
        </header>
        <p className="App-intro">
          What do you want to make today?
        </p>
        <div className="recipes">
          <FoodItem title="Ravioli" image={ravioli} />
          <FoodItem title="Smoothie" image={smoothie} />
          <FoodItem title="Salad" image={salad} />
          <FoodItem title="Ravioli" image={ravioli} />
          <FoodItem title="Ravioli" image={ravioli} />
        </div>
      </div>
    );
  }
}

export default App;

