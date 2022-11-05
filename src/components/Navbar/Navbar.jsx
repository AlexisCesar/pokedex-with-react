import style from './Navbar.module.scss';

export const Navbar = () => {
  return (
    <div className={style["navbar-wrapper"]}>
      <h2 className={style.logo}>ReactDex!</h2>
    </div>
  );
};
