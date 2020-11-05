import React, {useState, useEffect} from "react";
import ProjectsJSON from "../../projects.json"

import "./ProjectCard.css"


const ProjectCard = () => {
    const [projects, setProjects] = useState([])
    useEffect(() => {
        setProjects(ProjectsJSON)
        // console.log(ProjectsJSON)
    }, [])
  return (
    <div className="container">
    {projects.map(project => {
        console.log(project)
        return (
            <div className="card">
            <img className="projectImg" src={project.image} alt={project.title}/>
            <h3>{project.title}</h3>
            </div>
        )
    })}
    </div>
  );
};

export default ProjectCard;
