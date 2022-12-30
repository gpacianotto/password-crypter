import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'reactstrap';
// import { IpcRenderer, ipcRenderer } from '@electron/remote/main';

// const fs = document.require('fs');
// const pathModule = document.require('path');

// const {app} = document.require('@electron/remote');
// const { dialog } = document.require('electron');

const ipcRenderer = window.require('electron').ipcRenderer;

function App() {


  
  return (
    <div className="App">
      <Button
      id='choose-file-button'
      onClick={() => {
        ipcRenderer.send('chooseFile', true);
      }}
      >
        Escolha seu arquivo de texto
      </Button>
    </div>
  );
}

export default App;
