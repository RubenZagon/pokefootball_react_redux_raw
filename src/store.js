import {
  createStore
} from "redux";

const initialState = {
  jugadores: [{
      id: 1,
      nombre: "Rubén Ramón",
      foto: 'https://k60.kn3.net/taringa/8/E/2/A/6/A/Taringuero_69/8BC.jpg'
    },
    {
      id: 2,
      nombre: "Yasmina Fakundo",
      foto: "https://assets.vg247.com/current/2016/07/pokemon_sun_an_moon_komala.jpg"
    },
    {
      id: 3,
      nombre: "Oscar Locado",
      foto: "https://hypescience.com/wp-content/uploads/2016/08/pokemons-mais-dificeis-de-capturar-2.png"
    },
    {
      id: 4,
      nombre: "Schrödinguer",
      foto: "http://blog-imgs-76.fc2.com/o/r/i/oripokefantasy/Epsilon.png"
    },
  ],
  titulares: [],
  suplentes: []
}

const reducerEntrenador = (state = initialState, action) => {

  switch (action.type) {
    case 'AGREGAR_TITULAR':
      return {
        ...state,
        titulares: state.titulares.concat(action.jugador), // Añadir el juegador a titulares
          jugadores: state.jugadores.filter(j => j.id !== action.jugador.id) // Borrar el jugador de la lista de jugadores
      }

      case 'AGREGAR_SUPLENTE':
        return {
          ...state,
          suplentes: state.suplentes.concat(action.jugador),
            jugadores: state.jugadores.filter(j => j.id !== action.jugador.id)
        }

        case 'QUITAR_TITULAR':
          return {
            ...state,
            titulares: state.titulares.filter(j => j.id !== action.jugador.id),
              jugadores: state.jugadores.concat(action.jugador).sort((a, b) => {
                if (a.id > b.id) {
                  return 1;
                }
                if (a.id < b.id) {
                  return -1;
                }
                return 0;
              })
          }

          case 'QUITAR_SUPLENTE':
            return {
              ...state,
              suplentes: state.suplentes.filter(j => j.id !== action.jugador.id),
                jugadores: state.jugadores.concat(action.jugador).sort((a, b) => { // Usado el sort así para poder ordenar un array de objetos
                  if (a.id > b.id) {
                    return 1;
                  }
                  if (a.id < b.id) {
                    return -1;
                  }
                  return 0;
                })
            }

            default:
              return state
  }

}

export default createStore(reducerEntrenador)