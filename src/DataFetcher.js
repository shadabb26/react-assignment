import React from "react";

export default class DataFetcher extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: "Data Will Arrive in 5 seconds",
    };
  }

  componentDidMount() {
    setTimeout(() => {
      fetch("http://localhost:3000/mydata.txt")
        .then((response) => response.text())
        .then((data) => {
          this.setState({ data: data });
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    },5000);
  }

  render() {
    return <div>{this.state.data}</div>;
  }
}
