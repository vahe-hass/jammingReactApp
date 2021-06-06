import React from "react";
import "./App.css";
import SearchBar from "../SearchBar/SearchBar";
import SearchResult from "../SearchResults/SearchResults";
import PlayList from "../PlayList/PlayList";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [
        {
          name: "Stairway to heaven",
          artist: "Led Zeppelin",
          album: "Led Zeppelin IV",
          id: 1,
        },
        {
          name: "Whole lotta love",
          artist: "Led Zeppelin",
          album: "Led Zeppelin II",
          id: 2,
        },
        {
          name: "Black dog",
          artist: "Led Zeppelin",
          album: "Led Zeppelin IV",
          id: 3,
        },
      ],
      playlistName: [],
      playlistTracks: [],
      isRemoval: false,
    };
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
  }

  addTrack(track) {
    let tracks = this.state.playlistTracks;
    if (tracks.find((eachTrack) => eachTrack.id === track.id)) {
      return;
    } else {
      tracks.push(track);
      this.setState({ playlistTracks: tracks });
    }
  }

  removeTrack(track) {
    let tracks = this.state.playlistTracks;
    let filteredTracks = tracks.filter(
      (eachTrack) => eachTrack.id !== track.id
    );
    this.setState({ playlistTracks: filteredTracks });
  }

  updatePlaylistName(name) {
    this.setState({ playlistName: name });
  }

  render() {
    return (
      <div>
        <h1>
          Ja<span className="highlight">mmm</span>ing
        </h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
            <SearchResult
              searchResults={this.state.searchResults}
              onAdd={this.addTrack}
              isRemoval={this.state.isRemoval}
            />
            <PlayList
              playlistName={this.state.playlistName}
              playlistTracks={this.state.playlistTracks}
              onRemove={this.removeTrack}
              onNameChange={this.updatePlaylistName}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
