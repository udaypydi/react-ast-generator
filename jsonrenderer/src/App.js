import React from 'react';
import ReactJson from 'react-json-view';
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-github";
import './App.css';


let data = require('./ast.json');

function App() {


  return (
    <div className="App">
      <h1>React Component AST</h1>
      <div style={{ display: 'flex' }}>
        <AceEditor
          placeholder="Placeholder Text"
          mode="javascript"
          theme="monokai"
          name="blah2"
          onChange={(value) => console.log(value)}
          fontSize={14}
          showPrintMargin={true}
          showGutter={true}
          highlightActiveLine={true}
          value={`function onLoad(editor) {
          console.log("i've loaded");
        }`}
          setOptions={{
            enableBasicAutocompletion: false,
            enableLiveAutocompletion: false,
            enableSnippets: false,
            showLineNumbers: true,
            tabSize: 2,
          }}
        />
        <ReactJson src={data} />
      </div>
    </div>
  );
}

export default App;
