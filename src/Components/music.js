import React, { Component } from 'react';
import Track from './track';

class Music extends Component{

    render(){
        
        return this.props.songs.map((song)=>{ // arrow function
            return <Track song={song} key={song.imdbID}></Track> // film.imdbID is a unique identifier to avoid infinate loop
        })
        }
}

export default Music;