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

  const handleSelectedProject = (id) => {
    // const selectedProject = selectedProject.projects.find(id);
    // console.log(selectedProject);
    setSelectedProject((prevState) => ({
      ...prevState,
      selectedProjectId: id,
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
    content = <SelectedProject project={projectSelected} />;
  }
  return (
    <main className="min-h-screen flex gap-8 my-8">
      <ProjectSidebar
        projects={selectedProject.projects}
        onShowNewProject={handleShowNewProject}
        onSelectedProject={handleSelectedProject}
      />
      {content}
    </main>
  );
}

export default App;
