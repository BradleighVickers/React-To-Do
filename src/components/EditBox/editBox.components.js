
import React, {useState, useEffect} from "react";

const EditBox = ({setTasks, tasks, item , setError ,setEditItem }) => {
    const[ newTask, setNewTask] = useState("");

    useEffect(()=>{
        setNewTask(item);
        if(!item){
            setEditItem("");
        }
    },[item]);

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
        const newArr = tasks.filter((t) => t !== item)
        setTasks([...newArr, newTask]);
        setNewTask("");
        setEditItem("")
    };
    return(
    <div className="flex flex-col justify-center">       
       <div className=" self-center  py-5  w-1/4 h-20 bg-gray-400 rounded-b-md flex justify-between px-5 space-x-2">
           <input type="text" 
           className="w-full rounded-md px-4" 
           placeholder="Add your next task..." 
           value={newTask} onChange={e => setNewTask(e.target.value)} 
           onKeyUp={(e) =>handleEnterKey(e)}/>
           <button className="w-32 rounded-md bg-green-700 text-white text-semibold cursor-pointer hover:bg-green-300 font-medium hover:text-black" onClick={handleNewInput}>Edit Task</button>
       </div>
    </div>
    )
}

export default EditBox;