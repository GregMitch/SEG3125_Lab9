import React from "react";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import { Link } from "react-router-dom";

import "/src/styles.css";

const pokemon = () => {
  return (
    <div>
      <h1>
        <center>Pokemon Reviews</center>
      </h1>
      <div>
        <Container>
          <Row>
            <Col>
              <Image src="../shows/pokemon.jpg" roundedCircle />
            </Col>
            <Col>
              <br />
              <br />
              <br />
              <br />
              Animation
              <br />
              G
              <br />
              <Link to="/submit">
                <button type="button">Submit a review</button>
              </Link>
            </Col>
            <Col>
              <br />
              <br />
              <div class="circle">
                <br />
                <br />
                <p class="move">10/10</p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <br />
      <br />
      <div>
        <Container>
          <Row>
            <Col xs={2}>10/10</Col>
            <Col xs={10}>
              <p>
                Brocks character makes this show a 10 all by himself, the quote
                "I'll use my trusty frying pan, as a drying pan!" makes this the
                best show ever.
              </p>
            </Col>
          </Row>
          <Row>
            <Col>10/10</Col>
            <Col xs={10}>
              <p>
                Watching this will remind you of carefree times when you were
                younger and the only thing you had to worry about was turning
                the channel to Pokemon at the right time.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default pokemon;
