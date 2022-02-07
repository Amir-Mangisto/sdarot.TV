import React from "react";

class Season extends React.Component {
  constructor(props) {
    super(props);
    this.state = { episods: 0 };

    this.epsidoUp = this.epsidoUp.bind(this);
    this.epsidoDown = this.epsidoDown.bind(this);
    this.epsidoReset = this.epsidoReset.bind(this);
  }

  epsidoUp() {
    if(this.state.episods < 25){
        this.setState({episods:this.state.episods +1})
    }
    else{
        alert("must be below 25");
    }
  
  }
  epsidoDown() {
    if(this.state.episods>0){
        this.setState({episods:this.state.episods -1})
    }
    else{
        alert("must be above 0")
    }
  }
  epsidoReset() {
    this.setState({ episods: 0 });
  }

  render() {
    let { season, raiting, views } = this.props;
    return (
      <div>
          <h1>{this.state.episods}</h1>
          <button onClick={this.epsidoUp}>up</button>
          <button onClick={this.epsidoDown}>down</button>
          <button onClick={this.epsidoReset}>reset</button>



        <h1>{season}</h1>
        <h1>{raiting}</h1>
        <h1>{views}</h1>
      </div>
    );
  }
}
export default Season;
