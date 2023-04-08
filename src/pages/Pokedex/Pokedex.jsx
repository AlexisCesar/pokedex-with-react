import style from './Pokedex.module.scss';

// Assets
import pokeball from '../../assets/images/pokeball.png';

// Components
import { Card } from '../../components';
import { useEffect, useState } from 'react';

export const Pokedex = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    apiCallTest();
  }, []);

  const apiCallTest = async () => {
    await fetch('https://pokeapi.co/api/v2/pokemon')
    .then(res => res.json())
    .then(res => setData(res.results));
  };


  return (
    <div className={style['title-logo']}>
      <h1>ReactDex!</h1>
      <img src={pokeball} alt="Pokeball logo" />

      <div className={style['cards']}>
        { 
          data && data.map(pokemon => (
            <Card name={pokemon.name} key={pokemon.name} />
          ))
        }
      </div>

    </div>
  );
};
