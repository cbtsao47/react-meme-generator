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
    const randomNumber = Math.floor(Math.random() * 99) + 1;
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
      <div className="meme-generator">
        <form className="meme-generator__form" onSubmit={this.handleSubmit}>
          <input
            className="meme-generator__input"
            name="topText"
            type="text"
            placeholder={"Top Text"}
            value={this.state.topText}
            onChange={this.handleChange}
          />
          <input
            className="meme-generator__input"
            name="bottomText"
            type="text"
            placeholder={"Bottom Text"}
            value={this.state.bottomText}
            onChange={this.handleChange}
          />
          <button className="meme-generator__btn" onClick={this.handleClick}>
            Change Meme Img
          </button>
        </form>
        <div className="meme">
          <img className="meme__img" src={this.state.randomImg} alt="" />
          <h2 className="meme__top-text">{this.state.topText}</h2>
          <h2 className="meme__bottom-text">{this.state.bottomText}</h2>
        </div>
      </div>
    );
  }
}

export default MemeGenerator;
