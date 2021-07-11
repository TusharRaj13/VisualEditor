import React from 'react'

import { useDrag } from  'react-dnd';

function CodeBlocks({ objType, onDropObj, children, fid }) {
    const [{ isDragging }, dragRef] = useDrag({
      type: objType,
      item: () => ({ ...children}),
      end: (item, monitor) => {
        const dropResult = monitor.getDropResult();
  
        if (item && dropResult) {
          onDropObj(item, fid);
        }
      },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
    });
    return (
        <div ref={dragRef}>
            {children}
        </div>
    )
}

export default CodeBlocks
