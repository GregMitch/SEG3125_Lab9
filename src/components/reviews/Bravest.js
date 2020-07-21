import React from "react";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import { Link } from "react-router-dom";

import "/src/styles.css";

const bravest = () => {
  return (
    <div>
      <h1>
        <center>Bravest Warriors Reviews</center>
      </h1>
      <div>
        <Container>
          <Row>
            <Col>
              <Image src="../webs/brave.jpg" roundedCircle />
            </Col>
            <Col>
              <br />
              <br />
              <br />
              <br />
              Animation
              <br />
              PG
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
                <p class="move">9.5/10</p>
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
              <p>Literal perfection, has same charm as Adventure Time.</p>
            </Col>
          </Row>
          <Row>
            <Col>9/10</Col>
            <Col xs={10}>
              <p>Amazing show i recommend every to check it out.</p>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default bravest;
