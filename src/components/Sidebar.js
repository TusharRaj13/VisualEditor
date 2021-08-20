import React from "react";
import Icon from "./Icon";
import CodeBlocks from "./CodeBlocks";
import { useDispatch, useSelector } from "react-redux";

export default function Sidebar() {

  const dispatch = useDispatch();
  const Index = useSelector(state => state.IndexReducer);

  function copyObject(item, fid){
    // dispatch({type: "ADD_OBJ", payload: item});
    // dispatch({type: "ADD_FUNC", payload: fid});
    dispatch({type: "ADD_SPRITE_ACTION", payload: {index : Index, code: {item, fid}}})
  }

  return (
    <div className="w-60 flex-none h-full overflow-y-auto flex flex-col items-start p-2 border-r border-gray-200">
      <div className="font-bold"> {"Events"} </div>
      <CodeBlocks objType="block" onDropObj={copyObject} fid="e1">
        <div className="flex flex-row flex-wrap bg-yellow-500 text-white px-5 py-5 my-2 text-sm cursor-pointer"  >
          {"When "}
          <Icon name="flag" size={15} className="text-green-600 mx-2" />
          {"clicked"}
        </div>
      </CodeBlocks>
      <CodeBlocks objType="block" onDropObj={copyObject} fid="e2">
        <div className="flex flex-row flex-wrap bg-yellow-500 text-white px-2 py-1 my-2 text-sm cursor-pointer" >
          {"When this sprite clicked"}
        </div>
      </CodeBlocks>
      <div className="font-bold"> {"Motion"} </div>
      <CodeBlocks objType="block" onDropObj={copyObject} fid="m1">
        <div className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer" >
          {"Move 10 steps"}
        </div>
      </CodeBlocks>
      <CodeBlocks objType="block" onDropObj={copyObject} fid="m2">
        <div className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer" >
          {"Turn "}
          <Icon name="undo" size={15} className="text-white mx-2" />
          {"15 degrees"}
        </div>
      </CodeBlocks>
      <CodeBlocks objType="block" onDropObj={copyObject} fid="m3">
        <div className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer" >
          {"Turn "}
          <Icon name="redo" size={15} className="text-white mx-2" />
          {"15 degrees"}
        </div>
      </CodeBlocks>
      <div className="font-bold"> {"Motion"} </div>
      <CodeBlocks objType="block" onDropObj={copyObject} fid="l1">
        <div className="flex flex-row flex-wrap bg-purple-500 text-white px-2 py-1 my-2 text-sm cursor-pointer" >
          {"Say Hi..."}
        </div>
      </CodeBlocks>
      <CodeBlocks objType="block" onDropObj={copyObject} fid="l2">
        <div className="flex flex-row flex-wrap bg-purple-500 text-white px-2 py-1 my-2 text-sm cursor-pointer" >
          {"Think Hmmm..."}
        </div>
      </CodeBlocks>
      <div className="font-bold"> {"Control"} </div>
      <CodeBlocks objType="block" onDropObj={copyObject} fid="c1">
        <div className="flex flex-row flex-wrap bg-yellow-500 text-white px-2 py-1 my-2 text-sm cursor-pointer" >
          {"Wait 1 second"}
        </div>
      </CodeBlocks>
    </div>
  );
}
