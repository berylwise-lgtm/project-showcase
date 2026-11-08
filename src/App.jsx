import { useState,useEffect } from "react";

// Import reusable components
import Header from "./components/Header";
import ProjectForm from "./components/ProjectForm";
import SearchBar from "./components/SearchBar";
import ProjectList from "./components/ProjectList";
import "./App.css";

function App() {
   // Initialize projects using previously saved data from localStorage
  const [projects, setProjects] = useState(() => {
    const savedProjects = localStorage.getItem("projects");
    return savedProjects ? JSON.parse(savedProjects) : [];
  });
   // Store the current search input
  const [searchTerm, setSearchTerm] = useState("");
    // Save projects whenever the projects state changes
  useEffect(() => {
  localStorage.setItem("projects", JSON.stringify(projects));
}, [projects]);
 // Add a new project to the existing project list
  function handleAddProject(newProject) {
    setProjects([...projects, newProject]);
  }
 // Remove a project using its unique ID
function handleDeleteProject(projectId) {
  setProjects((previousProjects) =>
    previousProjects.filter((project) => project.id !== projectId)
  );
alert("Project deleted successfully!");

}
// Filter projects according to the search term
  const filteredProjects = projects.filter((project) =>
    project.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="App-container">
      <Header />
      <ProjectForm onAddProject={handleAddProject} />
      <SearchBar
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
      />
      <section>
        <ProjectList projects={filteredProjects} onDeleteProject={handleDeleteProject}/>



        {filteredProjects.length === 0 && (
          <p>No projects found.</p>
        )}

      </section>
    </div>
  );
}

export default App;