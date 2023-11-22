import { useState } from "react";
import { NewProject } from "./components/NewProject";
import { NoProjectSelected } from "./components/NoProjectSelected";
import { Sidebar } from "./components/Sidebar";
import { SelectedProject } from "./components/SelectedProject";

const App = () => {

  const [projectState, setProjectState] = useState({
    
    selectedProjectId: undefined,

    projects: [],

    tasks: []
  
  })

  const handleAddTasks = (text) => {
    
    setProjectState((prevState) =>  {

      const tasksId = Math.random()

      const newTasks = {
      
        text: text,

        projectId: prevState.selectedProjectId,

        id: tasksId
      
      }
      
      return {
      
        ...prevState,

        tasks: [...prevState.tasks, newTasks]
      
      }
    
    })
  
  }

  const handleDeleteTasks = (id) => {
  
    setProjectState((prevState) =>  {

      return {
      
        ...prevState,

        tasks: prevState.tasks.filter((tasks) => tasks.id !== id)
      
      }
      
    })
  
  }

  const handleSelectProject = (id) => {
  
    setProjectState((prevState) => {

      return {

        ...prevState,
        
        selectedProjectId: id,

      }
    
    })
  
  }

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

  const handleDeleteProject = () => {
    
    setProjectState((prevState) =>  {

      return {
      
        ...prevState,

        selectedProjectId: undefined, 

        projects: prevState.projects.filter((project) => project.id !== prevState.selectedProjectId)
      
      }
      
    })
  
  }

  // forma en js de encontrar un elemento array por su ID
  const selectedProject = projectState.projects.find(project => project.id === projectState.selectedProjectId)

  let content = <SelectedProject project={selectedProject} onDelete={handleDeleteProject} onAddTasks={handleAddTasks} onDeleteTasks={handleDeleteTasks} tasks={projectState.tasks}></SelectedProject>

  if(projectState.selectedProjectId === null) {
  
    content = <NewProject onAdd={handleAddProject} onCancel={handleCancelAddProject}></NewProject>
  
  } else if (projectState.selectedProjectId === undefined) {
    
    content = <NoProjectSelected onStartAddProject={handleStartAddProject}></NoProjectSelected>
  
  }

  return (
  
    <main className="h-screen my-8 flex gap-8">
    
      <Sidebar onStartAddProject={handleStartAddProject} projects={projectState.projects} onSelectProject={handleSelectProject} selectedProjectId={projectState.selectedProjectId}></Sidebar>

      {content}
    
    </main>
  
  );

}

export default App;
