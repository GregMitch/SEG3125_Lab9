import React from "react";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import { Link } from "react-router-dom";

import "/src/styles.css";

const avenger = () => {
  return (
    <div>
      <h1>
        <center>Avengers Reviews</center>
      </h1>
      <div>
        <Container>
          <Row>
            <Col>
              <Image src="../movies/avenger.jpg" roundedCircle />
            </Col>
            <Col>
              <br />
              <br />
              <br />
              <br />
              Action Movie
              <br />
              PG-13
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
                <p class="move">7/10</p>
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
            <Col xs={2}>8/10</Col>
            <Col xs={10}>
              <p>
                This movie is the bee kness cant wait for them to make a second
                one!
              </p>
            </Col>
          </Row>
          <Row>
            <Col>6/10</Col>
            <Col xs={10}>
              <p>
                This movie didn't make me feel like batman so it automatically
                cant go higher then 6/10.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default avenger;
