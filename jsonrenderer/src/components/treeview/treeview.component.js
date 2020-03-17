import React, { useState, useEffect, useRef } from 'react';
import Tree from 'react-d3-tree';
 import { myTreeData }  from './treeview.constant';


const TreeView = (props) => {
  const { ast } = props;
  const treeRef = useRef(null);
  const [translate, setTranslate] = useState({});
  useEffect(() => {
    const dimensions = treeRef.current.getBoundingClientRect();

    setTranslate({
      translate: {
        x: dimensions.width / 2,
        y: dimensions.height / 2
      }
    });
  }, []);

    return (
        <div>
            <div 
              id="treeWrapper" 
              style={{
                width: '50em', 
                height: '100em',
                padding: 20
              }}
              ref={treeRef}
            >
                <Tree 
                  data={myTreeData} 
                  translate={translate} 
                  orientation={'vertical'}
                />
            </div>
        </div>
    );
};

export default TreeView;
