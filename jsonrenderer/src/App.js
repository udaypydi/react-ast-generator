import React, { useState, useEffect } from 'react';
import ReactJson from 'react-json-view';
import AceEditor from "react-ace";
import classnames from 'classnames';
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-monokai";
import Tab from './components/tab/tab.component';
import TreeView from './components/treeview/treeview.component';
import { parseAST } from './util';
import './App.css';


const placeholderCode = `
import React from 'react';

class AstGenerator extends React.Component {
  render() {
    return (
      <p>Welcome!!</p>
    )
  }
}
`;

// babel parser...
const babelParser = require('@babel/parser');


function App() {


  const [value, setValue] = useState(placeholderCode);
  const [parsedAst, setParsedAst] = useState({});
  const [treeData, setTreeData] = useState({});
  const [error, setError] = useState('');
  const [activeElement, setActiveElement] = useState('JSON');
  let timer = null;

  useEffect(() => {
    handleCodeChange(placeholderCode);
  }, []);

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

      console.log(JSON.stringify(astTree));
      setTreeData(parseAST(astTree));
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
            onChange={(value) => {
              if (timer) {
                clearTimeout(timer);
              }
              timer = setTimeout(() => {
                handleCodeChange(value);
              }, 1000);
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
            <div 
              className={classnames(
                "App-JSON-Tab-Element",
                {
                  "App-JSON-Tab-Element__active": activeElement === 'JSON',
                },
              )   
              }
              onClick={() => setActiveElement('JSON')}
            >JSON</div>
            <div 
              className={classnames(
                "App-JSON-Tab-Element",
                {
                  "App-JSON-Tab-Element__active": activeElement === 'TREE',
                },
              )   
              }
              onClick={() => setActiveElement('TREE')}
            >TREE</div>
          </Tab>
          <div className="App-JSON-View">
            {
              activeElement === 'JSON' && (
                <ReactJson src={parsedAst} />
              )
            } 
            {
              activeElement === 'TREE' && (
                <TreeView ast={treeData}/>
              )
            }
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default App;
