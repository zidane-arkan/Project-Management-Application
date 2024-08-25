import { useState } from "react";

import ProjectSidebar from "./components/ProjectSidebar";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import SelectedProject from "./components/SelectedProject";
// const data = {
//   title: titleInput.current.value,
//   description: descInput.current.value,
//   dueDate: dateInput.current.value,
// };

function App() {
  const [selectedProject, setSelectedProject] = useState({
    // Undefined = Belum ada project yang dipilih, null = Project sedang ditambahkan tapi belum disimpan, idProject (example = 1) = Project sudah dibuat dan disimpan
    selectedProjectId: undefined,
    projects: [],
    tasks: [],
  });

  const handleShowNewProject = () => {
    setSelectedProject((prevState) => ({
      ...prevState,
      selectedProjectId: null,
    }));
  };

  const handleCancelNewProject = () => {
    setSelectedProject((prevState) => ({
      ...prevState,
      selectedProjectId: undefined,
    }));
  };

  // HANDLE TASK
  const handleAddTask = (text) => {
    setSelectedProject((prevState) => {
      const taskId = Math.random();
      const newTask = {
        id: taskId,
        projectId: prevState.selectedProjectId,
        text: text,
      };
      return {
        ...prevState,
        tasks: [newTask, ...prevState.tasks],
      };
    });
  };

  const handleDeleteTask = (id) => {
    setSelectedProject((prevState) => {
      return {
        ...prevState,
        tasks: prevState.tasks.filter((task) => task.id !== id),
      };
    });
  };
  // HANDLE PROJECTS
  const handleAddNewProject = (projectData) => {
    const newProject = {
      ...projectData,
      id: Math.random(),
    };

    setSelectedProject((prevState) => ({
      ...prevState,
      selectedProjectId: undefined,
      projects: [...prevState.projects, newProject],
    }));
  };

  const handleSelectProject = (id) => {
    // const selectedProject = selectedProject.projects.find(id);
    // console.log(selectedProject);
    setSelectedProject((prevState) => ({
      ...prevState,
      selectedProjectId: id,
    }));
  };

  const handleDeleteProject = () => {
    setSelectedProject((prevState) => ({
      ...prevState,
      selectedProjectId: undefined,
      projects: prevState.projects.filter(
        ({ id }) => id !== prevState.selectedProjectId
      ),
    }));
  };

  // console.log(selectedProject);

  let content = <NoProjectSelected onShowNewProject={handleShowNewProject} />;

  if (selectedProject.selectedProjectId === null) {
    content = (
      <NewProject
        onAddNewProject={handleAddNewProject}
        onCancelNewProject={handleCancelNewProject}
      />
    );
  }

  // If selected project is has id (not undefined or null)
  if (selectedProject.selectedProjectId) {
    const projectSelected = selectedProject.projects.find(
      (project) => project.id === selectedProject.selectedProjectId
    );
    // console.log(projectSelected);
    content = (
      <SelectedProject
        project={projectSelected}
        tasks={selectedProject.tasks}
        onDeleteProject={handleDeleteProject}
        onAddTask={handleAddTask}
        onDeleteTask={handleDeleteTask}
      />
    );
  }
  return (
    <main className="min-h-screen flex gap-8 my-8">
      <ProjectSidebar
        projects={selectedProject.projects}
        onShowNewProject={handleShowNewProject}
        onSelectProject={handleSelectProject}
        selectedProjectId={selectedProject.selectedProjectId}
      />
      {content}
    </main>
  );
}

export default App;
