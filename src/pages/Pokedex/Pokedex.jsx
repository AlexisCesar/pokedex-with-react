import style from './Pokedex.module.scss';

// Assets
import pokeball from '../../assets/images/pokeball.png';

// Components
import { Card } from '../../components';
import { useEffect, useState } from 'react';

export const Pokedex = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    callPokeAPI();
  }, []);

  const callPokeAPI = async () => {
    let endpoints = [];
    for(let i = 1; i < 21; i++) {
      endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}`);
    }

    const requests = endpoints.map(endpoint => fetch(endpoint));

    const responses = await Promise.all(requests);

    const jsonResponses = await Promise.all(responses.map(response => response.json()));

    setData(jsonResponses);
  };


  return (
    <div className={style['title-logo']}>
      <h1>ReactDex!</h1>
      <img src={pokeball} alt="Pokeball logo" />

      <div className={style['cards']}>
        { 
          data && data.map(pokemon => (
            <Card name={pokemon.name} spriteUrl={pokemon.sprites.front_default} key={pokemon.name} />
          ))
        }
      </div>

    </div>
  );
};
