//actiunea de a adauga un produs la favorite
export function addToFavs(car) {
  return {
    type: 'ADD_TO_FAVS',
    payload: car,
  };
}

//actiunea care sterge un produs din favorite

export function removeFromFavs(carId) {
  return {
    type: 'REMOVE_FROM_FAVS',
    payload: carId,
  };
}
