import { NewTasks } from "./NewTasks"

export const Tasks = ({onAdd, onDelete, tasks}) => {
   
    return (
   
        <section>

            <NewTasks onAdd={onAdd}></NewTasks>
            
            <h2 className="text/2xl font-bol text-stone-700 mb-4">Tasks</h2>

            {tasks.length === 0 && (<p className="text-stone-800 mb-3 my-4">This project does not have any tasks yet</p>)}

            { tasks.length > 0 && 
                
                <ul className="p-4 mt-8 rounded-md bg-stone-100">

                    {tasks.map((task) => 
                    
                        <li key={task.id} className="flex justify-between my-4">
                            
                            <span>{task.text}</span>

                            <button onClick={() => onDelete(task.id)} className="text-stone-100 bg-red-500 hover:bg-stone-300">Clear</button>
                            
                        </li>
 
                    )}
                
                </ul>
                
            }

        </section>

    )

}