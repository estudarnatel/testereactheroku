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

class App4 extends Component {

  constructor(props) {
    super(props);
    this.state = {
      list: list,
    };
    this.onDismiss = this.onDismiss.bind(this);
  }

  // onDismiss(id) {
  //   const updatedList = this.state.list.filter(function isNotId(item) {
  //     return item.objectID !== id;
  //   });
  // }

  // onDismiss(id) {
  //   function isNotId(item) {
  //     return item.objectID !== id;
  //   }
  //   const updatedList = this.state.list.filter(isNotId);
  // }

  onDismiss(id) {
    const isNotId = item => item.objectID !== id;
    const updatedList = this.state.list.filter(isNotId);
    this.setState({ list: updatedList });
  }


  // USANDO ESSA FUNCTION MUDA O CONTEXTO DO STATE THIS. ANTES ESTAVA FORA E ESTATICO. AGORA ESTA DENTRO DA CLASSE E É DINAMICO
  
//   render() {
//     return (
//       <div className="App4">
//         <h1>App4-------------------------------------------------------------------</h1>
//         {/* Anteriormente, você usou map com uma lista estática
//         de itens (definida fora do componente) em seu método
//         render(). Agora, você irá usar a lista obtida do seu estado
//         local. */}
//         {this.state.list.map(function (item) {
//           return (
//             <div key={item.objectID}>
//               <span>
//                 <a href={item.url}>{item.title}</a>
//               </span>
//               <br></br>
//               <span>{item.author}</span>
//               <br></br>
//               <span>{item.num_comments}</span>
//               <br></br>
//               <span>{item.points}</span>
//               <br></br>
//               <span>
//                 <button onClick={() => this.onDismiss(item.objectID)} type="button"> Dismiss </button>
//               </span>              
//               <br></br>
//               <br></br>
//             </div>
//           );
//         })}
//       </div>
//     );
//   }
// }

  render() {
    return (
      <div className="App4">
        <h1>App4-------------------------------------------------------------------</h1>
        {/* Anteriormente, você usou map com uma lista estática
      de itens (definida fora do componente) em seu método
      render(). Agora, você irá usar a lista obtida do seu estado
      local. */}
        {this.state.list.map(item =>
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
              <button onClick={() => this.onDismiss(item.objectID)} type="button"> Dismiss </button>
            </span>
            <br></br>
            <br></br>
          </div>
        )}
      </div>
    );
  }
}

// A lista agora é parte do componente, residindo em seu estado interno. Você pode adicionar, alterar
// ou remover itens. Todas as vezes que o estado do seu componente mudar, o método render() será
// chamado novamente. Você simplesmente altera o estado interno, sabendo que o componente será
// de novo renderizado exibindo os dados corretos.
// Mas, tenha cuidado. Não altere o estado diretamente, use um método chamado setState() para
// mudá-lo.


// COM ARROW FUNCTIONS

// class App4 extends Component {
//   render() {
//     return (
//       <div className="App4">
//         <h1>App4-------------------------------------------------------------------</h1>
//         {list.map( item =>          
//           <div key={item.objectID}>
//             <span>
//               <a href={item.url}>{item.title}</a>
//             </span>
//             <br></br>
//             <span>{item.author}</span>
//             <br></br>
//             <span>{item.num_comments}</span>
//             <br></br>
//             <span>{item.points}</span>
//             <br></br>
//             <br></br>
//             <br></br>
//           </div>          
//         )}
//       </div>
//     );
//   }
// }


export default App4;