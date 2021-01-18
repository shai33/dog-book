import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

import './BreedsView.css';

class BreedsComp extends React.Component{
    constructor(props){
      super(props);
      this.state = {
          result: ''
      };
    }
    render(){
        const dogCardInfo = [];
        const breedCardInfo = [];
        console.log('foooo', this.props.dogs);
        console.log('foooo1', this.props.breed.length);
        for(let i=0; i<this.props.dogs.length; i++) {
            const cardContent = <Col xs={6} lg={3}>
            <Card style={{ width: '18rem' }}>
               <Card.Body>
                  <Card.Title>{this.props.dogs[i]}</Card.Title>
                  <Card.Img variant="top" src={this.props.breed[i]}/>
               </Card.Body>
               </Card>
               </Col>
             dogCardInfo.push(cardContent);
         }

        return ( 
        <div>
            <div className="gallery">
            <Row>
                {dogCardInfo}
                {/* {this.state.sort === 'age' ? filteredActor : actorCardInfo} */}
            </Row>
          </div>
        </div>
        )
    }
}

export default BreedsComp;