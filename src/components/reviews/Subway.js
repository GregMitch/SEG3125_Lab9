import React from "react";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import { Link } from "react-router-dom";

import "/src/styles.css";

const subway = () => {
  return (
    <div>
      <h1>
        <center>Subway: The Series Reviews</center>
      </h1>
      <div>
        <Container>
          <Row>
            <Col>
              <Image src="../webs/subway.jpg" roundedCircle />
            </Col>
            <Col>
              <br />
              <br />
              <br />
              <br />
              Comedy
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
                <p class="move">9/10</p>
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
                I was orignally trying to order a sub from the eatery, but the
                show was so good I ended up watching the whole season instead!
              </p>
            </Col>
          </Row>
          <Row>
            <Col>8/10</Col>
            <Col xs={10}>
              <p>
                This is amazing web series to watch and could easily be in the
                same tier as other comedies you just gotta give it a chance.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default subway;
