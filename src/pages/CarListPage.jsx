import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const CarListPage = () => {
  const [cars, setCars] = useState([]);
  const [makeFilter, setMakeFilter] = useState('');

  useEffect(() => {
    fetch('https://freetestapi.com/api/v1/cars')
      .then((response) => response.json())
      .then((data) => {
        setCars(data);
      });

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);

  function getUniqueMake() {
    const makes = cars.map((car) => car.make);
    return [...new Set(makes)];
  }

  const filteredCars = cars.filter((car) => {
    return car.make.toLowerCase().includes(makeFilter.toLowerCase());
  });

  const uniqueMake = getUniqueMake();

  return (
    <Layout>
      <section className="pt-5 pb-5">
        <h2 className="pb-2">Alege mașina ideala din intreaga listă!</h2>

        <Form className="mb-3">
          <div className="w-50 mx-auto">
            <Row>
              <Col>
                <Form.Group controlId="formMake">
                  <Form.Label>Marca</Form.Label>
                  <Form.Select onChange={(e) => setMakeFilter(e.target.value)}>
                    {' '}
                    <option value="">Toate mărcile</option>
                    {uniqueMake.map((make, index) => (
                      <option key={index} value={make}>
                        {make}
                      </option>
                    ))}
                  </Form.Select>
                </Form.Group>
              </Col>
            </Row>
          </div>
        </Form>

        <Row className="justify-content-center">
          {filteredCars.map((car) => {
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
    </Layout>
  );
};

export default CarListPage;
