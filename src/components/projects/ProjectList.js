import React from 'react';
import ProjectSummary from './ProjectSummary';

const ProjectList = ({ projects }) => {
    return (
        <div className="project-list section">
            {/* if we have projects than do projects.map else don't */}
            { projects && projects.map( project => {
                return (
                    <ProjectSummary project={ project } key={ project.id } /> 
                )
            })}
        </div>
    )
}

export default ProjectList;
