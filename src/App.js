import React, {Component, useEffect, useState} from 'react';

import Navbar from './components/navbar';
import Card from './components/card';


import card1 from './img/card1.png';
import card2 from './img/card2.png';
import card3 from './img/card3.png';
import card4 from './img/card4.png';
import card5 from './img/card5.png';
import card6 from './img/card6.png';


class App extends Component {

  state = {cards: [ 
    { "id": "1001", "title": "Introduzione a Flutter", "description": "Scopriamo i vantaggi dell'utilizzo di Flutter per sviluppare fantastiche app ibride", "image": card1, "tags": ["development", "r&d"], "date": "2021-11-20T00:00:00.000Z" }, 
    { "id": "1002", "title": "Design sprint", "description": "Come e perché dei processi di design sprint possono aiutare a definire e risolvere problemi in un progetto", "image": card2, "tags": ["design", "r&d", "presentation"], "date": "2021-10-20T00:00:00.000Z" }, 
    { "id": "1003", "title": "Programmi(amo) meglio con SIO", "description": "Migliorare l’esperienza dello sviluppatore per migliorare l’esperienza dell’utente finale", "image": card3, "tags": ["development", "r&d", "presentation"], "date": "2021-08-20T00:00:00.000Z" }, 
    { "id": "1004", "title": "Millemila parole sul Design System", "description": "Il Design System è un insieme di regole e linee guida che aiutano a mantenere coerenza e continuità all'interno di un ecosistema digitale", "image": card4, "tags": ["design"], "date": "2021-07-20T00:00:00.000Z" },
    { "id": "1005", "title": "Bot telegram", "description": "Cosa sono i bot telegram, come realizzarli e quali sono i vantaggi che il loro utilizzo può portare in alcuni ambienti.", "image": card5, "tags": ["r&d", "presentation"], "date": "2021-06-20T00:00:00.000Z" },
    { "id": "1006", "title": "Novità su Redis e Redux", "description": "Come rendere le nostre applicazioni piu' real-time usando Redis e non solo", "image": card6, "tags": ["development", "r&d"], "date": "2021-05-20T023:00:00.000Z" }, 
    { "id": "1007", "title": "BLoC su Flutter", "description": "Breve introduzione al pattern BLoC nello sviluppo in Flutter, vantaggi e svantaggi rispetto alle sue alternative", "image": card1, "tags": ["development", "r&d"], "date": "2021-04-20T00:00:00.000Z" },
    { "id": "1008", "title": "Newsletter", "description": "Come crearne una su misura e perché", "image": card2, "tags": ["news"], "date": "2021-03-20T00:00:00.000Z" }, 
    { "id": "1009", "title": "Design Thinking", "description": "Come strutturiamo il processo di design dei nostri progetti: dai flussi e wireframe ai prototipi high fidelity", "image": card3, "tags": ["design"], "date": "2021-02-20T00:00:00.000Z" } 
  ]}



  render(){
  
    return (
      <>
        <Navbar />
        <div className='container'> 
          <br/>
          <h2><b>Next on Mabitalks</b></h2>  
          <br/>
          <button type="button" className="btn btn-light" style={{borderRadius: '20px', backgroundColor: '#FCE9E2', color: '#E85322', borderColor: '#FCE9E2', marginRight: '5px'}}>Design</button>
          <button type="button" className="btn btn-light" style={{borderRadius: '20px', backgroundColor: '#FCE9E2', color: '#E85322', borderColor: '#FCE9E2', marginRight: '5px'}}>Development</button>
          <button type="button" className="btn btn-light" style={{borderRadius: '20px', backgroundColor: '#FCE9E2', color: '#E85322', borderColor: '#FCE9E2', marginRight: '5px'}}>News</button>
          <button type="button" className="btn btn-light" style={{borderRadius: '20px', backgroundColor: '#FCE9E2', color: '#E85322', borderColor: '#FCE9E2', marginRight: '5px'}}>R&D</button>
          <button type="button" className="btn btn-light" style={{borderRadius: '20px', backgroundColor: '#FCE9E2', color: '#E85322', borderColor: '#FCE9E2', marginRight: '5px'}}>Presentation</button>
          <br />
          <br />

          <div className='row'>
            {this.state.cards.map(card => (
              <Card
                key={card.id}
                card={card}
                tags={card.tags}
              />
            ))}
         
          </div>
        </div>
      </>
    );
  }
}

export default App;