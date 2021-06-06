import React from "react";
import "./PlayList.css";
import TrackList from "../TrackList/TrackList";

class PlayList extends React.Component {
  constructor(props) {
    super(props);
    this.handleNameChange = this.handleNameChange.bind(this);
  }
  handleNameChange(e) {
    console.log(e);
    console.log(e.target);
    console.log(e.target.value);
    this.props.onNameChange(e.target.value);
  }

  render() {
    return (
      <div className="Playlist">
        <input defaultValue={"New Playlist"} onChange={this.handleNameChange} />
        <div>
          <TrackList
            tracks={this.props.playlistTracks}
            onRemove={this.props.onRemove}
            isRemoval={true}
          />
        </div>
        <button className="Playlist-save">SAVE TO SPOTIFY</button>
      </div>
    );
  }
}

export default PlayList;
