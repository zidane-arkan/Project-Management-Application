import { useState } from "react";

import ProjectSidebar from "./components/ProjectSidebar";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
function App() {
  const [selectedProject, setSelectedProject] = useState({
    // Undefined = Belum ada project yang dipilih, null = Project sedang ditambahkan, idProject (example = 1) = Project sudah dibuat
    selectedProjectId: undefined,
    projects: [],
  });

  const handleShowNewProject = () => {
    setSelectedProject((prevState) => ({
      ...prevState,
      selectedProjectId: null,
    }));
  };

  let content = <NoProjectSelected onShowNewProject={handleShowNewProject} />;

  if (selectedProject.selectedProjectId === null) {
    content = <NewProject />;
  }
  return (
    <main className="min-h-screen flex gap-8 my-8">
      <ProjectSidebar onShowNewProject={handleShowNewProject} />
      {content}
    </main>
  );
}

export default App;
