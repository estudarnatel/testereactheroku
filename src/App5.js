import React, { Component } from 'react';
import './App.css';

const list = [
  {
    title: 'React',
    url: 'https://facebook.github.io/react/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: 'Redux',
    url: 'https://github.com/reactjs/redux',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
  {
    title: 'TRES',
    url: 'https://github.com/reactjs/redux',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 2,
  },
  {
    title: 'QUATRO',
    url: 'https://github.com/reactjs/redux',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 3,
  },
];

class App5 extends Component {

  constructor(props) {
    super(props);
    this.state = {
      list: list,
    };
    this.onDismiss = this.onDismiss.bind(this);
  }  

  onDismiss(id) {
    const isNotId = item => item.objectID !== id;
    const updatedList = this.state.list.filter(isNotId);
    this.setState({ list: updatedList });
  } 

  render() {
    return (
      <div className="App5">
        <h1>App5-------------------------------------------------------------------</h1>        
        {this.state.list.map(item => {
          const onHandleDismiss = () =>
            this.onDismiss(item.objectID);
            return (
              <div key={item.objectID}>
                <span>
                  <a href={item.url}>{item.title}</a>
                </span>
                <br></br>
                <span>{item.author}</span>
                <br></br>
                <span>{item.num_comments}</span>
                <br></br>
                <span>{item.points}</span>
                <br></br>
                <span>
                  {/* <button onClick={onHandleDismiss} type="button"> Dismiss </button> */}
                  {/* <button onClick={console.log(item.objectID)} type="button"> Dismiss </button> */}
                  {/* <button onClick={function () { console.log(item.objectID)}} type="button"> Dismiss </button> */}
                  {/* <button onClick={() => console.log(item.objectID)} type="button"> Dismiss </button> */}
                  <button onClick={() => this.onDismiss(item.objectID)} type="button"> Dismiss </button>
                  {/* REVER PÁGINA 47 CAPITULO Tratamento de Eventos PARA ENTENDER MELHOR */}
                </span>
                <br></br>
                <br></br>
              </div>
            );
          }
        )}
      </div>
    );
  }
}

export default App5;