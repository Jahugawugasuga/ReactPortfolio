import React from "react";
import "./style.css";
// import vault from "../Img/jason-dent-3wPJxh-piRw-unsplash.jpg"
// import team from "../Img/bekir-donmez-eofm5R5f9Kw-unsplash.jpg"
// import lightning from "../Img/max-larochelle-uu-Jw5SunYI-unsplash.jpg"
// import planner from "../Img/stil-flRm0z3MEoA-unsplash.jpg"

function Project(props) {


    return (

        <div className="imgcontainer">
            <div className="row">
                <div className="col-lg-4 col-md-4 col-sm-4 img-responsive">
                    <img id="password" className="img" src={require("../../Img/" + props.image)}
                        alt="vault" />
                    <div>
                        <p id="linkfont">
                            <a href={props.link}>{props.id}{props.title}</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Project;