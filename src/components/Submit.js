import React from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";

const submit = () => {
  return (
    <div>
      <h1>
        <center>Submit A Review!</center>
      </h1>
      <Container>
        <center>
          <Link to="/faq">
            <button type="button">Help</button>
          </Link>
        </center>
        <div style={{ width: 300, margin: "auto" }}>
          <Form>
            <form action="/action_page.php" id="reviewform">
              <label for="fname">Full Name:</label>
              <br />
              <Form.Control type="text" placeholder="Name" />
              <br />
              <label for="email">E-mail:</label>
              <br />
              <Form.Control type="email" placeholder="example@email.com" />
              <br />
              <label for="media">Media You Are Reviewing:</label>
              <br />
              <Form.Control type="text" placeholder="Name of Media" />
              <br />
              <label for="score">Score Out of 10:</label>
              <br />
              <select id="score">
                <option value="one">1</option>
                <option value="two">2</option>
                <option value="three">3</option>
                <option value="four">4</option>
                <option selected value="five">
                  5
                </option>
                <option value="six">6</option>
                <option value="seven">7</option>
                <option value="eight">8</option>
                <option value="nine">9</option>
                <option value="ten">10</option>
              </select>{" "}
              <label for="score">/ 10</label>
              <br />
              <br />
              <label for="review">Review:</label>
              <br />
              <Form.Control
                as="textarea"
                rows="3"
                placeholder="Enter review here... "
              />
              <br />
              <input type="submit" value="Submit" />
            </form>
          </Form>
        </div>
      </Container>
    </div>
  );
};

export default submit;
