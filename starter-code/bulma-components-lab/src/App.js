import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import FormField from './components/ FormField';
import CoolButton from './components/CoolButton';
import Message from './components/Message';

class App extends Component {
  render(){

  
  return(
    <div>
      <Navbar/>
      <Message isInfo title="Hello World">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>.
</Message>
      <FormField 
      theLabel="Name" 
      type="text" 
      placeholder="e.g Alex Smith" 
      />
      <FormField 
      theLabel="Email" 
      type="email" 
      placeholder="e.g. alexsmith@gmail.com" 
      />
      <CoolButton isSmall isRounded isDanger name="Button 1"/>
      <CoolButton isSmall isSuccess name="Button 2"/>
    </div>
    
  )
  }
}

export default App;
