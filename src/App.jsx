import ProjectSidebar from "./components/ProjectSidebar";
// import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
function App() {
  return (
    <main className="min-h-screen flex gap-8 my-8">
      <ProjectSidebar />
      <NoProjectSelected />
    </main>
  );
}

export default App;
