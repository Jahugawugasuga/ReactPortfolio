import React, { Component } from "react";
import Project from "../components/Project"
import projectsJSON from "../projects.json"


class Portfolio extends Component {
    constructor(props) {
        super(props)
        this.state = {
            projects: projectsJSON
        }
    }

    render() {
        return (

            <div className="container">
                <div className="row">

                    <div className="col-lg-5">

                    </div>

                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <div id="h1_secondary">Portfolio</div>
                            <hr />
                        </div>

                        {this.state.projects.map(project => (
                            <Project
                                id = {project.title}
                                title={project.title}
                                image={project.image}
                                link={project.link}
                            />

                        ))
                    }

                            

                    </div>
                </div>
            </div>



        )
        
    }

}

export default Portfolio;