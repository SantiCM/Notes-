import { useState } from "react"

export const NewTasks = ({onAdd}) => {

    const [enteredTasks, setEnteredTasks] = useState("")

    const handleChange = (event) => {
        
        setEnteredTasks(event.target.value)

    }

    const handleClick = () => {

        if(enteredTasks.trim() === "") {
            
            return
        
        }

        onAdd(enteredTasks)
  
        setEnteredTasks("")
  
    }
    
    return (

        <div className="flex items-center gap-4">
            
            <input className="w-64 px-2 py-1 rounded-sm bg-stone-200" type="text" onChange={handleChange} value={enteredTasks}></input>

            <button onClick={handleClick} className="text-stone-700 hover:text-stone-950">Add Task</button>

        </div>
    
    )

}
