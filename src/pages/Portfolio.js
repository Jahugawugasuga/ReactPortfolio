import React, { Component } from "react";
import team from "../Img/bekir-donmez-eofm5R5f9Kw-unsplash.jpg"
import vault from "../Img/jason-dent-3wPJxh-piRw-unsplash.jpg"
import lightning from "../Img/max-larochelle-uu-Jw5SunYI-unsplash.jpg"
import planner from "../Img/stil-flRm0z3MEoA-unsplash.jpg"

class Portfolio extends Component {

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
                        <div className="imgcontainer">
                            <div className="row">
                                <div className="col-lg-4 col-md-4 col-sm-4 img-responsive">
                                    <img id="password" className="img" src={vault}
                                        alt="vault" />
                                    <div>
                                        <p id="linkfont">
                                            <a href="https://jahugawugasuga.github.io/password_generator/">Password Generator</a>
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-4 img-responsive">
                                    <img id="team" className="img" src={team}
                                        alt="stacked_rocks" />
                                    <div>
                                        <p id="linkfont">
                                            <a href="https://jahugawugasuga.github.io/teammanager">Team Manager</a>
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <br />
                            <br />
                            <div className="row">
                                <div className="col-lg-4 col-md-4 col-sm-4 img-responsive">
                                    <img id="planner" className="img" src={planner}
                                        alt="day_planner" />
                                    <div>
                                        <p id="linkfont">
                                            <a href="https://jahugawugasuga.github.io/Calendar/">Day Planner</a>
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-4 img-responsive">
                                    <img id="weather" className="img" src={lightning}
                                        alt="thunderstorm" />
                                    <p id="linkfont">
                                        <a href="https://jahugawugasuga.github.io/Weather-Information-Database/">
                                            Weather Forecast
                                        </a>
                                    </p>
                                </div>
                            </div>
                            <br />
                            <br />

                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default Portfolio;