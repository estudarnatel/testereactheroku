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
];

class App3 extends Component {
  render() {
    return (
      <div className="App3">
        <h1>App3-------------------------------------------------------------------</h1>
        {list.map(function (item) {
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
              <br></br>
              <br></br>
            </div>
          );
        })}
      </div>
    );
  }
}

// COM ARROW FUNCTIONS

// class App3 extends Component {
//   render() {
//     return (
//       <div className="App3">
//         <h1>App3-------------------------------------------------------------------</h1>
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


export default App3;