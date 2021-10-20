import React, {useState} from "react";

//@Components
import InputBox from "../../components/InputBox/inputBox.components";
import TaskBox from "../../components/taskbox/taskbox.components";
import EditBox from "../../components/EditBox/editBox.components";

const HomePage = () => {
    const[tasks, setTasks] = useState([]);
    const[item, setItem] = useState([""]);
    const[editItem, setEditItem] = useState(['']);
    const[error, setError] = useState("");

    const handleDelete =(task)=> {
      const newArr = tasks.filter( t => t !== task);
        setTasks(newArr);
        setEditItem("");
   };

    if(item.length >1 ){
        handleDelete(item);
        setItem("");
    } 
    return(
        <div className="bg-gray-800 h-screen flex flex-col">
            <InputBox setTasks={setTasks}  tasks={tasks} error={error} setError={setError} />
            {tasks && 
                tasks.map((task, index)=>{
                    return <TaskBox key={index} task={task} setItem={setItem} setEditItem={setEditItem}/>;
            })}
            {tasks.length > 0 && editItem.length < 0 && (
               <div className="w-1/4 h-4 bg-gray-400  flex  justify-between items-center px-5 rounded-b-md self-center">
                   {""}
               </div> 
            )}
               {editItem.length > 1 && (
        <EditBox item={editItem} setTasks={setTasks} tasks={tasks} setError={setError} setEditItem={setEditItem} />
      )}
        </div>
    )
}

export default HomePage;