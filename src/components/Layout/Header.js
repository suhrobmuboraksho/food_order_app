import HeaderCartButton from "./HeaderCartButton";
import classes from "./Header.module.css";
import MealsImage from "../../assets/meals.jpg";

const Header = ({ onShowCart }) => {
  return (
    <>
      <header className={classes.header}>
        <h1>React meals</h1>
        <HeaderCartButton onClick={onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={MealsImage} alt="Table full of delicious food!" />
      </div>
    </>
  );
};

export default Header;
