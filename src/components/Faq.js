import React from "react";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";

const faq = () => {
  return (
    <div>
      <h1>
        <center>F.A.Q.</center>
      </h1>
      <br />
      <br />
      <Container>
        <center>
          <Link to="/french">
            <button type="button">Francais</button>
          </Link>
        </center>
        <h3>What is this site?</h3>
        <p>
          This site is a place where you can explore reviews about your
          favourite media and even write your own reviews!
        </p>
      </Container>
      <br />
      <Container>
        <h3>How do I submit my own review?</h3>
        <p>
          Putrid Potatoes has a simple process to submiting a review, simply go
          to our submission page and leave the requested info which contains
          your name, email as a way to contact you, the media you are reviewing
          and a score out of ten you are giving to that media.
        </p>
      </Container>
      <br />
      <Container>
        <h3>Why can I not find a certain movie/show on the site?</h3>
        <p>
          Putrid Potatoes is a new and upcoming site and is currently adding new
          media every week. Media that is added is based upon the reviews we
          recieve for shows we do not currently have, and new popular media.
        </p>
      </Container>
    </div>
  );
};

export default faq;
