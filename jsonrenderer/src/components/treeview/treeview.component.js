import React from 'react';
import Tree from 'react-d3-tree';
 import { myTreeData }  from './treeview.constant';


const TreeView = (props) => {
  const { ast } = props;

    return (
        <div>
            <div 
              id="treeWrapper" 
              style={{
                width: '50em', 
                height: '100em',
                textAlign: 'center'
              }}
            >
                <Tree 
                  data={myTreeData} 
                  collapsible
                  initialDepth={2}
                  orientation={'vertical'}
                />
            </div>
        </div>
    );
};

export default TreeView;
