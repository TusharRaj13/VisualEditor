import React, { useState } from "react";
import Icon from "./Icon";
import CatSprite from "./CatSprite";
import {useSelector} from 'react-redux';
import { m1, m2, m3, l1, l2, c1 } from './FunctionCollection';

export default function PreviewArea() {

  const CodeReducer = useSelector(state => state.CodeReducer);
  const [Text, setText] = useState('')

  const flagClick = () => {
    if (CodeReducer.length === 0)
      return;
    if(CodeReducer[0] === 'e1'){
      runSeq();
    }
  }

  const spriteClick = () => {
    if (CodeReducer.length === 0)
      return;
    if(CodeReducer[0] === 'e2'){
      runSeq();
    }
  }

  function runSeq(){
    setText('');
    CodeReducer.map((item, index) => {
      if(index>0){
        const ff = fSwitch(item);
        console.log(item);
        setText(prev => prev.concat(`Executing ${item},`)); 
        
        setTimeout(() => {
          ff();
        }, 100);
      }
    })
  }

  function fSwitch(fid){
    switch(fid){
      case "m1":
        return m1;
      case "m2":
        return m2;
      case "m3":
        return m3;
      case "l1":
        return l1;
      case "l2":
        return l2;
      case "c1":
        return c1;
    }

  }

  return (
    <div className="flex-none h-full overflow-y-auto p-2">
      <div className="flex h-10 m-5">
        <button className="border border-black rounded-sm" onClick={flagClick}><Icon name="flag" size={15} className="text-green-600 mx-2" /></button>
      </div>
      <div className="h-96 w-96 bg-gray-50 relative">
        <CatSprite onClick={spriteClick} className="absolute"/>
      </div>
      <div> { Text }</div>
    </div>
  );
}
