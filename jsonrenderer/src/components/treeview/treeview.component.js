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
                height: '20em'
              }}
            >
                <Tree data={myTreeData} />
            </div>
        </div>
    );
};

export default TreeView;
