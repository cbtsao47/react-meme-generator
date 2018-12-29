import React from "react";

class MemeGenerator extends React.Component {
  constructor() {
    super();
    this.state = {
      topText: "",
      bottomText: "",
      randomImg: "http://i.imgflip.com/1bij.jpg",
      memeImgs: []
    };
  }
  handleClick = e => {
    e.preventDefault();
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    this.setState({
      randomImg: this.state.memeImgs[randomNumber].url
    });
  };
  handleSubmit = e => {
    e.preventDefault();
  };
  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };
  componentDidMount() {
    fetch("https://api.imgflip.com/get_memes")
      .then(response => response.json())
      .then(response => {
        const { memes } = response.data;

        this.setState({
          memeImgs: memes
        });
      })
      .catch(err => console.log(err));
  }

  render() {
    console.log(this.state.memeImgs[0]);
    return (
      <div>
        <form action="" onSubmit={this.handleSubmit}>
          <input
            name="topText"
            type="text"
            placeholder={"Top Text"}
            value={this.state.topText}
            onChange={this.handleChange}
          />
          <input
            name="bottomText"
            type="text"
            placeholder={"Bottom Text"}
            value={this.state.bottomText}
            onChange={this.handleChange}
          />
        </form>
        <button onClick={this.handleClick}>Change Meme Img</button>
        <div>
          <img src={this.state.randomImg} alt="" />
          <h2>{this.state.topText}</h2>
          <h2>{this.state.bottomText}</h2>
        </div>
      </div>
    );
  }
}

export default MemeGenerator;
