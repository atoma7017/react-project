//state ul initial al favs va fi un array gol

export const favsInitialState = {
  cars: [],
};

//reducer-ul primeste ca parametrii state-ul, respectiv rezultatul apelului unei actiuni

export function favsReducer(state, action) {
  console.log(action);
  //evaluam tipurile actiunii
  switch (action.type) {
    case 'ADD_TO_FAVS': {
      //cautam produsul adaugat in produsele pe care le avem in state
      const isInList = state.cars.find((car) => {
        return car.id === action.payload.id;
      });
      //daca produsul este deja in state, returnam stateul
      if (isInList) {
        return state;
      } else {
        //daca produsul nu este in state, il adaugam la inceputul listei de produse.
        const newState = {
          cars: [...state.cars, action.payload],
        };
        return newState;
      }
    }

    case 'REMOVE_FROM_FAVS': {
      // Pentru a șterge produsele, filtram produsele din state, excluzandu-l pe cel care are id-ul venit din payload.
      const filteredCars = state.cars.filter((car) => {
        return car.id !== action.payload;
      });
      // State-ul nou va contine produsele filtrate.
      const newState = {
        cars: filteredCars,
      };
      return newState;
    }
    // Nu uitam ca in cazul default sa returnam state-ul anterior, nemodificat!
    default:
      return state;
  }
}
