import React from "react";

const TaskBox = ({task, setEditItem, setItem}) =>{
    return(
        <div className="flex justify-center">
        <div className=" py-4 w-1/4 h-20 bg-gray-400  flex  justify-between items-center px-5 space-x-2 border-b border-opacity-10 border-black">
            <h2 className="text-white font-semibold text-md">{task}</h2>  
            <div className="flex space-x-2">
            <button className="bg-yellow-500 px-2 py-2 h-full rounded-md hover:bg-yellow-300" onClick={()=> setEditItem(task)}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
</svg>
            </button>   
            <button className="bg-red-500 px-2 py-2 h-full rounded-md hover:bg-red-300" onClick={()=> setItem(task)}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6  hover:text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
            </button>  
            </div> 
        </div>
     </div>
    )
}

export default TaskBox;