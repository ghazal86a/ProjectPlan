import React from 'react'

const ProjectDetails = (props) => {    
    const id = props.match.params.id;
    return (
       <div className="container section project-details">
           <div className="card z-depth-0">
               <div className="card-content">
                   <span className="card-title">Project Title - {id}</span>
                   <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi obcaecati maxime libero doloremque. Voluptates quasi reprehenderit voluptate sunt eos tempora, aspernatur vel, fugiat eum nihil ipsum sapiente ea, libero asperiores.</p>
               </div>
               <div className="card-action grey lighten-4 grey-text">
                   <div>Posted by Ghazal Amini</div>
                    <div>24 April 2020</div>
               </div>
           </div>
       </div>
    )
}


export default ProjectDetails