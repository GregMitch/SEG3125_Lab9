import React from "react";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import { Link } from "react-router-dom";

import "/src/styles.css";

const stranger = () => {
  return (
    <div>
      <h1>
        <center>Stranger Things Reviews</center>
      </h1>
      <div>
        <Container>
          <Row>
            <Col>
              <Image src="../shows/stranger.jpg" roundedCircle />
            </Col>
            <Col>
              <br />
              <br />
              <br />
              <br />
              Drama
              <br />
              TV-14
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
                This show will give you the creeps without relying jump scares
                and has a deep story that you cant get out of your head.
              </p>
            </Col>
          </Row>
          <Row>
            <Col>6/10</Col>
            <Col xs={10}>
              <p>
                Scooby Doo is the ultimate mystery drama and this a blatant rip
                off.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default stranger;
