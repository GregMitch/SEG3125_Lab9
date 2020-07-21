import React from "react";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div>
      <Container>
        <center>
          <h1>Error: Page does not exist!</h1>
          <br />
          <p>
            Sorry, it appears the page being looked for is causing an error in
            our system.
          </p>
          <br />
          <p>
            Please use the navigation bar above to go back to the site or click
            here to return to the home page.
          </p>
          <br />
          <Link to="/">
            <button type="button">Home</button>
          </Link>
        </center>
      </Container>
    </div>
  );
};

export default Error;
