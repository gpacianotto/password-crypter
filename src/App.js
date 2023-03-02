import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'reactstrap';
import Controller from './components/Controller';
// import { IpcRenderer, ipcRenderer } from '@electron/remote/main';

// const fs = document.require('fs');
// const pathModule = document.require('path');

// const {app} = document.require('@electron/remote');
// const { dialog } = document.require('electron');

const ipcRenderer = window.require('electron').ipcRenderer;

function App() {



  
  
  return (
    <div>
      <Controller/>
    </div>
  );
}

export default App;
