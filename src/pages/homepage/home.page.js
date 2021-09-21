import React, {useState} from "react";

//@Components
import InputBox from "../../components/InputBox/inputBox.components";
import TaskBox from "../../components/taskbox/taskbox.components";

const HomePage = () => {
    const[tasks, setTasks] = useState([]);
    const[item, setItem] = useState([""]);

    const handleDelete =(task)=> {
      const newArr = tasks.filter( t => t !== task);
        setTasks(newArr); 
   };

    if(item.length >1 ){
        handleDelete(item);
        setItem("");
    } 
    return(
        <div className="bg-gray-800 h-screen flex flex-col">
            <InputBox setTasks={setTasks}  tasks={tasks} />
            {tasks && 
                tasks.map((task, index)=>{
                    return <TaskBox key={index} task={task} setItem={setItem}/>;
            })}
        
            <div className="w-1/4 h-4 bg-gray-400  flex  justify-between items-center px-5 rounded-b-md self-center"></div>
        </div>
    )
}

export default HomePage;