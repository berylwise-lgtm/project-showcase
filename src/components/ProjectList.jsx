function ProjectList({ projects, onDeleteProject }) {
    return (
        <section className="project-list">
            <h2>Project List</h2>

            {projects.length === 0 ? (
                <p>No projects found.</p>
            ) : (
                <div className="project-grid">
                    {projects.map((project) => (
                        <article className="project-card" key={project.id}>

                            {/* Project Image */}
                            {project.image && (
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="project-image"
                                />
                            )}

                            {/* Project Details */}
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>

                            <button
                                onClick={() => {
                                    const confirmDelete = window.confirm(
                                        "Are you sure you want to delete this project?"
                                    );

                                    if (confirmDelete) {
                                        onDeleteProject(project.id);
                                    }
                                }}
                                className="delete-button"
                            >
                                Delete Project
                            </button>


                            {/* Project Link */}
                            {project.projectUrl && (
                                <a
                                    href={project.projectUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="project-link"
                                >
                                    View Project →
                                </a>
                            )}

                        </article>
                    ))}
                </div>
            )}
        </section>
    );
}

export default ProjectList;