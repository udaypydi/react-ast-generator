import React, { useState, useEffect, useRef } from 'react';
import Tree from 'react-d3-tree';

// Render ast data in the form of tree 

const TreeView = (props) => {
  const { ast } = props;
  const treeRef = useRef(null);
  const [translate, setTranslate] = useState({});
  useEffect(() => {
    const dimensions = treeRef.current.getBoundingClientRect();
    setTranslate({
        x: dimensions.width / 2,
        y: dimensions.height / 4,
    });
  }, []);

    return (
        <div>
            <div 
              id="treeWrapper" 
              style={{
                width: '100%',
                height: '100vh'
              }}
              ref={treeRef}
            >
                <Tree 
                  data={ast} 
                  translate={translate} 
                  orientation={'vertical'}
                />
            </div>
        </div>
    );
};

export default TreeView;
