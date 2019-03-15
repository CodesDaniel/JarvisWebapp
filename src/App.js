import React, { Component } from 'react';
import './App.css';
import Chatbot from 'react-simple-chatbot';

const steps = [
  {
    id: '0',
    message: 'Hi my name is  Jarvis',
    trigger: '1',
  },
  {
    id: '1',
    message: 'What is  your name',
    trigger: '2',
  },
  {
    id: '2',
    user:true,
    trigger:'3'
  },
  {
    id: '3',
    message: ' hi {previousValue}, nice to meet you',
    trigger :'4'
  },
  {
    id:"4",
    message:"How ,can i help you",
    trigger:'5'
  },
  {
    id:'5',
    options:[
      {value:1, label:'help',trigger:'0'},
    ]
  }

];
class App extends Component {
  render() {
    return (
      <div className="App">
        <Chatbot 
         speechSynthesis={{ enable: true, lang: 'en' }}
            recognitionEnable={true}
            headerTitle="Jarvis"   steps={steps}/>
      </div>
    );
  }
}

export default App;
