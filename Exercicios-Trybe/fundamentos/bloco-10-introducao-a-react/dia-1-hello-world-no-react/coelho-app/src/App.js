import React from 'react';
import './App.css';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';

const Task = (value) => {
  return (
    <li key={value}>{value}</li>
  );
}

const tarefas = ['Acordar', 'Tomar café', 'Escovar os dentes', 'Ir trabalhar'];

class App extends React.Component {
  render () {
  return (
    <div>
    <Content container={Content}/>
    <Footer rodapé={Footer}/>
    </div>
  );
  }
}


export default App;
