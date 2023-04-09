import style from './Card.module.scss';

export const Card = ({ name, spriteUrl }) => {
  return (
    <div className={style['card-box']}>
      <p>Name: {name}</p>
      <img src={spriteUrl} alt="Pokemon sprite" />
    </div>
  );
};
