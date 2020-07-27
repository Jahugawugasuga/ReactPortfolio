import React, { Component } from "react";

class Portfolio extends Component {

    render() {
        return (

            <div class="container">
                <div class="row">
                    
                    <div class="col-lg-5">

                    </div>

                    <div class="row">
                        <div class="col-lg-12 col-md-12 col-sm-12">
                            <div id="h1_secondary">Portfolio</div>
                            <hr />
                        </div>
                        <div class="imgcontainer">
                            <div class="row">
                                <div class="col-lg-4 col-md-4 col-sm-4 img-responsive">
                                    <img id="password" class="img" src="/public/Img/jason-dent-3wPJxh-piRw-unsplash.jpg"
                                        alt="vault" />
                                    <div>
                                        <p id="linkfont">
                                            <a href="https://jahugawugasuga.github.io/password_generator/">Password Generator</a>
                                        </p>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-md-4 col-sm-4 img-responsive">
                                    <img id="team" class="img" src="/public/Img/bekir-donmez-eofm5R5f9Kw-unsplash.jpg"
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
                            <div class="row">
                                <div class="col-lg-4 col-md-4 col-sm-4 img-responsive">
                                    <img id="planner" class="img" src="./public/Img/stil-flRm0z3MEoA-unsplash.jpg"
                                        alt="day_planner" />
                                    <div>
                                        <p id="linkfont">
                                            <a href="https://jahugawugasuga.github.io/Calendar/">Day Planner</a>
                                        </p>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-md-4 col-sm-4 img-responsive">
                                    <img id="weather" class="img" src="./Assets/Images/max-larochelle-uu-Jw5SunYI-unsplash.jpg"
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