import React, { Component } from "react";

class About extends Component {
constructor (props){
super(props)
this.state = {

}
}
    render() {
        return (
            <div>
              <div class="row">
                <div class="col-lg-8">
                    <div id="h1_secondary">About Me</div>
                    <hr/>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-2 img-responsive">
                    <img class="img" src="/public/Img/brooksfam.png" alt="brooks_family"/>
                </div>
                <div class="col-lg-6">
                    <p class="standardtext">
                        James and his family live in Bountiful, Utah. James and Alexia have been married four and a half
                        years and had their first son Hugh in January of 2019. With previous education and experience in
                        landscaping, James worked for a local company for 2.5 years before deciding to change directions
                        into the tech industry.
                    </p>
                </div>
                <br/>
                <div class="row">
                    <div class="col-lg-8">
                        <p>
                            Diving into coding has been an experience, and a fitting analogy. There are times where the
                            water seems calm, then there are times where its tough to keep your head above water. Every
                            day I learn new tools to help me excel in my future career. This is an industry that will
                            challenge me daily, the content changes rapidly, and the opportunities are available for
                            those willing to work for them. I'm excited to see where this knowledge takes me.
                        </p>
                    </div>
                </div>
            </div>
            </div>

        )
    }
}

export default About;