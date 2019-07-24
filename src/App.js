import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';


function LookAtMe(){
  return <div style={{width: '200px', height: '200px', background: 'yellow'}}>Look at me!</div>
}

function Page1(){
  return (
  <div>
    Hello from page 1
    <Route path='/page1/hey' component={LookAtMe}/>

  </div>
  )
}

function Page2(props){
  console.log(props)
  return <div>Hello from page 2</div>
}

function Page3(){
  return <div>Hello from page 3</div>
}

function MyRouter() {
  return (
    <Router>
      <div style={{width: '100pw', height: '100px', background: 'blue'}}>
        <Link 
        to='/page1/hey'>
          <button style={{background: 'grey', borderRadius: '33px', width: '100px', height: '20px', margin: '5px', color: 'white', outline: 'none'}}>Page 1
          </button>
          </Link>
        <Link 
        to='/page2/2345678' >
          <button style={{background: 'grey', borderRadius: '33px', width: '100px', height: '20px', margin: '5px', color: 'white', outline: 'none'}}>Page 2
          </button>
          </Link>
        <Link 
        to='/page3'>
          <button style={{background: 'grey', borderRadius: '33px', width: '100px', height: '20px', margin: '5px', color: 'white', outline: 'none'}}>Page 3
          </button>
          </Link>
      </div>
    <Switch>
      <Route path='/page1' component={Page1}/>
      <Route path='/page2/:id' component={Page2}/>
      <Route path='/page3' component={Page3}/>
    </Switch>
    </Router>
  )
}

function App() {
  return (
    <div className="App">
      <MyRouter />
    </div>
  );
}

export default App;
