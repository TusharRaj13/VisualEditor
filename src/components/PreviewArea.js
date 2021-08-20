import React, { useEffect } from "react";
import Icon from "./Icon";
import {useSelector,useDispatch} from 'react-redux';
import { m1, m2, m3, l1, l2, c1 } from './FunctionCollection';
import CrabSprite from '../components/CrabSprite';

export default function PreviewArea() {

  // const CodeReducer = useSelector(state => state.CodeReducer);
  const Sprite = useSelector(state => state.SpriteReducer);
  // const [Text, setText] = useState([])
  const dispatch = useDispatch();

  // resetDialogue();
  useEffect(() => {
    resetDialogue();
  }, [])

  function resetDialogue() {
    Sprite.forEach(item => {
      document.getElementById(item.id).nextElementSibling.innerHTML = '';
    })
  }

  const handleAddSprite = () => {
    dispatch({type: 'ADD_SPRITE', payload: {
        name: 'Crab',
        sprite : CrabSprite,
        code : [],
        id: 'crab1'
    }})
  }  

  const flagClick = () => {
    // if (CodeReducer.length === 0)
    //   return;
    // if(CodeReducer[0] === 'e1'){
    //   runSeq();
    // }
    resetDialogue();
    Sprite.forEach((sprite) => {
      if(sprite.code.length !== 0 && sprite.code[0].fid === 'e1'){
        runSeq(sprite.code, sprite.id);
      }
    })
  }

  const spriteClick = (i) => {
    // if (CodeReducer.length === 0)
    //   return;
    // if(CodeReducer[0] === 'e2'){
    //   runSeq();
    // }
    resetDialogue();
    Sprite.forEach((sprite, index) => {
      if(sprite.code.length !== 0 && sprite.code[0].fid === 'e2' && index === i){
        runSeq(sprite.code, sprite.id);
      }
    })
  }

  function runSeq(code, id){
    // setText([]);
    // CodeReducer.forEach((item, index) => {
    //   if(index>0){
    //     const ff = fSwitch(item);
    //     // console.log(item);
    //     // setText(prev => prev.concat(`Executing ${item},`)); 
        
    //     setTimeout(() => {
    //       ff();
    //     }, 100);
    //   }
    // })
    code.forEach((item, index) => {
      if(index > 0){
        if(item.fid === 'c1'){
          setTimeout(() => {

          }, 1000)
        }else{
          const ff = fSwitch(item.fid);
          ff(id);
        }
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
    <>
      <div className="flex-none h-full overflow-y-auto p-2">
        <div className="flex h-10 m-5">
          <button className="border border-black rounded-sm" onClick={flagClick}><Icon name="flag" size={15} className="text-green-600 mx-2" /></button>
          <button className="border border-black rounded-sm px-5" disabled={Sprite.length > 1} onClick={handleAddSprite}>Add Sprite</button>
        </div>
        {/* <div className="flex h-20 m-5">
          {
            Sprite.map((item, index) => {
              var D = item.sprite;
              return <D key={index}/>
            })
          }
          <button className="border border-black rounded-sm p-5">Add</button>
        </div> */}
        <div className="border border-black h-96 w-96 bg-gray-50">
          {
            Sprite.map((item, index) => {
              var D = item.sprite;
              // console.log(item);
              return (
                <div key={index} className="absolute" onClick={() => spriteClick(index)} >
                <D className="relative" />
                </div>
              )
            })
          }
          
          {/* <CatSprite onClick={spriteClick} className="relative"/> */}
        </div>
        {/* <div className="relative">
          <ul>
            {
              Text.map((item, index) => (
                <li key={index}>{item}</li>
              ))
            }
          </ul>
        </div> */}
      </div>
      {/* <div className="flex h-10 m-5">
        {
          Sprite.map((item, index) => (
            <div key={index}>
              {item.component}
            </div>
          ))
        }
      </div> */}
    </>
  );
}
