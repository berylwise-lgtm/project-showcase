import { useState } from "react";

function ProjectForm({ onAddProject }) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");
    const [projectUrl, setProjectUrl] = useState("");

    function handleSubmit(event) {
        event.preventDefault();

        if (!title.trim() || !description.trim()) {
            alert("Please fill in both fields.");
            return;
        }

        onAddProject({
            id: Date.now(),
            title,
            description,
            image,
            projectUrl,
        });

        alert("Project added successfully!");

        setTitle("");
        setDescription("");
        setImage("");
        setProjectUrl("");
    }

    return (
        <section className="project-form">
            <h2>Add Project</h2>

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Project Title"
                    value={title}
                    onChange={(event) => setTitle(event.target.value)}
                />

                <textarea
                    placeholder="Project Description"
                    value={description}
                    onChange={(event) => setDescription(event.target.value)}
                />

                <input
                    type="text"
                    placeholder="Project Image URL (optional)"
                    value={image}
                    onChange={(event) => setImage(event.target.value)}
                />

                <input
                    type="text"
                    placeholder="Project URL (GitHub or live website)"
                    value={projectUrl}
                    onChange={(event) => setProjectUrl(event.target.value)}
                />

                <button type="submit">Add Project</button>
            </form>
        </section>
    );
}

export default ProjectForm;