import React from "react";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";

const french = () => {
  return (
    <div>
      <h1>
        <center>Questions fréquemment posées</center>
      </h1>
      <br />
      <br />
      <Container>
        <center>
          <Link to="/faq">
            <button type="button">English</button>
          </Link>
        </center>
        <h3>Quel est ce site?</h3>
        <p>
          Ce site est un endroit où vous pouvez explorer des critiques sur vos
          médias préférés et même rédiger vos propres critiques!
        </p>
      </Container>
      <br />
      <Container>
        <h3>Comment soumettre ma propre critique?</h3>
        <p>
          Putrid Potatoes a un processus simple pour soumettre un commentaire,
          il vous suffit d'aller sur notre page de soumission et de laisser les
          informations demandées qui contiennent votre nom, votre e-mail pour
          vous contacter, les médias que vous examinez et un score sur dix que
          vous donnez à ce média.
        </p>
      </Container>
      <br />
      <Container>
        <h3>
          Pourquoi ne puis-je pas trouver un certain film / émission sur le
          site?
        </h3>
        <p>
          Putrid Potatoes est un site nouveau et à venir et ajoute actuellement
          de nouveaux médias chaque semaine. Les médias ajoutés sont basés sur
          les critiques que nous recevons pour des émissions que nous n'avons
          pas actuellement et sur les nouveaux médias populaires.
        </p>
      </Container>
    </div>
  );
};

export default french;
