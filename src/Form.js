import React from "react";

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Enter Name",
      email: "Enter Email",
    };
  }

  onNameChange = (event) => {
    this.setState({
      name: event.target.value,
    });
  };

  onEmailChange = (event) => {
    this.setState({
      email: event.target.value,
    });
  };

  formSubmit = (event) => {
    event.preventDefault();
    alert("Form Submitted");
  };

  render() {
    return (
      <div>
        <p>This is Exercise 3 of Assignment - 01 of React</p>
        <h3>Hello from My Form</h3>
        <form>
          <input
            type="text"
            value={this.state.name === "Enter Name" ? "" : this.state.name}
            onChange={this.onNameChange}
            placeholder="Enter Name"
          />{" "}
          <input
            type="text"
            value={this.state.email === "Enter Email" ? "" : this.state.email}
            onChange={this.onEmailChange}
            placeholder="Enter Email"
          />{" "}
          <button onClick={this.formSubmit}>Submit</button>
        </form>
        <hr></hr>
      </div>
      

    );
  }
}
