import React from 'react';
//import * as React from 'react';
import logo from './logo.svg';
import './App.css';


class App extends React.Component {
  
  constructor(props: {}){
    super(props, {});
  }
  state ={
    message: 'Change the message in text box..',
    count: 0,
    error: null
  }
  componentDidUpdate(){
    console.log('update', this.state.count, this.state.error);
    if(this.state.error) alert ('errrrrrrrrrrr');
  }

  render() {
    console.log('render');
    //this.setState({error: this.state.count % 3 === 0});
    return (
      <div>
        <div  className="row">
          <div className="col-4 offset-sm-4 text-center">
            <img src={logo} className="App-logo" alt="logo" />
          </div>
          <div className="offset-3 col-6">
            <h5>Hello Alok!</h5>
            <p>{this.state.message}</p>
            <input name="message" className="form-control" type="text" value = {this.state.message} onChange={(e) => this.updateMessage(e)}/>
          </div>
          <div className="offset-3 col-6 m-10 text-center">
            <button className="btn btn-secondary" onClick={() => this.setState({count : this.state.count - 1, error: this.state.count % 3 === 0})}>-</button>
            <label style={{margin: '0 25px'}}>{this.state.count}</label>
            <button className="btn btn-info" onClick={() => this.setState({count : this.state.count + 1, error: this.state.count % 3 === 0})}>+</button>
          </div>
        </div>
      </div>
    )
  }

  updateMessage = (ele:any) => {
    this.setState({
      [ele.target.name] : ele.target.value
    })
    console.log(ele.target)
  }
}

// const App: React.FC = () => {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Hurray! Typescript worked....
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
