import { useRef } from "react";
import Input from "../components/Input";
import Modal from "./Modal";

export const NewProject = ({ onAdd, onCancel }) => {

  const modal = useRef()
    
  const titleRef = useRef();

  const description = useRef();

  const dueDate = useRef();

    const handleSave = () => {
    
        const enteredTitle = titleRef.current.value;

        const enteredDescription = description.current.value;

        const enteredDueDate = dueDate.current.value;

        // validacion

        if ( enteredTitle.trim() === "" || enteredDescription.trim === "" || enteredDueDate.trim() === "" ) {

            modal.current.open()
            
            return;
    
        }

        onAdd({
      
            titleRef: enteredTitle,

            description: enteredDescription,

            dueDate: enteredDueDate,
    
        });
  
    };

  return (

    <>

      <Modal ref={modal} buttonCaption="OK">

        <h2 className="text-xl font-bold text-stone-900 mt-3 mb-5 text-center">Invalid Input</h2>

        <p className="text-stone-600 mb-4 font-bold text-xl text-center mt-4">Oops... looks like you forgot to enter a value</p>

        <p className="text-stone-600 mb-4 font-bold text-xl text-center mt-4">Please make sure you provide a valid value for every input field</p>

      </Modal>
      
      <div className="w-[35rem] mt-16">
      
        <menu className="flex items-center justify-end gap-4 my-4">
      
          <li>
      
            <button className="bg-red-500 px-6 py-2 rounded-md text-stone-100" onClick={onCancel}>
      
              Cancel
      
            </button>
      
          </li>

      
          <li>
      
            <button
      
                className="bg-stone-800 text-stone-50 hover:bg-stone-950 px-6 py-2 rounded-md"
              
                onClick={handleSave}
            
            >
            
              Save
            
            </button>
          
          </li>
        
        </menu>

        <div>
        
          <Input type="text" ref={titleRef} label="Title"></Input>

          <Input ref={description} label="Description"></Input>

          <Input type="date" ref={dueDate} label="Due Date"></Input>
        
        </div>
      
      </div>
    
    </>
  
  );

};