import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

// const fs = document.require('fs');
// const pathModule = document.require('path');

// const {app} = document.require('@electron/remote');
// const { dialog } = document.require('electron');



function App() {

  // const [path, setPath] = useState(app.getPath());
  // const files = fs.readdirSync(path).map(file=>{
  //   const stats = fs.statSync(pathModule.join(path, file));
  //   return {
  //     name: file,
  //     size: stats.isFile() ? formatSize(stats.size ?? 0) : null,
  //     directory: stats.isDirectory()
  //   }
  // })

  
  return (
    <div className="App">
      <button
      id='choose-file-button'
      onClick={async () => {
        // dialog.showOpenDialog({ properties: ['openFile', 'multiSelections'] }).then((result) => {
        //   console.log(result);
        // })
        
      }}
      >
        choose file
      </button>
    </div>
  );
}

export default App;
