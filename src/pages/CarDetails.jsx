import { useContext } from "react";
import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Layout from "../components/Layout";
import Button from "react-bootstrap/Button";
import { FavsContext } from "../store/Favourites/context";
import { addToFavs } from "../store/Favourites/actions";

function CarDetails() {
  const { id } = useParams();
  const [car, setCar] = useState([]);

  useEffect(() => {
    fetch(`https://freetestapi.com/api/v1/cars/${id}`)
      .then((response) => response.json())
      .then((car) => {
        setCar(car);
      });

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [id]);

  const { favsDispatch } = useContext(FavsContext);

  function handleAddToFavs(car) {
    // Apelam actiunea de adaugare la favorite, cu payload-ul aferent.
    const actionResult = addToFavs(car);
    // Trimitem rezultatul actiunii catre reducer.
    favsDispatch(actionResult);
  }

  return (
    <Layout>
      <section>
        <div>
          <h1>
            {car.make} {car.model}
          </h1>
          <img src={car.image} alt={car.model} />
          <section className="row ">
            <div className="info col">
              <ul className="d-flex align-items-start flex-column width">
                <li>Transmisie: {car.transmission}</li>
                <li>Anul Fabricatiei: {car.year}</li>
                <li>Kilometraj: {car.mileage} km</li>
                <li>Motor: {car.engine}</li>
                <li>Cai Putere: {car.horsepower} CP</li>
              </ul>
            </div>
            <div className="action col">
              <p className="text-success">Pret: {car.price}$</p>
              <Button
                variant="success"
                onClick={() => {
                  //construim payload-ul si il pasam ca argument functiei care va apela actiunea addToCart
                  handleAddToFavs({
                    id,
                    image: car.image,
                    make: car.make,
                    model: car.model,
                    price: car.price,
                  });
                }}
              >
                {" "}
                Adauga la favorite
              </Button>
            </div>
          </section>
        </div>
      </section>
    </Layout>
  );
}

export default CarDetails;
