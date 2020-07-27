import React, { Component } from "react";

class Contact extends Component {

    render() {
        return (
            <div>
                <div class="card border-light mb-3">
        <div id="h1_secondary">Contact</div>
        <hr/>
        <div class="card-body">
          <form>
            <div class="form-group">
              <label for="exampleFormControlInput1">Name</label>
              <input type="name" class="form-control" id="exampleFormControlInput1" placeholder="John Smith"/>
              <div class="form-group">
                <label for="exampleFormControlSelect1">Email Address</label>
                <input type="name" class="form-control" placeholder="name@example.com"/>
              </div>
              <div class="form-group">
                <label for="exampleFormControlTextarea1">Message</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" placeholder="Email functionality Coming Soon!" rows="4"></textarea>
              </div>
              <input id="btnbtnbtn" type="submit" value="Submit"/>
          
        </div>
        </form>

      </div>
    </div>
            </div>

        )
    }
}

export default Contact;