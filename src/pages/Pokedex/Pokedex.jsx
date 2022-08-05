import style from './Pokedex.module.scss';

// Assets
import pokeball from '../../assets/images/pokeball.png';

export const Pokedex = () => {
  return (
    <div className={style['title-logo']}>
      <h1>ReactDex!</h1>
      <img src={pokeball} alt="Pokeball logo" />
    </div>
  );
};
