import React from "react";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import { Link } from "react-router-dom";

import "/src/styles.css";

const notebook = () => {
  return (
    <div>
      <h1>
        <center>The Notebook Reviews</center>
      </h1>
      <div>
        <Container>
          <Row>
            <Col>
              <Image src="../movies/notebook.jpg" roundedCircle />
            </Col>
            <Col>
              <br />
              <br />
              <br />
              <br />
              Romance Movie
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
            <Col xs={2}>9/10</Col>
            <Col xs={10}>
              <p>This movie is a classic for a reason, go watch it.</p>
            </Col>
          </Row>
          <Row>
            <Col>5/10</Col>
            <Col xs={10}>
              <p>
                This movie is like if titanic was on land and Jack was never in
                danger of drowning. Go watch Titanic instead.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default notebook;
