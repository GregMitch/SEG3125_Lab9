import React, { useState } from "react";
import Image from "react-bootstrap/Image";
import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import { SketchPicker } from "react-color";

const explore = () => (
  <div>
    <h1>
      <center>Explore Our Many Reviews!</center>
    </h1>
    <h2>
      <center>Movies</center>
    </h2>
    <Container>
      <div style={{ width: 300, margin: "auto" }}>
        <Carousel>
          <Carousel.Item>
            <Link to="/reviews/avenger">
              <Image
                className="d-block w-100"
                src="./movies/avenger.jpg"
                alt="First slide"
                roundedCircle
              />
            </Link>
          </Carousel.Item>

          <Carousel.Item>
            <Link to="/reviews/notebook">
              <Image
                className="d-block w-100"
                src="./movies/notebook.jpg"
                alt="2nd Slide"
                roundedCircle
              />
            </Link>
          </Carousel.Item>
        </Carousel>
      </div>
    </Container>
    <br />
    <h2>
      <center>TV Shows</center>
    </h2>
    <Container>
      <div style={{ width: 300, margin: "auto" }}>
        <Carousel>
          <Carousel.Item>
            <Link to="/reviews/stranger">
              <Image
                className="d-block w-100"
                src="./shows/stranger.jpg"
                alt="First slide"
                roundedCircle
              />
            </Link>
          </Carousel.Item>

          <Carousel.Item>
            <Link to="/reviews/pokemon">
              <Image
                className="d-block w-100"
                src="./shows/pokemon.jpg"
                alt="2nd Slide"
                roundedCircle
              />
            </Link>
          </Carousel.Item>
        </Carousel>
      </div>
    </Container>
    <br />
    <h2>
      <center>Web Shows</center>
    </h2>
    <Container>
      <div style={{ width: 300, margin: "auto" }}>
        <Carousel>
          <Carousel.Item>
            <Link to="/reviews/subway">
              <Image
                className="d-block w-100"
                src="./webs/subway.jpg"
                alt="First slide"
                roundedCircle
              />
            </Link>
          </Carousel.Item>

          <Carousel.Item>
            <Link to="/reviews/bravest">
              <Image
                className="d-block w-100"
                src="./webs/brave.jpg"
                alt="2nd Slide"
                roundedCircle
              />
            </Link>
          </Carousel.Item>
        </Carousel>
      </div>
    </Container>
    <br />
  </div>
);

export default explore;
