import React, { useState } from 'react';
import ReactJson from 'react-json-view';
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-github";
import Tab from './components/tab/tab.component';
import './App.css';

// babel parser...
const babelParser = require('@babel/parser');


function App() {

  const [value, setValue] = useState('');
  const [parsedAst, setParsedAst] = useState({});
  const [error, setError] = useState('');
  
  const handleCodeChange = (value) => {
    setValue(value);
    try {
      const astTree = babelParser.parse(value, {
        sourceType: "module",
        plugins: [
          "jsx",
          "flow"
        ]
      });
      setError('');
      if (value.length) {
        setParsedAst(astTree);
      } else {
        setParsedAst({});
      }
    } catch (err) {
      setError(err.message);
    }
  };


  const getEditorOptions = () => ({
    enableBasicAutocompletion: true,
    enableLiveAutocompletion: true,
    enableSnippets: true,
    showLineNumbers: true,
    tabSize: 2,
  });

  return (
    <div className="App">
      <h1 style={{ padding: 0, margin: 0 }}>React Component AST</h1>
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
            onChange={handleCodeChange}
            fontSize={14}
            style={{
              height: '100%',
              width: '100%'
            }}
            showPrintMargin={true}
            showGutter={true}
            highlightActiveLine={true}
            value={value}
            setOptions={getEditorOptions()}
          />
            {
              error.length > 0 && (
                <div className="App-Editor-Error">
                  <p>{error}</p>
                </div>
              )
            }
        </div>
        <div className="App-JSON-container">
          <Tab>
            <div>JSON</div>
            <div>TREE</div>
          </Tab>
          <ReactJson src={parsedAst} />
        </div>
      </div>
    </div>
  );
}

export default App;
