
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './component/Home';
import About from './component/About';
import Contact from './component/Contact';
import Error from './component/Error';
import Navbar from './component/Navbar';
import Services from './component/Services';
import Technology from './component/Technology';

function App() {
  return <BrowserRouter>
  <Routes>
    <Route path="/" element={ <Navbar /> }> 
    <Route index  element={ <Home /> } />
    <Route  path="/about" element={ <About />} />
    <Route  path="/contact" element={<Contact />} />
    <Route  path="/services" element={<Services /> }/>
    <Route path="/technology" element={<Technology />} />
    <Route path="*" element={<Error />} />
    <Route path="/twcnology" element />
    
    </Route>
  </Routes>
  </BrowserRouter>
     
  ;
}

export default App;



//  import React, { Component } from 'react'
 
//  export class App extends Component {
//   constructor(props){
// super(props)
// this.state={number :0}
//     console.log("constructor called")
//   }
//   componentDidMount(){
//     console.log(" componentDidMount called")
//   }
// componentDidUpdate(){
//   console.log("componentDidUpdate called")
// }


//    render() {
//     console.log("render called")
//      return (
//        <div>
// <button onClick={() => {this.setState({number :1})}}>add</button>
 
 
//        </div>
       
//      )
//    }
//  }
 
//  export default App

