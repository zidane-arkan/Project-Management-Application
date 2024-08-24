import ProjectSidebar from "./components/ProjectSidebar";
import NewProject from "./components/NewProject";
function App() {
  return (
    <main className="min-h-screen flex gap-8 my-8">
      <ProjectSidebar />
      <NewProject />
    </main>
  );
}

export default App;
