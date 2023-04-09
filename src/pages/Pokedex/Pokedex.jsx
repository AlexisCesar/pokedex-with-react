import style from './Pokedex.module.scss';

// Assets
import pokeball from '../../assets/images/pokeball.png';

// Components
import { Card } from '../../components';
import { useEffect, useState } from 'react';

export const Pokedex = () => {
  const [data, setData] = useState([]);
  const [pokemonsAvailable, setPokemonsAvailable] = useState(0);
  const [pokemonsPerPage, setPokemonsPerPage] = useState(20);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    defineAmountOfPokemons();
    callPokeAPI();
  }, []);

  useEffect(() => {
    callPokeAPI();
  }, [currentPage]);


  const defineAmountOfPokemons = async () => {
    await fetch('https://pokeapi.co/api/v2/pokemon?limit=1')
    .then(res => res.json())
    .then(res => setPokemonsAvailable(res.count));
  };

  const callPokeAPI = async () => {
    let endpoints = [];
    let startPoint = 1 + (currentPage * pokemonsPerPage);

    for(let i = startPoint; i < startPoint + pokemonsPerPage; i++) {
      endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}`);
    }

    const requests = endpoints.map(endpoint => fetch(endpoint));

    const responses = await Promise.all(requests);

    const jsonResponses = await Promise.all(responses.map(response => response.json()));

    setData(jsonResponses);
  };

  const handleNextPage = () => {
    if(currentPage < (Math.floor(pokemonsAvailable / pokemonsPerPage)))
      setCurrentPage(currentPage + 1);
  };

  const handlePreviousPage = () => {
    if(currentPage > 0)
      setCurrentPage(currentPage - 1);
  };

  return (
    <>
    <div className={style['title-logo']}>
      <h1>ReactDex!</h1>
      <img src={pokeball} alt="Pokeball logo" />
      <h2>Pokémons available: {pokemonsAvailable}</h2>
    </div>


      <div className={style['cards']}>
        { 
          data && data.map(pokemon => (
            <Card name={pokemon.name} spriteUrl={pokemon.sprites.front_default} key={pokemon.name} />
          ))
        }
      </div>

      <div className={style["pagination"]}>
          <span>Total pages: {Math.floor(pokemonsAvailable / pokemonsPerPage) + 1}</span>
          <span>Current page: {currentPage + 1}</span>
        <ul>
          <button onClick={handlePreviousPage}>Previous Page</button>
          <button onClick={handleNextPage}>Next Page</button>
        </ul>
      </div>
    </>
  );
};
