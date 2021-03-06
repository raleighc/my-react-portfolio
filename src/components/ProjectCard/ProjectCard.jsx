import React, {useState, useEffect} from "react";
import ProjectsJSON from "./projectsJSON.js"

import "./ProjectCard.css"



const ProjectCard = () => {
    const [projects, setProjects] = useState([])
    useEffect(() => {
        setProjects(ProjectsJSON)
        // console.log(ProjectsJSON)
    }, [])
  return (
    <div className="container ProjectCard">
    {projects.map(project => {
      console.log(project.image)
        return (
            <div key={project.id} className="card">
            <img className="projectImg" src={project.image} alt={project.title} />
            <h4 className="center">{project.title}</h4>
            <a className="center" target="_blank" rel="noreferrer noopener" href={project.deployedURL}>Deployed Site</a>
            <p>{project.description}</p>
            </div>
        )
    })}
    </div>
  );
};

export default ProjectCard;
