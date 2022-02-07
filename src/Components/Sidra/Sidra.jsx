import React from "react";

class Sidra extends React.Component {
    constructor(props){
        super(props)
        this.state={likes:0};
        this.likeDown=this.likeDown.bind(this);
        this.likeUp=this.likeUp.bind(this);
        this.likeReset=this.likeReset.bind(this);
    }

    likeUp(){
        let upState = this.state.likes + 1;
        this.setState({likes:upState})
    }
    likeDown(){
        let downState = this.state.likes - 1;
        this.setState({likes:downState})
    }
    likeReset(){
        this.setState({likes:0})
    }
  render() {
      let {Name, Raiting, Year} = this.props;
      return (
          <div>
        <div>
            <h1>LIKES = {this.state.likes}</h1>
            <button onClick={this.likeDown}> down</button>
            <button onClick={this.likeUp}> up</button>
            <button onClick={this.likeReset}> reset</button>

          <h1>{Name}</h1>
          <h1>{Raiting}</h1>
          <h1>{Year}</h1>
        </div>
      </div>
    );
  }
}
export default Sidra;
