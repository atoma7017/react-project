import React from "react";
import "./Page404.css";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";

function Page404() {
  return (
    <div className="Page404">
      <Container className="">
        <p className="">Avem o veste nu tocmai grozavă... pagina pe care ai încercat să o accesezi nu (mai) există.</p>
        <strong className="error404">404 :(</strong>
        <p className="h4 text-center">
          <Link to="/" className="text-secondary">
            Hai înapoi pe site să vezi alte masini disponibile!
          </Link>
        </p>
      </Container>
    </div>
  );
}

export default Page404;
