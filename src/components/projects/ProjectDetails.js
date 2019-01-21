import React from 'react'

const ProjectDetails = ( props ) => {
    // console.log( props )
    const id = props.match.params.id
    return (
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Project Title {id}</span>
                    <p>lorem ipsum dolor sit amet consectetur adispisicing elit. Aspernatur</p>
                </div>
                <div className="card-action gret lighten-4 grey-text">
                    <div>Posted by Siri</div>
                    <div>2nd January, 3am</div>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetails
