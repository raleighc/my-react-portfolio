import React, {useState, useEffect} from "react";
import ProjectsJSON from "../../projects"

import "./ProjectCard.css"


const ProjectCard = () => {
    const [projects, setProjects] = useState([])
    useEffect(() => {
        setProjects(ProjectsJSON)
        // console.log(ProjectsJSON)
    }, [])
  return (
    <>
    {projects.map(project => {
        console.log(project)
        return (
            <div className="card">
            <img className="projectImg" src={project.image}/>
            <h3>{project.title}</h3>
            </div>
        )
    })}
    </>
  );
};

export default ProjectCard;
