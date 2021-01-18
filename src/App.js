import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Container from 'react-bootstrap/Container';

import './App.css';
import BreedsComp from './components/BreedsView';
import DogModel from './data-models/DogModel';
import BreedModel from './data-models/BreedModel';


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      dogsData: [],
      breedsData: []
    }
  }
  render(){
    return (
      <Container>
        <h1>Dogs Gallery</h1>
        <p></p>
        <BreedsComp dogs={this.state.dogsData} breed={this.state.breedsData}/>
        {/* <ActorsComp actors={this.state.actorsData}/> */}
      </Container>
    );
    
  }
  componentDidMount(){
    let newBreed = []
    axios.get('https://dog.ceo/api/breeds/list/all').then( (result) => {

      // const newDogs = result.data.map(dog => DogModel(dog.breed))
      const newDogs = Object.keys(result.data.message)
      console.log('newDogs', newDogs.length)
      console.log('Ajax finished loading'); 
      this.setState({dogsData: newDogs});

      for(let i=0; i<newDogs.length; i++){
        axios.get(`https://dog.ceo/api/breed/${newDogs[i]}/images/random/1`).then( (result) => {

      // const newBreed = new BreedModel(result.data.message)
        newBreed.push(result.data.message)
        console.log('newBreed', newBreed)
        console.log(' Dog Ajax finished loading'); 
        this.setState({breedsData: newBreed});
        });
      }
    });
    
    
  }
}

export default App;
