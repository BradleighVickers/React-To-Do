
import React, {useState} from "react";

const InputBox = ({setTasks, tasks}) => {
    const[ newTask, setNewTask] = useState("");
    const[error, setError] = useState("");
    const handleEnterKey =(e)=>{
        e.preventDefault();
        if(e.key === "Enter"){
            handleNewInput();
        }
    }
    const handleNewInput = () =>{
        if (newTask.length <1){
            return setError('You need to enter task in the task box!');
        }
        else{
            setError("");
        }
        setTasks([...tasks, newTask]);
        setNewTask("");
    };
    return(
    <div className="flex flex-col justify-center">
        {error && (
            <div className="bg-red-600 flex justify-center items-center py-5">
                <h1 className="text-white text-semibold  text-xl uppercase">{error}</h1>
            </div>
        )}
        
       <div className=" self-center mt-20 py-5  w-1/4 h-20 bg-gray-400 rounded-t-md flex justify-between px-5 space-x-2">
           <input type="text" 
           className="w-full rounded-md px-4" 
           placeholder="Add your next task..." 
           value={newTask} onChange={e => setNewTask(e.target.value)} 
           onKeyUp={(e) =>handleEnterKey(e)}/>
           <button className="w-32 rounded-md bg-green-700 text-white text-semibold cursor-pointer hover:bg-green-300 font-medium hover:text-black" onClick={handleNewInput}>Add Task</button>
       </div>
    </div>
    )
}

export default InputBox;