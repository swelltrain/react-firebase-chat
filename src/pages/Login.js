import React, { Component } from "react";
import { Link } from "react-router-dom";
import {signin, signInWithGoogle} from "../helpers/auth";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      email: "",
      password: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value});
  }

  async handleSubmit(event) {
    event.preventDefault();

    this.setState({error: ""});
    try {
      await signin(this.state.email, this.state.password);
    } catch(error) {
      this.setState({error: error.message});
    }
  }

  render()  {
    return(
      <div>
        <form
          autocomplete="off"
          onSubmit={this.handleSubmit}
        >
          <h1>
            Login to
            <Link to="/">Chatty</Link>
          </h1>
          <p>
            Fill in the form below to login to your account.
          </p>
          <div>
            <input
              placeholder="email"
              name="email"
              type="email"
              onChange={this.handleChange}
              value={this.state.email}
            />
          </div>
          <div>
            <input
              placeholder="password"
              name="password"
              type="password"
              onChange={this.handleChange}
              value={this.state.password}
            />
          </div>
          <div>
            {this.state.error ? <p>{this.state.error}</p> : null}
            <button type="submit">Submit</button>
          </div>
          <hr />
          <p>
            Don't have an account? <Link to="/signup">Sign Up</Link>
          </p>
        </form>
      </div>
    );
  }
}
