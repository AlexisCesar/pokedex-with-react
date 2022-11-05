import style from './Card.module.scss';

export const Card = ({ name, description }) => {
  return (
    <div className={style['card-box']}>
      <p>Name: {name}</p>
      <p>Description: {description}</p>
    </div>
  );
};
