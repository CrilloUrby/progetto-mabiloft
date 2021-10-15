import React, {Component} from 'react';
import { BsHeart } from 'react-icons/bs' ;   

class Card extends Component {
    render(){
        return (
            <div className='col-12 col-lg-4 col-md-6'>
                <div className="card" style={{borderRadius: '20px'}}>
                    <img src={this.props.card.image} className="card-img-top" style={{borderRadius: '10px'}} />
                    <div className="card-body">
                        <div className='row'>
                            <div className='col-10'>
                                <h5 className="card-title">{this.props.card.title}</h5> 
                            </div>
                            <div className='col-2'>
                                <button style={{backgroundColor: 'white', borderColor: 'white'}}>< BsHeart /></button>
                            </div>
                            <p className="card-text">{this.props.card.description}</p>
                        </div>
                    </div>
                </div>
                <br/>

            </div>
        );
    }
}

export default Card;