import React, { Component } from "react";

class Contact extends Component {

    render() {
        return (
            <div>
                <div className="card border-light mb-3">
                    <div id="h1_secondary">Contact</div>
                    <hr />
                    <div className="card-body">
                        <form>
                            <div className="form-group">
                                <label>Name</label>
                                <input type="name" className="form-control" id="exampleFormControlInput1" placeholder="John Smith" />
                                <div className="form-group">
                                    <label>Email Address</label>
                                    <input type="name" className="form-control" placeholder="name@example.com" />
                                </div>
                                <div className="form-group">
                                    <label>Message</label>
                                    <textarea className="form-control" id="exampleFormControlTextarea1" placeholder="Email Functionality Coming Soon!" rows="4"></textarea>
                                </div>
                                <input id="btnbtnbtn" type="submit" value="Submit" />

                            </div>
                        </form>

                    </div>
                </div>
            </div>

        )
    }
}

export default Contact;