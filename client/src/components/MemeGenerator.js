import React from "react";

class MemeGenerator extends React.Component {
  constructor() {
    super();
    this.state = {
      topText: "",
      bottomText: "",
      randomImg: "http://i.imgflip.com/1bij.jpg"
    };
  }
  componentDidMount() {
    fetch("https://api.imgflip.com/get_memes")
      .then(response => response.json())
      .then(response => {
        const { meme } = response.data;
        this.setState({
          memes: meme
        });
      });
  }

  render() {
    return (
      <div>
        <h1>yoo</h1>
      </div>
    );
  }
}

export default MemeGenerator;
