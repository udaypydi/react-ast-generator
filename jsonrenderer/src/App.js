import React, { useState } from 'react';
import ReactJson from 'react-json-view';
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-github";
import './App.css';

// babel parser...
const babelParser = require('@babel/parser');


function App() {

  const [value, setValue] = useState('');
  const [parsedAst, setParsedAst] = useState({});
  const [error, setError] = useState('');
  
  return (
    <div className="App">
      <h1>React Component AST</h1>
      <div className="App-container">
        <div className="App-Editor-Container">
          <AceEditor
            placeholder="Type Your React Component"
            mode="javascript"
            theme="monokai"
            name="blah2" 
            onLoad={(editor) => {
              editor.getSession().setUseWorker(true)
            }}
            onChange={(value) => {
              setValue(value);
              try {
                const astTree = babelParser.parse(value, {
                  sourceType: "module",
                  plugins: [
                    "jsx",
                    "flow"
                  ]
                });
                setParsedAst(astTree);
              } catch (err) {
                setError(err.message);
              }
            }}
            fontSize={14}
            style={{
              height: '100%',
              width: '100%'
            }}
            showPrintMargin={true}
            showGutter={true}
            highlightActiveLine={true}
            value={value}
            setOptions={{
              enableBasicAutocompletion: true,
              enableLiveAutocompletion: true,
              enableSnippets: true,
              showLineNumbers: true,
              tabSize: 2,
            }}
          />
          <div className="App-Editor-Error">
            {
              error.length > 0 && (
                <p>{error}</p>
              )
            }
          </div>
        </div>
        <div className="App-JSON-container">
          <ReactJson src={parsedAst} />
        </div>
      </div>
    </div>
  );
}

export default App;
