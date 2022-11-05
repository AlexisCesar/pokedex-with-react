import style from './Pokedex.module.scss';

// Assets
import pokeball from '../../assets/images/pokeball.png';

// Components
import { Card } from '../../components';

export const Pokedex = () => {
  const pokemonsMock = [
    {
      name: "Pikachu",
      description: "Electrical"
    },
    {
      name: "Bulbasaur",
      description: "Grass"
    },
    {
      name: "Charmander",
      description: "Fire"
    }
  ];

  return (
    <div className={style['title-logo']}>
      <h1>ReactDex!</h1>
      <img src={pokeball} alt="Pokeball logo" />

      <div className={style['cards']}>
        { 
          pokemonsMock && pokemonsMock.map(pokemon => (
            <Card name={pokemon.name} description={pokemon.description} />
          ))
        }
      </div>

    </div>
  );
};
