import React, { Component } from "react";
import Music from "./music";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "react-bootstrap";

class Track extends Component {
  render() {
    return (
      <div>
        <Card>
          <Card.Header>Quote</Card.Header>
          <Card.Body>
            <blockquote className="blockquote mb-0">
              <h3>{this.props.song.Name}</h3>
              <img src={this.props.song.Artwork}></img>
              <p>{this.props.song.ReleaseDate}</p>
              <footer className="blockquote-footer">
                All rights reserved <cite title="Source Title">spotify</cite>
              </footer>
            </blockquote>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
export default Track;
