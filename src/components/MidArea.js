import React, {useState} from "react";
import {useSelector, useDispatch} from 'react-redux';

export default function MidArea({ref1}) {

  const dispatch = useDispatch();
  const DragReducer = useSelector(state => state.DragReducer)
  const Sprite = useSelector(state => state.SpriteReducer)
  const Index = useSelector(state => state.IndexReducer)

  const handleClick = (index) => {
    // console.log(index);
    // dispatch({type: "REMOVE_OBJ", payload: index})
    // dispatch({type: "REMOVE_FUNC", payload: index})
    dispatch({type: "REMOVE_SPRITE_ACTION", payload: {index : Index, rindex: index}})
} 
  const handleIndexChange = (e) => {
    dispatch({type: "SELECT_INDEX", payload: +e.target.value})
  }

  const handleClearAll = () => {
    dispatch({type: "CLEAR_SPRITE_ACTION", payload: Index})
  }
  // console.log(DragReducer);
  return <div className="flex-1 h-full overflow-auto" ref={ref1}>
      Drag to add block and click on Remove below blocks to remove it.
      <div className="flex align-center justify-between p-5">
        <select className="border border-black" onChange={handleIndexChange}>
          {
            Sprite.map((item, index) => (
              <option key={index} value={index}>{`${index+1}. ${item.name}`}</option>
            ))
          }
        </select>
        <p>Adding Code to {Sprite[Index].name}</p>
        <button className="border border-black rounded-sm" onClick={handleClearAll}>Clear All Actions</button>
      </div>
      {/* {DragReducer.map((item, index) => (<div key={index} >{item}<button onClick={() => handleClick(index)}>Remove</button></div>))} */}
      {
        Sprite[Index].code.map((item,index) => (<div key={index}>{item.item}<button onClick={() => handleClick(index)}>Remove</button></div>))
      }
    
    </div>;
}
