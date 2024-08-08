import React from 'react';
import { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

function Home() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    fetch('https://freetestapi.com/api/v1/cars?limit=5')
      .then((response) => response.json())
      .then((cars) => {
        setCars(cars);
      });
  }, []);

  function getAutomaticCars(cars) {
    return cars.filter((car) => car.transmission === 'Automatic');
  }
  const automaticCars = getAutomaticCars(cars);

  function getManualCars(cars) {
    return cars.filter((car) => car.transmission === 'Manual');
  }
  const manualCars = getManualCars(cars);

  function getCvtCars(cars) {
    return cars.filter((car) => car.transmission === 'CVT');
  }
  const cvtCars = getCvtCars(cars);

  return (
    <Layout>
      <h1 className="p-4">Bun venit la Automobile.ro!</h1>
      <section className="pt-5 bg-secondary pb-5">
        <h2 className="pb-2 text-dark">Cele mai vizualizate anunțuri!</h2>
        <Row className="justify-content-center">
          {cars.map((car) => {
            return (
              <Card
                xs={12}
                md={6}
                lg={4}
                key={car.id}
                style={{ width: '16rem' }}
                className="m-2 mx-auto"
              >
                {/*  fiecare card are link-ul corespunzator catre pagina de produs */}
                {/* functia encodeURI transofrma caracterele care nu sunt acceptate in url */}
                <Link to={`/car/${car.id}`} className="">
                  <Card.Img variant="top" src={car.image} />
                  <Card.Body>
                    <Card.Title>
                      {car.make} {car.model}
                    </Card.Title>
                    {car.mileage} KM | {car.year}
                    <Card.Text className="text-success">{car.price}$</Card.Text>
                  </Card.Body>
                </Link>
                <div className="">
                  <Link to={`/car/${car.id}`} className="d-block">
                    <Button className="">Vezi!</Button>
                  </Link>
                  <Link to="mailto:atoma7017@gmail.com" className="d-block">
                    <Button className="">Contactează!</Button>
                  </Link>
                </div>
              </Card>
            );
          })}
        </Row>
      </section>
      <section className="automatic pt-5 pb-5">
        <h1 className="pb-2 text-dark">Mașini automate</h1>
        <Row className="justify-content-start">
          {automaticCars.map((car) => {
            return (
              <Card
                xs={12}
                md={6}
                lg={4}
                key={car.id}
                style={{ width: '15rem' }}
                className="m-1 mx-auto"
              >
                <Link to={`/car/${car.id}`} className="">
                  <Card.Img variant="top" src={car.image} />
                  <Card.Body>
                    <Card.Title>
                      {car.make} {car.model}
                    </Card.Title>
                    {car.mileage} KM | {car.year}
                    <Card.Text className="text-success">{car.price}$</Card.Text>
                  </Card.Body>
                </Link>
                <div className="">
                  <Link to={`/car/${car.id}`} className="d-block">
                    <Button className="">Vezi!</Button>
                  </Link>
                  <Link to="mailto:atoma7017@gmail.com" className="d-block">
                    <Button className="">Contactează!</Button>
                  </Link>
                </div>
              </Card>
            );
          })}
        </Row>
      </section>
      <section className="manual bg-dark pt-5 pb-5">
        <h1 className="pb-2">Mașini manuale</h1>
        <Row className="justify-content-center">
          {manualCars.map((car) => {
            return (
              <Card
                xs={12}
                md={6}
                lg={4}
                key={car.id}
                style={{ width: '15rem' }}
                className="m-1 mx-auto"
              >
                <Link to={`/car/${car.id}`} className="">
                  <Card.Img variant="top" src={car.image} />
                  <Card.Body>
                    <Card.Title>
                      {car.make} {car.model}
                    </Card.Title>
                    {car.mileage} KM | {car.year}
                    <Card.Text className="text-success">{car.price}$</Card.Text>
                    <Card.Text className="text-dark">
                      {car.transmission}
                    </Card.Text>
                  </Card.Body>
                </Link>
                <div className="">
                  <Link to={`/car/${car.id}`} className="d-block">
                    <Button className="">Vezi!</Button>
                  </Link>
                  <Link to="mailto:atoma7017@gmail.com" className="d-block">
                    <Button className="">Contactează!</Button>
                  </Link>
                </div>
              </Card>
            );
          })}
        </Row>
      </section>
      <section className="Hibride bg-secondary pt-5 pb-5">
        <h1 className="pb-2 text-dark">Mașini hibride</h1>
        <Row className="justify-content-center">
          {cvtCars.map((car) => {
            return (
              <Card
                xs={12}
                md={6}
                lg={4}
                key={car.id}
                style={{ width: '15rem' }}
                className="m-1 mx-auto"
              >
                <Link to={`/car/${car.id}`} className="">
                  <Card.Img variant="top" src={car.image} />
                  <Card.Body>
                    <Card.Title>
                      {car.make} {car.model}
                    </Card.Title>
                    {car.mileage} KM | {car.year}
                    <Card.Text className="text-success">{car.price}$</Card.Text>
                    <Card.Text className="text-dark">
                      {car.transmission}
                    </Card.Text>
                  </Card.Body>
                </Link>
                <div className="">
                  <Link to={`/car/${car.id}`} className="d-block">
                    <Button className="">Vezi!</Button>
                  </Link>
                  <Link to="mailto:atoma7017@gmail.com" className="d-block">
                    <Button className="">Contactează!</Button>
                  </Link>
                </div>
              </Card>
            );
          })}
        </Row>
      </section>
      <section className="p-5">
      
        <Link to="/carlist" >
        <h5>Vezi lista complete de mașini chiar aici</h5>
        </Link>
        </section>
    </Layout>
  );
}

export default Home;
