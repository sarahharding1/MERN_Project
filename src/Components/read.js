import React, { Component } from 'react';
import Music from './music';

class Read extends Component{
    //stores JSON data
    state = {
        mymusic: [
            {
            "Name": "Song 1",
            "ReleaseDate": "2016",
            "imdbID": "tt3498820",
            "Type": "song",
            "Artwork": "https://f4.bcbits.com/img/a0801948863_16.jpg" }
]
    };

        render(){
            return(
                <div>
                    <h1>Read Component is in here</h1>
                    <Music songs={this.state.mymusic}></Music>
                </div>
            );
        }
}
export default Read;