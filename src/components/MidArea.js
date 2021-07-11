import React, {useEffect} from "react";
import {useSelector, useDispatch} from 'react-redux';

export default function MidArea({ref1}) {

  const dispatch = useDispatch();
  const DragReducer = useSelector(state => state.DragReducer)

  const handleClick = (index) => {
    // console.log(index);
    dispatch({type: "REMOVE_OBJ", payload: index})
    dispatch({type: "REMOVE_FUNC", payload: index})
} 
  // console.log(DragReducer);
  return <div className="flex-1 h-full overflow-auto" ref={ref1}>
      Drag to add block and click on Remove below blocks to remove it.
      {DragReducer.map((item, index) => (<div key={index} >{item}<button onClick={() => handleClick(index)}>Remove</button></div>))}
    
    </div>;
}
