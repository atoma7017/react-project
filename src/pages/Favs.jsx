import React from 'react';
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Layout from '../components/Layout';
//importam ce avem nevoie
import { FavsContext } from '../store/Favourites/context';
import { removeFromFavs } from '../store/Favourites/actions';
import { Link } from 'react-router-dom';

export function Favs() {
  //extragem din state ul global produsele favorite, precum si functia care modifica state-ul
  const { favsState, favsDispatch } = useContext(FavsContext);

  function handleRemoveProduct(carId) {
    // Apelam actiunea de stergere de la favorite, cu payload-ul aferent.
    const actionResult = removeFromFavs(carId);
    // Trimitem rezultatul actiunii catre reducer.
    favsDispatch(actionResult);
  }
  return (
    <Layout>
      <div>
        {/* Afisam produsele favorite pe ecran. */}
        {favsState.cars.length === 0 ? (
          <div>
            <p>Nu ai produse favorite.</p>
            <Link to="/carlist">
              <Button> Listă mașini</Button>
            </Link>
          </div>
        ) : (
          favsState.cars.map((car) => {
            return (
              <section>
                <div key={car.id} className="my-3">
                  <h1>
                    {car.make}
                    {car.model}
                  </h1>
                  <img src={car.image} alt="" />
                  <div>
                    <strong>{car.price}$</strong>
                  </div>
                  <Button
                    variant="danger"
                    // Apelam functia ce va declansa actiunea de stergere a produsului, cu payload-ul aferent.
                    onClick={() => handleRemoveProduct(car.id)}
                  >
                    Șterge de la favorite
                  </Button>
                </div>
              </section>
            );
          })
        )}
      </div>
    </Layout>
  );
}
