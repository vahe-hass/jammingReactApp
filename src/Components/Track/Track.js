import "./Track.css";
import React from "react";

class Track extends React.Component {
  constructor(props) {
    super(props);
    this.clickHandler = this.clickHandler.bind(this);
    this.renderAction = this.renderAction.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
  }

  clickHandler() {
    this.props.onAdd(this.props.track);
  }

  removeTrack() {
    this.props.onRemove(this.props.track);
  }

  renderAction() {
    if (this.props.isRemoval) {
      return (
        <button className="Track-action" onClick={this.removeTrack}>
          -
        </button>
      );
    } else {
      return (
        <button className="Track-action" onClick={this.clickHandler}>
          +
        </button>
      );
    }
  }

  render() {
    return (
      <div className="Track">
        <div className="Track-information">
          <h3>{this.props.track.name}</h3>
          <p>
            {this.props.track.artist} | {this.props.track.album}
          </p>
        </div>
        {this.renderAction()}
      </div>
    );
  }
}

export default Track;
