import { useState } from "react";
import { NewProject } from "./components/NewProject";
import { NoProjectSelected } from "./components/NoProjectSelected";
import { Sidebar } from "./components/Sidebar";

const App = () => {

  const [projectState, setProjectState] = useState({
    
    selectedProjectId: undefined,

    projects: []
  
  })

  const handleStartAddProject = () =>  {
    
    setProjectState((prevState) => {

      return {

        ...prevState,
        
        selectedProjectId: null,

      }
    
    })
    
  }

  const handleAddProject = (projectData) => {
    
    setProjectState((prevState) =>  {

      const projectId = Math.random()

      const newProject = {
      
        ...projectData,

        id: projectId
      
      }
      
      return {
      
        ...prevState,

        selectedProjectId: undefined, 

        projects: [...prevState.projects, newProject]
      
      }
    
    })
  
  
  }

  const handleCancelAddProject = () => {
  
    setProjectState((prevState) =>  {

      return {
      
        ...prevState,

        selectedProjectId: undefined, 
      
      }
      
    })
  
  }

  let content 

  if(projectState.selectedProjectId === null) {
  
    content = <NewProject onAdd={handleAddProject} onCancel={handleCancelAddProject}></NewProject>
  
  } else if (projectState.selectedProjectId === undefined) {
    
    content = <NoProjectSelected onStartAddProject={handleStartAddProject}></NoProjectSelected>
  
  }

  return (
  
    <main className="h-screen my-8 flex gap-8">
    
      <Sidebar onStartAddProject={handleStartAddProject} projects={projectState.projects}></Sidebar>

      {content}
    
    </main>
  
  );

}

export default App;
