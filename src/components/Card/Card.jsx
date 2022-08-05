import style from './Card.module.scss';

export const Card = ({ title, description }) => {
  return (
    <div className={style['card-box']}>
      <p>Title: {title}</p>
      <p>Description: {description}</p>
    </div>
  );
};
